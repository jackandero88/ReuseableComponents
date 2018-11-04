import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View                // Container component
} from 'react-native';
import theme from '../../themes/global/theme.style';
// import globalStyles from '../../../src/global/styles/styles';

import * as trackerActions from '../../store/actions/trackers';
import { connect, bindActionCreators } from "react-redux";

class Tabs extends Component {

      // Initialize State
    state = {
      // First tab is active by default
      activeTab: 0
    }

    toggleTab(index){
      this.setState({ activeTab: index })
      this.props.changeTab(index);
    }

    // Pull children out of props passed from App component
    render({ children } = this.props) {
      return (
        <View style={styles.container}>
          {/* Tabs row */}
          <View style={styles.tabsContainer}>
            {/* Pull props out of children, and pull title out of props */}
            {children.map(({ props: { title } }, index) =>
              <TouchableOpacity
                style={[
                  // Default style for every tab
                  styles.tabContainer,
                  // Merge default style with styles.tabContainerActive for active tab
                  index === this.state.activeTab ? styles.tabContainerActive : []
                ]}
                // Change active tab
                onPress={() => ( index == 0 || (index == 1 && this.props.isSelected) ?  this.toggleTab(index) : null) }
                // Required key prop for components generated returned by map iterator
                key={index}
              >
                <Text style={[
                  index === this.state.activeTab ? styles.activeTabText : styles.tabText,
                  ( index == 1 && !this.props.isSelected ? styles.deactiveTabText : []),
                  ]}>
                  {title}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* Content */}
          <View style={styles.contentContainer}>
            {children[this.state.activeTab]}
          </View>
        </View>
      );
    }

}


mapStateToProps = (state) => {
  return state;
}
  
mapDispatchToProps = (dispatch) => {
  return {...trackerActions};
  // return bindActionCreators({ changeTab }, dispatch);
  // return{
  //   changeTab: (index) => dispatch( { type: actions.ACTIVE_TRACKERS_TAB, payload: index} )
  // }
}

export default connect(null, mapDispatchToProps)(Tabs);

  const styles = StyleSheet.create({
    // Component container
    container: {
      flex: 1,                            // Take up all available space
    },
    // Tabs row container
    tabsContainer: {
      flexDirection: 'row',               // Arrange tabs in a 
    },
    // Individual tab container
    tabContainer: {
      flex: 1,                            // Take up equal amount of space for each tab
      paddingVertical: 8,                // Vertical padding
      borderBottomWidth: 0,               // Add thick border at the bottom
      borderBottomColor: 'transparent',   // Transparent border for inactive tabs
      backgroundColor: theme.TAB_SELECTED_COLOR,
    },
    // Active tab container
    tabContainerActive: {
      backgroundColor: theme.WHITE_COLOR,
    },
    // Tab text
    tabText: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_LARGE,
      color: theme.WHITE_COLOR,
    },
    // Tab text
    activeTabText: {
      color: theme.DARK_GREY_COLOR,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_LARGE,
    },
    activeTabText: {
      color: theme.DARK_GREY_COLOR,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_LARGE,
    },
    deactiveTabText: {
      color: theme.PRIMARY_COLOR,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_LARGE,
    },
    // Content container
    contentContainer: {
      flex: 1                             // Take up all available space
    }
  });