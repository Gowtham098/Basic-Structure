import React, { Component } from "react"
import {
  AppRegistry,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  NativeModules,
  TouchableOpacity } from "react-native"

  let SCREEN_HEIGHT = Dimensions.get('window').height;
  let SCREEN_WIDTH = Dimensions.get('window').width;

  const DATA = [
    {
      "id": 1,
      "topicName": "#VMovie"
      },
      {
      "id": 2,
      "topicName": "#SushantSinghRajput"
      },
      {
      "id": 3,
      "topicName": "#Corona Virus 2019"
      },
      {
      "id": 4,
      "topicName": "#Supreme Court"
      }

];

  export default class Streams extends React.Component {
    render() {
      return(
        <View>
           <FlatList
                        data={DATA}
                        // data={this.state.dataSource}

                        renderItem={
                            ({ item }) =>
                            <TouchableOpacity
                            // onPress={() => { this.props.navigation.navigate('AdviceDetails',{AdviceDetails : item}) }}
                            activeOpacity={0.8}
                            style={{
                                flex: 1, flexDirection: 'row', borderRadius: 15, backgroundColor: 'white', padding: 10, margin: 10, shadowOffset: { height: 2, width: 2 },
                                shadowOpacity: 2,
                                shadowColor:'#d3d3d3',
                                shadowRadius: 5,
                                elevation: 5,
                            }}>
                            
                                      
                                        <View style={{flex:1,paddingLeft:8,height:70,justifyContent:'center'}}>
                                            {/* <Text style={{ fontSize:16,width:'60%'}}>Hello :</Text> */}
                                            <Text style={{ fontSize:18,width:'100%',textAlign:'left' }}>{item.topicName}</Text>
                                        </View>
                            </TouchableOpacity>

                                }
                        keyExtractor={item => item.id}
                    />
          {/* <IndicatorViewPager
            initialPage={0}
            indicatorPosition="top"
            style={{ flex: 1, flexDirection: 'column-reverse', paddingTop: 0, backgroundColor: 'white' }}
            indicator={this._renderTitleIndicator()}
          >
            <View style={{}}>
              <AllStreams
                navigation={this.props.navigation}
              />
            </View>
            <View style={{}}>
              <MyStreams {...this.props} />
            </View>
          </IndicatorViewPager> */}
        </View>
      )
    }
  }