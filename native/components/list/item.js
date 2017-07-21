import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Item extends Component {

  static propTypes = {
    item: PropTypes.object,
    onSelect: PropTypes.func
  }

  handleOnPress = () => {
    const { item, onSelect } = this.props
    onSelect(item)
  }

  render () {

    const { item } = this.props

    return (
      <TouchableOpacity style={styles.item} onPress={this.handleOnPress}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5
  }
})
