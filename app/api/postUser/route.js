import { connectToDatabase } from '../../../lib/db';

export async function POST(request) {
  try {
    const { username, name, phone } = await request.json();

    if (!username || !name || !phone) {
      return new Response(JSON.stringify({ error: 'username, name, and phone are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const connection = await connectToDatabase();

    // Consulta para inserir o novo usuário
    const [result] = await connection.execute(
      'INSERT INTO users (username, name, phone) VALUES (?, ?, ?)',
      [username, name, phone]
    );

    connection.end();

    return new Response(JSON.stringify({ message: 'User added successfully', userId: result.insertId, name, username }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
