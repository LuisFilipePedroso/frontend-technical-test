import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../actions/events'

import getData from '../../utils/api'

import EventList from '../../components/EventList'

function Events() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchInitialData() {
      const events = await getData()
      dispatch(fetchData(events))
      setLoading(false)
    }

    fetchInitialData()
  })

  return loading === true ? 'Loading...' : <EventList />
}

export default Events
