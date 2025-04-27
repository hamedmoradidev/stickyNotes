import React, { useContext } from 'react'
import { useEffect } from 'react'
import Note from './Note'
import {NotesContext} from '../../App'
export default function Board() {
    const { notes, setNotes } = useContext(NotesContext)
  
  return (
    <div className='w-11/12 h-full flex justify-start flex-wrap p-10 gap-4'>
        {notes.map(( note , index) => {
            return(
                <Note key={index} data={note} />
            )
        })}
    </div>
  )
}
