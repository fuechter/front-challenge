import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadCourse } from '../../redux/actions'

@connect(({course}) => ({course}))
export default class List extends Component {

  onClick (course) {
    const { dispatch } = this.props
    dispatch(loadCourse({course}))
  }

  render () {
    const { course: { list } } = this.props

    return (
      <div>
        <h1 style={styles.title}>Courses</h1>
        <ul style={styles.container}>
          {list.map(course => (
            <li style={styles.item} key={course.id} onClick={this.onClick.bind(this, course)}>
              {course.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const styles = {
  title: {
    fontFamily: 'Montserrat, sans-serif',
  },
  container: {
    listStyleType: 'none',
    width: '100%',
    padding: '0'
  },
  item: {
    fontFamily: 'Montserrat, sans-serif',
    cursor: 'pointer',
    padding: '10px 0',
    borderBottom: '1px solid #000'
  }
}
