import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title 1', subtitle: 'Subtitle 1', likes: 10 },
    { id: Math.random(), title: 'Title 2', subtitle: 'Subtitle 2', likes: 20 },
    { id: Math.random(), title: 'Title 3', subtitle: 'Subtitle 3', likes: 30 },
  ]);

  function handleRefresh() {
    setPosts((prevPost) => [
      ...prevPost,
      {
        id: Math.random(),
        title: `Title ${prevPost.length + 1}`,
        subtitle: `Subtitle ${prevPost.length + 1}`,
        likes: 40,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevPost) => prevPost.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header>
        <h2>
          Posts of the week <button onClick={handleRefresh}>Refresh</button>
        </h2>
      </Header>
      <hr />
      {posts.map(({ id, title, subtitle, likes }) => (
        <Post
          key={title}
          post={{ id, title, subtitle }}
          likes={likes}
          onRemove={handleRemovePost}
        />
      ))}
    </>
  );
}

export default App;
