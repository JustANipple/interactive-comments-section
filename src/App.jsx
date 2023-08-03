import { useState } from 'react';
import './App.css'
import Comment from "./components/Comment/Comment"
import Post from './components/Post/Post'
import jsonData from "./data.json"

function App() {

  if(localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify(jsonData));
  }
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  console.log(data.comments);

  return (
    <main className='main'>
      <div className='comments'>
        {data.comments.map((comment) => {
          return (
            <Comment 
              /* Comment variables */
              key={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              user={comment.user}
              replies={comment.replies}
              /* Current user */
              currentUser={data.currentUser.username}
            />
          )
        })}
      </div>
      <Post 
        currentUser={data.currentUser}
        type={"send"}
        data={data}
        setData={setData}
      />
    </main>
  )
}

export default App
