import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { title: 'Title 1', subtitle: 'Subtitle 1', likes: 10 },
    { title: 'Title 2', subtitle: 'Subtitle 2', likes: 20 },
    { title: 'Title 3', subtitle: 'Subtitle 3', likes: 30 },
  ]);

  function handleRefresh() {
    setPosts([
      ...posts,
      {
        title: `Title ${posts.length + 1}`,
        subtitle: `Subtitle ${posts.length + 1}`,
        likes: 40,
      },
    ]);
  }

  return (
    <>
      <Header>
        <h2>
          Posts of the week <button onClick={handleRefresh}>Refresh</button>
        </h2>
      </Header>
      <hr />
      {posts.map(({ title, subtitle, likes }) => (
        <Post key={title} post={{ title, subtitle }} likes={likes} />
      ))}
    </>
  );
}

export default App;
