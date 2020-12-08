import React,{Component} from 'react';
import {View,Text,TouchapleOpacity} from 'react-native'
import {DrawerItems } from 'react-native-drawer';
import firebase from 'firebase'
import db from '../config'

export default class CustomSideBarMenu extends Component{
    render(){
        return(
           <View style={styles.container}>
              <View style={styles.drawerItemContainer}>
                <DrawerItems 
                {...this.props}                             
                />

              </View>
              <View style={styles.logOutContainer}>
                 <TouchapleOpacity style={styles.logOutButton} onPress={()=>{
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut();  
                 }}>
                     <Text>Log Out</Text>
                </TouchapleOpacity> 
              </View>
            </View>    
        )
    }
}