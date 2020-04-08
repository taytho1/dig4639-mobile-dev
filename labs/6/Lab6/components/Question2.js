import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";
import score from "../App.js";

class Question2 extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Question">
                    <Text>What replaces the heading tags in react native?</Text>
                    <Button title="View" onPress={() => navigate("Question3")} />
                    <Button title="Text" onPress={() => navigate("Question3"), score = score +1} />
                </Card>
            </View>
        );
    }

}

export default Question2;
