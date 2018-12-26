import React, { Component } from 'react';
import { Text,Button,View,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

 
class login extends React.Component{

    handlesignup = () =>{
        this.props.navigation.navigate('Signup');
    }
    
    handlebutton = () =>{
        this.props.navigation.navigate('Intro')
    }

    
    render(){
        return(
                
                <View style={style.container}>
                
                    <Text style = {style.header}> Welcome </Text>
                    
                    <Text style = { style.label}> User Name:</Text>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='user'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    placeholder = "Enter Your User Name"
                                    spellCheck = {false}
                                    maxLength = {20}
                                    returnKeyType = { "next" }
                                    onSubmitEditing={ ()=> this.password.focus()}
                        />

                    </View>
                    
                    <Text style = { style.label }>Password:</Text>

                    <View style={style.inputcontainer}>
                        
                        <FontAwesomeIcon 
                            name='lock'
                            size={30}
                        />

                        <TextInput style={style.input}
                                    ref = {password => this.password = password}
                                    placeholder = "Enter Your Password"
                                    spellCheck = {false}
                                    maxLength = {20}
                        />

                    </View>

                    <Button
                        title='Sign In'
                        color='#077F43'
                        onPress={this.handlebutton}
                        style={style.button}
                    />

                    <TouchableOpacity onPress={this.handlesignup}
                    paddingTop='10'>
                        <Text style={style.signup}> Don't Have Account Yet! Click Here</Text>
                    </TouchableOpacity>
                    
 
                </View>
    
        );
    }
}
export default login;

const style = StyleSheet.create({
    container:{
        
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom:10,
    },
    label:{
        paddingTop:10,
        paddingBottom:10,
    },
    inputcontainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#077F43',
        paddingBottom: 4,
    },
    input: {
        padding: 10,
    },
    button: {
        alignItems:'center',
        width:'25%',
        height:'5%',
        paddingTop:10,
    },
    signup:{
        color: '#077F43',
        fontSize: 15,
        paddingTop: 15,
        fontStyle: 'italic',
    },
});
