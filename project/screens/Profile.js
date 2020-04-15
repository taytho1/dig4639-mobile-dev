import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
/*import { trackPromise, usePromiseTracker, promiseTrackerHoc } from "react-promise-tracker";*/
import { MonoText } from '../components/StyledText';

/*const HEADERS = {
    "method": "GET",
    "headers": {
    "API": "thompson",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}*/
export default function HomeScreen() {
  /*const { promiseInProgress } = usePromiseTracker();*/
  const [profile, setProfile] = React.useState([])

  React.useEffect(() => {
    console.log("Use Effect")
    fetch('http://plato.mrl.ai:8080/profile',{
        "method": "GET",
        "headers": {
        "API": "thompson",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(response => response.json())
      .then(body => setProfile(body.profile))
      console.log(profile)
  })

  return (
    <View >
    <ScrollView>
        <Card title={<Text>{profile}</Text>}/>
      </ScrollView>
    </View>
  );
}

/*

{ promiseInProgress ? 
        <ActivityIndicator />
        :
        profile.map((p, i) =>
        <Card key={i} title={<Text>{p.name}</Text>}/>)}


export default class Profile extends React.Component {
    state={profileList:[]}
    focusListener = undefined

  constructor(props){
    super(props)
    this.focusListener = props.navigation.addListener('focus',() => this.componentGainFocus())

    this.state = {
        name: "",
        count: "",
    }
  }

updateProfile() {
    fetch('http://plato.mrl.ai:8080/profile',{
        "method": "GET",
        "headers":{
            "API":"thompson",
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        .then(response => response.json())
        .then(body => {
          console.log(body)
          this.setState({profileList: body.profile})
    })
}
componentGainFocus(){
    console.log("Focused")
    this.updateProfile()
    }
    
componentWillUnmount(){
    this.props.navigation.removeListener('focus', this.componentGainFocus)
}
    
componentDidMount(){
    this.updateProfile()
}

render(){
return (
    <View>
      <ScrollView>
        
        <Card title=
        {<Text>
        {this.body}
        </Text>}>
        </Card>
      </ScrollView>
    </View>
  );
}
}
*/