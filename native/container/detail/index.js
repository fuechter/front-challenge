import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

export default class DetailContainer extends Component {

  static navigationOptions = {
    title: 'Course',
  }

  render () {

    const { course } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={{uri: course.img}} />
          <Text style={styles.headerTitle}>{course.name}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'relative',
  },
  headerTitle: {
    backgroundColor: '#E56A68',
    position: 'absolute',
    bottom: 10,
    left: 0,
  },
  img: {
    width: Dimensions.get('window').width,
    height: 200
  }
})
