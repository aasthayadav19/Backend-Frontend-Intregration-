import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState ([]);


  function fetchNotes() {
      axios.get("http://localhost:3000/api/notes")
      .then(res =>{
        setNotes(res.data.notes);
      })
  }

   useEffect(() =>{
       fetchNotes();
   }, [])
  

  return (
    <>
    <div className="notes">
      {notes.map(note => {
        return  <div className="note">
           <h1>title</h1>
          <p>description</p>
          </div>
      })}
     
        </div></>
  )
}

export default App
