import React from 'react'
import { useSelector } from 'react-redux'

export default function EventList() {
    const events = useSelector(state => state.events)
    const a = 0

    return (
        <div>
            <ul>
                
            </ul>
        </div>
    )
}