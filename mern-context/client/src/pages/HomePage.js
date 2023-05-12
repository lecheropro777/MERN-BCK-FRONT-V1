import { usePosts } from "../context/postContext";

export function HomePage() {
  const { posts } = usePosts();

  if(posts.length===0)return(
    <di>
      <h1>No hay publicaciones</h1>
    </di>
  )

  return (
    <div className="text-white">
      {posts.map(post => (
        <div key={post._id}>{post.title}
        <p>{post.description}</p>
        <img src={post.image}></img>
        </div>
      ))}
    </div>
  );
}
