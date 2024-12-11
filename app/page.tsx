'use client'; // This makes sure this code runs on the client-side

import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the user query to the Next.js API route
    const res = await fetch('/api/process-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResponse(data.response); // Display the response from the Python backend
  };

  return (
    <div>
      <h1>Conversational Bot</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me something..."
        />
        <button type="submit">Submit</button>
      </form>

      {response && <p><strong>Response: </strong>{response}</p>}

      <elevenlabs-convai agent-id="2YhyeLFVQ2jzHkGXpKHj"></elevenlabs-convai>
      <script
        src="https://elevenlabs.io/convai-widget/index.js"
        async
        type="text/javascript"
      ></script>
    </div>
  );
}
