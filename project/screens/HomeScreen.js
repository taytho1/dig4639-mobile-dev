import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { trackPromise, usePromiseTracker, promiseTrackerHoc } from "react-promise-tracker";
import { MonoText } from '../components/StyledText';

const HEADERS = {
    "method": "GET",
    "headers": {
    "API": "thompson",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}
export default function HomeScreen() {
  const { promiseInProgress } = usePromiseTracker();
  const [contacts, setContacts] = React.useState([])
  
  React.useEffect(() => {
    console.log("Use Effect")
    trackPromise(fetch('http://plato.mrl.ai:8080/contacts',HEADERS
    )
      .then(response => response.json())
      .then(body => setContacts(body.contacts)))
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        { promiseInProgress ? 
        <ActivityIndicator />
        :
        contacts.map((contact, i) =>
        <Card key={i} title={contact.name}/>)
        }
      </ScrollView>
    </View>
  );
}

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
    backgroundColor: '#fff',
  },
});
