import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services.js";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("[Exercise] Gagal mengambil posts:", error);
        setError(
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengambil posts."
        );
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        Post Cards
      </h1>
      {error ? (
        <p role="alert" className="text-center text-red-600">
          {error}
        </p>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Exercise;