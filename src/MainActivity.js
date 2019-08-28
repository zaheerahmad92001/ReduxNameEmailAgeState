import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { User_info } from '../src/Actions/user';
import { UserAge } from '../src/Actions/user';

export class MainActivity extends Component {

    constructor(props) {
        super(props)

        this.state = {
            abc: '',
            email: '',
            age: '',
        };
        //console.log("thisss",this.props.userdata);
    }

    SubmintHandler = () => {

        if (this.state.abc.trim === '' || this.state.email.trim === '') {
            return;
        }

        data = {
            name: this.state.abc,
            email: this.state.email
        }

        this.props.UserInfo(data)
        this.props.UserAge(this.state.age)

         console.log("userInfo", data)
        this.props.navigation.navigate('test')
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InputStyling}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(abc) => this.setState({ abc })}
                         value={this.state.abc}
                         placeholder="Name"
                    />
                    <TextInput
                        style={styles.Input}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="Email"
                    />


                    <TextInput
                        style={styles.Input}
                        onChangeText={(age) => this.setState({ age })}
                        value={this.state.age}
                        placeholder="Age"
                    />
                </View>
                <View style={{ width: '80%', backgroundColor: 'black', alignSelf: "center" }}>
                    <TouchableOpacity
                        style={{ height: 50, width: '70%', backgroundColor: 'red', justifyContent: "center", alignSelf: "center" }}
                        onPress={this.SubmintHandler.bind(this)}>
                        <Text style={{ textAlign: "center" }}>Click Me</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 50, color: 'red', fontFamily: 'bold' }}>{this.props.userdata}</Text>
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

        userdata: state.ReducerName.user.email,
        age: state.ReducerName.age,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserInfo: (data) => {
            dispatch(User_info(data))

        },
        UserAge:(age) => {
            dispatch(UserAge(age))
        }
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainActivity)