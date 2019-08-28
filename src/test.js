import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';




export class Test extends Component {
    

    render() {
        console.log("inside of the test ",this.props.userdata);

        return (
            <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red', fontFamily: 'bold' }}>{this.props.userdata.name }</Text>
                <Text style={{ fontSize: 50, color: 'red', fontFamily: 'bold' }}>{this.props.age}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '30%',
    },
    InputStyling: {
        alignItems: "center",


    },
    Input: {
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 4,
        width: '70%',
        marginBottom: 10,
        textAlign: "center"
    }
})
const mapStateToProps = (state) => {
    return {
    
      userdata:state.ReducerName.user,
      age:state.ReducerName.age,
      
    }

  }




export default connect(mapStateToProps)(Test)