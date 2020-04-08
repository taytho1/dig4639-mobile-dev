import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";
import score from "../App.js";

class Question1 extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Question">
                    <Text>What replaces the div tag in react native?</Text>
                    <Button title="Text" onPress={() => navigate("Question2")} />
                    <Button title="View" onPress={() => navigate("Question2"), score = score +1} />
                </Card>
            </View>
        );
    }

}

export default Question1;
