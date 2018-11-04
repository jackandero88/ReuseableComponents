import React from "react";
import { ActivityIndicator, View, FlatList, Text} from "react-native";
import { connect } from "react-redux";

import StageListItem from "./listitems/tracker-list/StageListItem";

import theme from '../themes/global/theme.style';
import globalStyles from '../themes/global/styles/styles';

class MyTrackerTabContent extends React.Component {

    constructor(){
        super();
        console.log('MyTracker page');
    }

    componentDidMount(){
        // console.log(this.props.navigation);
    }

    componentWillReceiveProps(props){
        // console.log(props);
    }

    render(){
        return (
            <View style={globalStyles.containerLight}>
                {
                  this.props.trackers.isFetching ? 
                    null
                //   <View style={[globalStyles.container, globalStyles.loadingHorizontal]}>
                //     <ActivityIndicator size="large" color="#0000ff" />
                //   </View>
                  :
                    this.props.trackers.length > 0 ?
                        <FlatList
                            data={this.props.trackers}
                            keyExtractor={(item, index) => item.uuid+'-'+index}
                            renderItem={({item}) => <StageListItem stage={item} navigation= {this.props.navigation} />}
                        />
                        :   <Text style={globalStyles.noTrackerError}>No Trackers</Text>
                }
            </View>
        );
    }
}

// mapStateToProps = (state) => {
//     return {
//         trackers: state.dataReducer.allTrackerData
//     };
// }


export default MyTrackerTabContent;// connect(mapStateToProps)(AllTrackerView);