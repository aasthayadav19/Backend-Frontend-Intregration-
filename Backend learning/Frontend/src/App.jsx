import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState ([
  {
  title: "test title1",
  description: "test description",
  },
  {
  title: "test title2",
  description: "test description",
  },
  {
  title: "test title3",
  description: "test description",
  },
  {
  title: "test title4",
  description: "test description",
  }
]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/notes')
      .then((res) =>{
        setNotes(res.data.notes);
      });
  }, []);

  

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
