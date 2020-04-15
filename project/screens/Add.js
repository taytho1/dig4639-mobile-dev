import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
/*import { trackPromise, usePromiseTracker, promiseTrackerHoc } from "react-promise-tracker";*/
import { MonoText } from '../components/StyledText';

const reg =/^[0-9]\d{2}-\d{3}-\d{4}$/;

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
        this.setState({
            disabledNumber: false,
            name: text
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
        this.setState({
            disabledButton:false
        })
        if(reg.test(text2)){
            this.setState({number: text2})
        }
        else{
            this.state.number = "";
        }
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
        this.props.navigation.navigate("Home")
    }
    else 
    {
        alert("incorrect credentials");
        console.log("error");
        console.log(this.state.name);
        console.log(this.state.number);
    }
}

render() {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
            <Text style={styles.heading}>Enter your name first:</Text>
            <TextInput
                style={styles.textInput}
                placeholder ="e.g. Bob"
                onChangeText={(text) => this.onChangeText(text)}
            />
            <Text style={styles.heading}>Next, enter your phone number:</Text>
            <TextInput
                style={styles.textInput}
                placeholder ="e.g. 000-000-0000"
                onChangeText={(text2) => this.onChangeNumber(text2)}
                keyboardType="numbers-and-punctuation"
                disabled = {this.state.disabledNumber}
            />
            <TouchableOpacity title="Add Contact" onPress={() => this.onButtonPress()} 
                disabled = {this.state.disabledButton}
                style={styles.button} >
                <Text style={styles.buttonText} >Add Contact</Text>
            </TouchableOpacity>
            </Card>
        </View>
    )
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
        width: 500,
        height: 200,
        padding: 30,
      },
      heading: {
        fontSize: 20,
        fontWeight: "bold",
      },
      button: {
        backgroundColor: '#ffc0cb',
        width: 300,
        padding: 5,
        alignSelf: "center",
      },
      buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: "#db7093",
      },
      textInput: {
        backgroundColor: '#f5f5f5',
        width: 300,
        padding: 10,
        paddingBottom: 20,
      },
  });