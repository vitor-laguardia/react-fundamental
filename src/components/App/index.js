import React, { useState } from 'react';
import Post from '../Post';
import Header from '../Header';
import ThemeProvider from '../../contexts/ThemeProvider';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      likes: 10,
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      likes: 30,
      read: true,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevPost) => [
      ...prevPost,
      {
        id: Math.random(),
        title: `Title ${prevPost.length + 1}`,
        subtitle: `Subtitle ${prevPost.length + 1}`,
        likes: 40,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevPost) =>
      prevPost.map((post) =>
        post.id === postId ? { ...post, removed: !post.removed } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts of the week <button onClick={handleRefresh}>Refresh</button>
        </h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post key={post.id} post={post} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}

export default App;
