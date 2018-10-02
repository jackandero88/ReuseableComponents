// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
//   {
//     //<ScrollView horizontal={true} ref="scrollView"
//  //          onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:100})}>
//  //
//  //           {
//  //              this.state.names.map((item, index) => (
//  //
//  //                 <View key = {item.id} style = {styles.item}>
//  //                    <Text>{ this.state.names.length - 1 == index ? 0 : 1 }</Text>
//  //                 </View>
//  //              ))
//  //           }
//  //        </ScrollView>
//       }
//
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,FlatList} from 'react-native';
import { Image, ScrollView } from 'react-native';
import {Button} from './CircularList.js'
var {height, width} = Dimensions.get('window');


type Props = {};
export default class App extends Component<Props> {
  state = {
    yOffset : 0,
    page:1,
     names: [
        {'name': 'Ben', 'id': 1},
        {'name': 'Susan', 'id': 2},
        {'name': 'Robert', 'id': 3},
        {'name': 'Mary', 'id': 4},
        {'name': 'Daniel', 'id': 5},
        {'name': 'Laura', 'id': 6},
        {'name': 'John', 'id': 7},
        {'name': 'Debra', 'id': 8},
        {'name': 'Aron', 'id': 9},
        {'name': 'Ann', 'id': 10},
        {'name': 'Steve', 'id': 11},
        {'name': 'Olivia', 'id': 12}
     ]
  }
  handleAddList() {
      let lists = this.state.names;
    this.setState({ names: [...lists, ...lists ] })

  }
  handleReverseList() {
      let lists = this.state.names;
    this.setState({ names: [...lists, ...lists.reverse() ] })

  }
  onScroll(event) {
    // var currentOffset = event.nativeEvent.contentOffset.y;
    //     var direction = currentOffset > this.offset ? 'down' : 'up';
    // this.offset = currentOffset;
    // console.log(direction);
//  this.flatList.scrollToEnd({animated: true});
  //let lists = this.state.names;
  //this.setState({ names: [...lists, ...lists.reverse() ] })
  }
  render() {
  let  _this = this;
    return (
      <View style={styles.container}>
      <FlatList style = {{marginTop : 65}} ref={ref => this.flatList = ref} horizontal={true}  onEndReached={({ distanceFromEnd }) => {
                                      this.handleAddList()

                                }}
                              onScroll={this.onScroll}
                               pagingEnabled={true}
                               onMomentumScrollEnd={(event) => {
     // scroll animation ended
     let offset = event.nativeEvent.contentOffset;
     if(offset) {
      var page = Math.round(offset.x / ( width/3)) + 1;
       console.log({page});
    }
     console.log(event.nativeEvent.contentOffset.x);
     console.log(event.nativeEvent.contentOffset.y);
  }}
         data={this.state.names}
         renderItem={({item , index}) =>  <Text style={styles.item}>{index}</Text> }
       />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     borderColor: '#2a4944',
     borderWidth: 1,
     height:50,
     width : width/3,
     backgroundColor: '#d2f7f1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// import React, { Component } from 'react'
// import { Animated, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
//
// const deviceWidth = Dimensions.get('window').width
// const FIXED_BAR_WIDTH = 280
// const BAR_SPACE = 10
//
// const images = [
//   'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
//   'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
//   'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
// ]
//
// export default class App extends Component {
//
//   numItems = images.length
//   itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
//   animVal = new Animated.Value(0)
//
//   render() {
//     let imageArray = []
//     let barArray = []
//     images.forEach((image, i) => {
//       console.log(image, i)
//       const thisImage = (
//         <Image
//           key={`image${i}`}
//           source={{uri: image}}
//           style={{ width: deviceWidth }}
//         />
//       )
//       imageArray.push(thisImage)
//
//       const scrollBarVal = this.animVal.interpolate({
//         inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
//         outputRange: [-this.itemWidth, this.itemWidth],
//         extrapolate: 'clamp',
//       })
//
//       const thisBar = (
//         <View
//           key={`bar${i}`}
//           style={[
//             styles.track,
//             {
//               width: this.itemWidth,
//               marginLeft: i === 0 ? 0 : BAR_SPACE,
//             },
//           ]}
//         >
//           <Animated.View
//
//             style={[
//               styles.bar,
//               {
//                 width: this.itemWidth,
//                 transform: [
//                   { translateX: scrollBarVal },
//                 ],
//               },
//             ]}
//           />
//         </View>
//       )
//       barArray.push(thisBar)
//     })
//
//     return (
//       <View
//         style={styles.container}
//         flex={1}
//       >
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           scrollEventThrottle={10}
//           pagingEnabled
//           onScroll={
//             Animated.event(
//               [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
//             )
//           }
//         >
//
//           {imageArray}
//
//         </ScrollView>
//         <View
//           style={styles.barContainer}
//         >
//           {barArray}
//         </View>
//       </View>
//     )
//   }
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   barContainer: {
//     position: 'absolute',
//     zIndex: 2,
//     top: 40,
//     flexDirection: 'row',
//   },
//   track: {
//     backgroundColor: '#ccc',
//     overflow: 'hidden',
//     height: 2,
//   },
//   bar: {
//     backgroundColor: '#5294d6',
//     height: 2,
//     position: 'absolute',
//     left: 0,
//     top: 0,
//   },
// })
