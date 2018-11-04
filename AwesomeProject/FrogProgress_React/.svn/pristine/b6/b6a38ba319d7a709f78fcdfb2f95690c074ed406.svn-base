import { Routes } from "../constants";
import { StackNavigator } from "react-navigation";

import Login from '../containers/Login';
import Home from '../containers/Home';
import Trackers from '../containers/Trackers';
import Objectives from '../containers/Objectives';
import SetJudgement from '../components/custom-components/SetJudgement'

const RootStack = StackNavigator({
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Trackers: {
      screen: Trackers
    },
    Objectives: {
      screen: Objectives
    },
    SetJudgement: {
      screen: SetJudgement
    }
  },{
    initialRouteName: 'Login',
    headerMode: 'none',
    // cardStyle: { shadowColor: 'transparent' }
  });

  const prevGetStateForActionHomeStack = RootStack.router.getStateForAction;
  RootStack.router.getStateForAction = (action, state) => {
      if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
          ...state,
          routes,
          index: routes.length - 1,
        };
      }
      return prevGetStateForActionHomeStack(action, state);
    };
export default RootStack;