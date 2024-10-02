import { connectToDatabase } from '../../../lib/db';

export async function GET(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('user_id');
  const area = url.searchParams.get('area');
  const phase = url.searchParams.get('phase');

  // Validação dos parâmetros
  if (!userId || !area || !phase) {
    return new Response(JSON.stringify({ error: 'user_id, area, and phase query parameters are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let connection;

  try {
    connection = await connectToDatabase();

    // Consulta para buscar as descrições dos estandes
    const [rows] = await connection.execute(
      'SELECT * FROM booths WHERE user_id = ? AND area = ? AND phase = ?',
      [userId, area, phase]
    );

    connection.end();

    // if (rows.length === 0) {
    //   return new Response(JSON.stringify({ error: 'No descriptions found' }), {
    //     status: 404,
    //     headers: { 'Content-Type': 'application/json' }
    //   });
    // }

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
