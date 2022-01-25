import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Tweets(){
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ]);

  return (
    <>
      {tweets.map(tweet => (
        <Tweet text={tweet} />
      ))}

      <button 
        onClick={() => setTweets([...tweets, `Tweet ${tweets.length + 1}`])}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#fff',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Adicionar tweet
      </button>
    </>
  );
}