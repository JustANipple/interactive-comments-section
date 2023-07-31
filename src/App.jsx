import './App.css'
import Comment from "./components/Comment/Comment"
import Post from './components/Post/Post'
import data from "./data.json"

function App() {
  
  if(localStorage.getItem("comment 1") === null ||
      localStorage.getItem("currentuser") === null) {
        data.comments.map((comment) => {
          localStorage.setItem(`comment ${comment.id}`, JSON.stringify(comment));
        })
        localStorage.setItem("currentuser", JSON.stringify(data.currentUser));
  }


  return (
    <main className='main'>
      <div className='comments'>
        {data.comments.map((comment) => {
          return (
            <Comment 
              /* json data */
              currentUser={data.currentUser.username}
              key={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              user={comment.user}
              replies={comment.replies}
            />
          )
        })}
      </div>
      <Post 
        currentUser={data.currentUser}
        type={"send"}
      />
    </main>
  )
}

export default App
