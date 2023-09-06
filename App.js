import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import { LocationContextProvider } from "./src/LocationContext";

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

const App = createAppContainer(navigation);
export default () => {
  return  <LocationContextProvider><App/></LocationContextProvider>
}