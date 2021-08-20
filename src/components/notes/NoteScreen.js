import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content"> 
            <NotesAppBar/>
            <div className="notes__content">
            <input
            type="text"
            placeholder="Some Awesome title"
            className="notes__title-input"
            />
            <textarea
            placeholder="What happened today"
            className="notes__textarea"
            >

            </textarea>
            <div className="notes__image">
<img
src="https://www.nationalgeographic.com.es/medio/2021/06/25/_93e4bb67_800x800.jpg"
alt="imagen Previa"
/>
            </div>
        
            </div>
        </div>
    )
}
