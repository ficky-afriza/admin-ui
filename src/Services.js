export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`Gagal mengambil posts (HTTP ${response.status})`);
  }

  return response.json();
}
