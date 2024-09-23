import { connectToDatabase } from '../../../lib/db';

export async function POST(request) {
  // Parse o corpo da solicitação como JSON
  const data = await request.json();
  const { status, description, user_id, identifier, area, phase } = data;

  // Valide os dados recebidos
  if (!status || !description || !user_id || !identifier || !area || !phase) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let connection;

  try {
    const connection = await connectToDatabase();
  
    // Verificar se o registro já existe
    const [rows] = await connection.execute(
      'SELECT id FROM booths WHERE user_id = ? AND identifier = ? AND area = ? AND phase = ?',
      [user_id, identifier, area, phase]
    );
  
    let boothId;
    let responseMessage;
    let responseStatus;
  
    if (rows.length > 0) {
      // Registro encontrado, fazer um update
      boothId = rows[0].id;
      await connection.execute(
        'UPDATE booths SET status = ?, description = ?, user_id = ? WHERE id = ?',
        [status, description, user_id, boothId]
      );
  
      responseMessage = 'Stand description updated successfully';
      responseStatus = 200;
    } else {
      // Registro não encontrado, fazer um insert
      const [result] = await connection.execute(
        'INSERT INTO booths (status, description, user_id, identifier, area, phase) VALUES (?, ?, ?, ?, ?, ?)',
        [status, description, user_id, identifier, area, phase]
      );
  
      boothId = result.insertId;
      responseMessage = 'Stand description saved successfully';
      responseStatus = 201;
    }
  
    // Buscar a linha completa
    const [boothRow] = await connection.execute(
      'SELECT * FROM booths WHERE id = ?',
      [boothId]
    );
  
    return new Response(JSON.stringify({ message: responseMessage, booth: boothRow[0] }), {
      status: responseStatus,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    if (connection) {
      connection.end();
    }
  }
}
