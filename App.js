import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigation = createStackNavigator({
    Search: SearchScreen,
    Result: ResultsShowScreen
  },
  {
    defaultRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food Searcher'
    }
  }
);

export default createAppContainer(navigation);