import React from 'react'
import { JorubalEntry } from './JorubalEntry'

export const JournalEntries = () => {
    const entries=[1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="journal__entries">
            {
                entries.map(val=>(
                    <JorubalEntry key={val}/>
                ))
            }
        </div>
    )
}
