export default async function deleteBooth({user_id, identifier}) {
  const response = await fetch('/api/deleteBooth', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id,
      identifier,
    })
  });

  if (response.ok) {
    const data = await response.json();
    console.log('Success:', data);
  } else {
    const errorData = await response.json();
    console.error('Error:', errorData);
  }
}