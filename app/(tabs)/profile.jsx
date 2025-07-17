/*
const { recognizePrefixSuffix } = require("react-native-reanimated/lib/typescript/animation/util");


import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

 
import { Camera,UserCog } from 'lucide-react-native';




const Profile = () =>{
    return (
        <View style={styles.header}>
        
            <Text> PROFIL</Text>
            <Camera color="red" size={48} />
            <UserCog color="red" size={48} />
            <View style={styles.storyAvatar}></View>
        </View>
    )
} 

const styles = StyleSheet.create(
    {
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        color :'#ffffff',
        backgroundColor :'#ffffff',
        flex : 1, 
    },
    storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#6DB1FF',
  },
    }
)

export default Profile
*/


import React from 'react'; 
import { 
    View,
    Text,
    Image, 
    TouchableOpacity, 
    StyleSheet, 
    ScrollView,
} from 'react-native';

import { Ionicons, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {   
    return (     
      <View style={styles.container}>
      <View style={styles.header}>         
        <Text style={styles.profileTitle}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>      
           <Image source={require('C:/Users/HP/teste/itrasy-mobile/assets/images/favicon.png')} style={styles.avatar} />
        <Text style={styles.name}>RAKOTOBE RABE</Text>
        <Text style={styles.username}>@rakotoberabe</Text>
        <TouchableOpacity style={styles.editButton}>          
             <Text style={styles.editButtonText}>Edit Profile</Text>     
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menu}>
        {[
          { icon: 'settings', label: 'Settings' },
          { icon: 'clipboard', label: 'My Orders' },
          { icon: 'map-pin', label: 'Address' },
          { icon: 'lock', label: 'Change Password' },    
          { icon: 'help-circle', label: 'Help & Support' },
          { icon: 'log-out', label: 'Log out' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Feather name={item.icon} size={20} color="#242A2A" />
            <Text style={styles.menuText}>{item.label}</Text> 
            <Ionicons name="chevron-forward" size={20} color="#ccc" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" size={24} color="#6DBF1F" />
        <Ionicons name="heart-outline" size={24} color="#242A2A" />
        <Ionicons name="cart-outline" size={24} color="#242A2A" />
        <Ionicons name="person" size={24} color="#6DBF1F" />
      </View>
    </View>
  ); }
const styles = StyleSheet.create({  
     container: { 
        flex: 1, 
        backgroundColor: '#EAF1FF', 
    },  

     header: { 
        marginTop: 50,
        alignItems: 'center' ,
    },   
     profileTitle: {
         fontSize: 20,
         fontWeight: 'bold', 
         color: '#242A2A',
         },   

     profileInfo: {
        alignItems: 'center',
        marginTop: 20 ,
    },

     avatar: { 
        width: 80, 
        height: 80, 
        borderRadius: 40 ,
        borderColor : ' #6DB1FF',
    },   

     name: { 
        marginTop: 10, 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#6DB1FF' ,
    },   

     username: { 
        color: '#777', 
    },   
     editButton: {     
        backgroundColor: '#6DB1FF', 
        borderColor :  ' #242A2A',    
        paddingHorizontal: 20,     
        paddingVertical: 6,     
        borderRadius: 20,     
        marginTop: 10,   
    },   

     editButtonText: { 
        color: 'white', 
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
     },  

     menu: { 
        marginTop: 20, 
        paddingHorizontal: 20 ,
    },   
     menuItem: {     
        flexDirection: 'row',     
        alignItems: 'center',     
        paddingVertical: 15,     
        borderBottomColor: '#ccc',     
        borderBottomWidth: 0.5,   
    },   

     menuText: { 
        fontSize: 16, 
        marginLeft: 15, 
        color: '#242A2A' ,
    },   

     bottomBar: {     
        flexDirection: 'row',     
        justifyContent: 'space-around',     
        paddingVertical: 12,     
        backgroundColor: 'white',     
        borderTopLeftRadius: 20,     
        borderTopRightRadius: 20,     
        elevation: 5,   
    },

})
