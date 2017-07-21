import React, { Component, PropTypes } from 'react'
import { FlatList, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Item from './item'

export default class List extends Component {

  static propTypes = {
    items: PropTypes.array,
    onSelectItem: PropTypes.func
  }

  _keyExtractor = (item, index) => item.id;

  onSelectItem = (item) => {
    const { onSelectItem } = this.props
    onSelectItem(item)
  }

  renderItem = ({item, key}) => {
    return (
      <Item item={item} onSelect={this.onSelectItem}/>
    )
  }

  render () {
    const { items } = this.props
    return (
      <FlatList data={items} renderItem={this.renderItem.bind(this)} keyExtractor={this._keyExtractor} />
    )
  }
}
