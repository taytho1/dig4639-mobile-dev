import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";
import score from "../App.js";

class Question5 extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Question">
                    <Text>Question5</Text>
                    <Button title="Answer5" onPress={() => navigate("Score")} />
                    <Button title="Answer5" onPress={() => navigate("Score"), score = score +1} />
                </Card>
            </View>
        );
    }

}

export default Question5;
