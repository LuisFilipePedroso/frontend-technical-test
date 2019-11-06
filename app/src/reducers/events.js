import { FETCH_DATA } from '../actions/events'

const INITIAL_STATE = []

export default function events(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...action.events
      }
    default:
      return state
  }
}
