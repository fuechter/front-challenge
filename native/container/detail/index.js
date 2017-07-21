import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'

const widthWindow = Dimensions.get('window').width

export default class DetailContainer extends Component {

  static navigationOptions = {
    title: 'Course',
  }

  render () {

    const { course } = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={{uri: course.img}} />
          <Text style={styles.headerTitle}>{course.name}</Text>
        </View>
        <Text style={styles.text}>{course.text}</Text>
      </ScrollView>
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
    width: widthWindow
  },
  img: {
    width: widthWindow,
    height: 200
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10
  }
})
