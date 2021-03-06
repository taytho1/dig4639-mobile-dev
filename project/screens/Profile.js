import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

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
          console.log(body.name)
          console.log(body.count)
          this.setState({
            profileList: body.profile,
            name: body.name,
            count: body.count,
            })
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
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
            <Card  title=
                {<Text style={styles.heading}>
                {this.state.name}
                </Text>}>
                {<Text style={styles.heading}>
                {this.state.count}
                </Text>}
            </Card>
        </View>
      </ScrollView>
    </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#faf0e6',
      alignItems: "center",
    },
    card: {
      flex: 1,
      width: 700,
      height: 200,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });