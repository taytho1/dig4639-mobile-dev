import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Question1 from "./components/Question1.js";
import Question2 from "./components/Question2.js";
import Question3 from "./components/Question3.js";
import Question4 from "./components/Question4.js";
import Question5 from "./components/Question5.js";

const MainNavigator = createStackNavigator({
  Question1: {screen: Question1},
  Question2: {screen: Question2},
  Question3: {screen: Question3},
  Question4: {screen: Question4},
  Question5: {screen: Question5},
  Score: {screen: Score}
});

const App = createAppContainer(MainNavigator);

let score = 0;

export default App;