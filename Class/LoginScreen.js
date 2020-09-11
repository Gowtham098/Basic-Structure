import React, { Component } from "react"
import {
  AppRegistry,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  TouchableOpacity } from "react-native"
  import LinearGradient from 'react-native-linear-gradient'

  let SCREEN_HEIGHT = Dimensions.get('window').height;
  let SCREEN_WIDTH = Dimensions.get('window').width;

const { RNTwitterSignIn } = NativeModules

const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: "rD7M0GceWorCs7uWdaxsQ8ebo",
  TWITTER_CONSUMER_SECRET: "PpIlugzL3cl76WVg8Tk7X0yxdKQcqgr3CWp1KddrBTv7m7Rorl"
}

export default class TwitterButton extends Component {
  state = {
    isLoggedIn: false,

    UserData : {}
  }

  _twitterSignIn = () => {
    RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData)
        this.setState({UserData: loginData})
        const { authToken, authTokenSecret } = loginData
        if (authToken && authTokenSecret) {
          this.setState({
            isLoggedIn: true
          })
        }
      })
      .catch(error => {
        console.log(error)
      }
    )
  }

  handleLogout = () => {
    console.log("logout")
    RNTwitterSignIn.logOut()
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <View style={this.props.style}>
        {isLoggedIn ? 
            // <TouchableOpacity onPress={this.handleLogout}>
            //   <Text>Log out</Text>
            // </TouchableOpacity>
          <View style={{flex:1,padding:20}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Hello!</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{this.state.UserData.userName}</Text>

            <Text style={{fontSize:16,fontWeight:'bold',marginTop:30}}>Details Fetching :</Text>

            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>1) authToken : {this.state.UserData.authToken}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>2) authTokenSecret : {this.state.UserData.authTokenSecret}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>3) email : {this.state.UserData.email}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>4) name : {this.state.UserData.name}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>5) userId : {this.state.UserData.userID}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,left:5}}>6) userName : {this.state.UserData.userName}</Text>
          </View>
        :
          <View style={{height:SCREEN_HEIGHT,justifyContent:'center'}}>
            {/* <Button name="logo-twitter" style={styles.button} onPress={this._twitterSignIn} title="Login with Twitter">
            </Button> */}

            <TouchableOpacity style={{ height: 50, borderRadius: 31,}} onPress={this._twitterSignIn}>
              <LinearGradient colors={['#0296CC', '#016FA6', '#004B82']} style={{ width: '90%',left:'5%', flexDrection: 'row', height: 50, borderRadius: 31 }}>
                <View style={{ flexDrection: 'row', height: 50, width: '100%', borderRadius: 31, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ flexDirection: 'row', fontSize: 16, color: 'white', fontWeight:'bold'}}>LOGIN WITH TWITTER</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1b95e0',
    color: 'white',
    width: 200,
    height: 50
  }
})