import { push } from 'react-router-redux'

export function loadCourse ({course}) {
  return dispatch => {
    dispatch({type: 'LOAD_COURSE', course})
    dispatch(push(`/detail/${course.id}`))
  }
}

export function searchCourse () {
  return (dispatch, getState) => {
    const { router, course } = getState()
    const params = router.location.pathname.split('/')
    const id = params[params.length - 1]
    const searched = course.list.filter(c => c.id === id)[0]
    dispatch(loadCourse({course: searched}))
  }
}
