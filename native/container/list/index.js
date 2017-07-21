import React, { Component } from 'react'
import List from '../../components/list'

// @TODO: mock
import courses from '../../mock'


export default class ListContainer extends Component {

  static navigationOptions = {
    title: 'All Courses',
  }

  onSelectItem = (course) => {
    const { navigate } = this.props.navigation
    navigate('Detail', {course})
  }

  render () {

    return (
      <List items={courses} onSelectItem={this.onSelectItem} />
    )
  }
}
