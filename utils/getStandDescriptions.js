export default async function getStandDescriptions(userId, area, phase) {
  const url = new URL('/api/getDescriptions', window.location.origin);
  url.searchParams.append('user_id', userId);
  url.searchParams.append('area', area);
  url.searchParams.append('phase', phase);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.error}, Details: ${errorData.details}`);
  }

  return await response.json();
}