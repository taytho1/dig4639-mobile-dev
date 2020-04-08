import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import questions from "./questions.json";

class Question extends React.Component {
  render(){
    return(
      <View style={styles.container}>
            <Text style={styles.header}>{this.props.question}</Text>
            {this.props.answers.map((value,index) =>
            <Button 
            style={styles.button}
            onPress={() => this.props.nextQuestion(value.correctAnswer)} 
            key={index} 
            title={value.text}
            />)}
            <Text style={styles.paragraph}>{this.props.finalScore}</Text>
      </View>
    );
  }
}

var score = 0;
var stopCount = false;

export default class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      currentQuestion: 0,
      finalScore: ""
    }
  }

  nextQuestion(correctAnswer){
    console.log(score);
    if(correctAnswer && stopCount !=true)
    {
      score = score +1;
    }
    if(this.state.currentQuestion == questions.length-1)
    {
      this.setState({finalScore: "You got "+score+" out of 5 correct!"})
      stopCount= true;
    }
    else
    {
      this.setState({currentQuestion: this.state.currentQuestion +1})
    }
  }

  render(){
    return (
      <View>
        <Question 
        answers={questions[this.state.currentQuestion].choices} 
        question= {questions[this.state.currentQuestion].question}
        nextQuestion = {(correctAnswer) => this.nextQuestion(correctAnswer)}
        finalScore = {this.state.finalScore}>
        </Question>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornsilk',
    width: 500,
    height: 300,
    paddingTop: 50,
    margin: "auto",
    borderColor: "teal",
    borderWidth: 3,
    borderStyle: "solid",
  },
  header: {
    fontSize: 20,
    color: "teal",
    textAlign: "center",
    paddingBottom: 20,
  },
  paragraph: {
    fontSize: 20,
    color: "teal",
    textAlign: "center",
    paddingTop: 20,
  }
});
