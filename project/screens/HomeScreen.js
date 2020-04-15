import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { trackPromise, usePromiseTracker, promiseTrackerHoc } from "react-promise-tracker";
import { MonoText } from '../components/StyledText';

/*const HEADERS = {
    "method": "GET",
    "headers": {
    "API": "thompson",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}*/
export default class HomeScreen extends React.Component {
  state={contactList:[]}
  focusListener = undefined

  constructor(props){
    super(props)
    this.focusListener = props.navigation.addListener('focus',() => this.componentGainFocus())
  }

  updateContacts() {
    fetch('http://plato.mrl.ai:8080/contacts', {
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
      this.setState({contactList: body.contacts})
  })
  }

  componentGainFocus(){
    console.log("Focused")
    this.updateContacts()
  }

  componentWillUnmount(){
    this.props.navigation.removeListener('focus', this.componentGainFocus)
  }

  componentDidMount(){
    this.updateContacts()
  }

  removeContact(position){
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      "method": "POST",
      "headers": {
        "API": "thompson",
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body: JSON.stringify({position:position})
  })
    .then(response => response.json())
    .then(body => {
      console.log(position)
      if(body.removed != undefined){
        const currentList = this.state.contactList.filter((i)=>(i !== position))
        currentList[position]= this.state
        this.setState({contactList: currentList})
        this.updateContacts()
      }
    })
  }

  /*const { promiseInProgress } = usePromiseTracker();
  const [contacts, setContacts] = React.useState([])
  
  React.useEffect(() => {
    console.log("Use Effect")
    trackPromise(fetch('http://plato.mrl.ai:8080/contacts',HEADERS
    )
      .then(response => response.json())
      .then(body => setContacts(body.contacts)))
  }, [])*/
  render(){
  return (
    <View style={styles.container}>
      <ScrollView>
        {<View style={styles.card}>
            {this.state.contactList.map((contacts, i) =>
            <Card  key={i} title=
            {<Text style={styles.body}><Text style={styles.heading}>Name: </Text>{contacts.name}</Text>}>
              {<Text style={styles.body}><Text style={styles.heading}>Number: </Text>{contacts.number}</Text>}
              {<TouchableOpacity title="Delete" style={styles.button} 
                onPress={() => this.removeContact(i)}>
                <Text style={styles.buttonText} >Delete</Text></TouchableOpacity>}
            </Card>)}
        </View>}
      </ScrollView>
    </View>
  );
}
}


/*{ promiseInProgress ? 
        <ActivityIndicator />
        :
*/
HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
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
  body: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#ffc0cb',
    width: 100,
    padding: 5,
    alignSelf: "flex-end",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#db7093",
  },
});
