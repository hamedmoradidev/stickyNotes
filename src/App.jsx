import { useState, createContext } from 'react'
import './App.css'
import Docket from './components/docket/Docket'
import Board from './components/board/Board'
import Create from './components/docket/Create'
import { useEffect } from 'react'
export const NotesContext = createContext()

function App() {
  const [notes, setNotes] = useState([])



  return(
    <div className='flex justify-between w-lvw h-lvh font-FuzzyBubblesRegular overflow-x-hidden'>
      <NotesContext.Provider value={{ notes, setNotes }}>
      <Create />
      <Docket />
      <Board />
      </ NotesContext.Provider>
    </div>
  )
}
export default App
