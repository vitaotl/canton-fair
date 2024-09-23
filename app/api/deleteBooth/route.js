import { connectToDatabase } from '../../../lib/db';

export async function DELETE(request) {
  // Parse o corpo da solicitação como JSON
  const data = await request.json();
  const { user_id, identifier } = data;

  // Valide os dados recebidos
  if (!user_id || !identifier) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let connection;

  try {
    connection = await connectToDatabase();
    
    // Verificar se o registro existe
    const [rows] = await connection.execute(
      'SELECT id FROM booths WHERE user_id = ? AND identifier = ?',
      [user_id, identifier]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Stand not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Registro encontrado, fazer a deleção
    const boothId = rows[0].id;
    await connection.execute(
      'DELETE FROM booths WHERE id = ?',
      [boothId]
    );

    return new Response(JSON.stringify({ message: 'Stand deleted successfully' }), {
      status: 200,
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
