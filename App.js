import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import { LocationContextProvider } from "./src/LocationContext";
import MapScreen from "./src/screens/MapScreen";

const navigation = createStackNavigator({
    Search: SearchScreen,
    Result: ResultsShowScreen,
    Map: MapScreen,
  },
  {
    defaultRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Hungry Seal'
    }
  }
);

const App = createAppContainer(navigation);
export default () => {
  return  <LocationContextProvider><App/></LocationContextProvider>
}