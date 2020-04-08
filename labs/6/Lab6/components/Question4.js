import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";
import score from "../App.js";

class Question4 extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Question">
                    <Text>What is used for styling in react native?</Text>
                    <Button title="styles.css" onPress={() => navigate("Question5")} />
                    <Button title="StyleSheet.create()" onPress={() => navigate("Question5"), score = score +1} />
                </Card>
            </View>
        );
    }

}

export default Question4;
