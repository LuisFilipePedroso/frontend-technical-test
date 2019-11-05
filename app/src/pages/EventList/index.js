import React, { useEffect } from 'react'
import getInitialData from '../../utils/api'

function EventList() {
  useEffect(() => {
    async function fetchData() {
      const response = await getInitialData()
      console.log(response)
    }

    fetchData()
  })

  return (
    <div>
      <h3>Event List</h3>
    </div>
  )
}

export default EventList
