import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadCourse } from '../../redux/actions'

class List extends Component {

  onClick (course) {
    const { dispatch } = this.props
    dispatch(loadCourse({course}))
  }

  render () {
    const { course: { list } } = this.props

    return (
      <ul>
        {list.map(course => (
          <li key={course.id} onClick={this.onClick.bind(this, course)}>
            {course.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(({course}) => ({course}))(List)
