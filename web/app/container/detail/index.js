import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { searchCourse } from '../../redux/actions'

@connect(({course: { detail }}) => ({detail}))
export default class Detail extends Component {

  componentWillMount () {
    const { dispatch, detail } = this.props

    if (isEmpty(detail)) {
      dispatch(searchCourse())
    }
  }

  render () {
    const { detail } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <img style={styles.img} src={detail.img} />
          <h1 style={styles.headerTitle}>{detail.name}</h1>
        </div>
        <p style={styles.text}>
          {detail.text}
        </p>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    position: 'relative',
  },
  headerTitle: {
    width: '100%',
    background: '#E56A68',
    position: 'absolute',
    bottom: '10px',
    left: '0',
    fontFamily: 'Montserrat, sans-serif'
  },
  img: {
    width: '500px',
    height: '378px'
  },
  text: {
    width: '100%',
    padding: '0 10px'
  }
}
