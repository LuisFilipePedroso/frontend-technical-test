export const FETCH_DATA = 'FETCH_DATA'

export function fetchData(events) {
  return {
    type: FETCH_DATA,
    events
  }
}
