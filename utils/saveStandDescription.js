export default async function saveStandDescription(data) {
  const response = await fetch('/api/postDescription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.error}, Details: ${errorData.details}`);
  }

  return await response.json();
}