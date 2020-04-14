import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
/*import { trackPromise, usePromiseTracker, promiseTrackerHoc } from "react-promise-tracker";*/
import { MonoText } from '../components/StyledText';

export default class Add extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name: "",
        number: "",
        disabledButton: true,
        disabledNumber: true,
    };
}
onChangeText(text){
    if(text.length > 0) {
        console.log("Text is set");
        this.setState({
            disabledNumber: false,
            name: text,
        })
    }
    else {
        console.log("No Text");
        this.setState({disabledNumber: true})
        this.setState({disabledButton:true})
}
}
onChangeNumber(text2){
    if(text2.length > 0) {
        console.log("Number is set");
        this.setState({
            disabledButton:false,
            number: text2,
        })
    }
    else {
        console.log("No Number");
        this.setState({disabledButton:true})
    }
}
onButtonPress(){
    if(this.state.name != "" && this.state.number != ""){
        fetch('http://plato.mrl.ai:8080/contacts/add', {
        "method": "POST",
        "headers":{
            "API": "thompson",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            name: this.state.name,
            number: this.state.number
        })
        })
        .then(response => response.json())
        .then(body => console.log(body))
        console.log("success");
        console.log(this.state.name);
        console.log(this.state.number);
    }
    else 
    {
        console.log("error");
        console.log(this.state.name);
        console.log(this.state.number);
    }
}

render() {
    return(
        <View>
            <Text>Enter your name first:</Text>
            <TextInput
                placeholder ="e.g. Bob"
                onChangeText={(text) => this.onChangeText(text)}
            />
            <Text>Next, enter your phone number:</Text>
            <TextInput
                placeholder ="e.g. 000-000-0000"
                onChangeText={(text2) => this.onChangeNumber(text2)}
                disabled = {this.state.disabledNumber}
            />
            <Button title="Add Contact" onPress={() => this.onButtonPress()} 
                disabled = {this.state.disabledButton}/>
        </View>
    )
}
}