import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";
import score from "../App.js";

class Question3 extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Question">
                    <Text>What can us use to load external data?</Text>
                    <Button title="npm install" onPress={() => navigate("Question4")} />
                    <Button title="window.fetch()" onPress={() => navigate("Question4"), score = score +1} />
                </Card>
            </View>
        );
    }

}

export default Question3;
