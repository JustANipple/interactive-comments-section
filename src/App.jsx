import { useState } from 'react';
import './App.css'
import Comment from "./components/Comment/Comment"
import Post from './components/Post/Post'
import jsonData from "./data.json"
import Modal from './components/Modal/Modal';

function App() {

  //checks if data exists in localStorage, otherwise sets it
  if(localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify(jsonData));
  }

  //saves data in a state to add, edit and remove content
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  const [modalState, setModalState] = useState("hidden");

  //creates a global variable to create keys for components
  localStorage.setItem("id", 0);
  //generates a new key and saves it into localStorage
  function generateKey() {
    const key = localStorage.getItem("id");
    const parsedId = parseInt(key) + 1;
    localStorage.setItem("id", parsedId);
    return parsedId;
  }

  return (
      <main className='main'>
        <div className='comments'>
          {data.comments.map((comment) => {
            return (
              <Comment
                key={generateKey()}
                id={localStorage.getItem("id")}
                comment={comment}
                data={data}
                setData={setData}
                modalState={modalState}
                setModalState={setModalState}
              />
            )
          })}
        </div>
        <Post 
          type={"send"}
          data={data}
          setData={setData}
        />
        <Modal 
          data={data}
          setData={setData}
          modalState={modalState}
          setModalState={setModalState}
        />
      </main>
  )
}

export default App
