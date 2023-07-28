import './App.css'
import Comment from "./components/Comment/Comment"
import Post from './components/Post/Post'
import data from "./data.json"

function App() {

  return (
    <main className='main'>
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
      <Post 
        currentUser={data.currentUser}
      />
    </main>
  )
}

export default App
