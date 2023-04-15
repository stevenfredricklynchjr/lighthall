import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';


function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    fetchClickCount();
  }, []);

  const fetchClickCount = async () => {
    const response = await API.get('clickCountAPI', '/clickCount');
    setClickCount(response.count);
  }

  const handleClick = async () => {
    await API.post('clickCountAPI', '/incrementClickCount', {
      body: { count: clickCount + 1 }
    });
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h1>Click Count: {clickCount}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
