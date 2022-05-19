import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, ScrollView, } from 'react-native';
import {  MaterialIcons,EvilIcons,Foundation, AntDesign, Ionicons,Entypo,FontAwesome5,FontAwesome, } from '@expo/vector-icons';
  import React from "react";
import { FlatList } from 'react-native';
 import bur2 from '../assets/bur2.jpg';
  import bur4 from '../assets/bur4.jpg';


const CardView =(props)=>{
    return(
      <ImageBackground source={bur2} style={styles.container}>  
        <ScrollView>
    
        
          <View style={styles.smal}>
          <ImageBackground source={bur4} style={styles.container2}>  
             <View style={styles.img}>
             <Image style= {styles.image} source={require("../assets/bur.jpg")}>
             </Image>
             </View>
            </ImageBackground>
            <View style={{backgroundColor:"white", flex: 0.5,  width:380, height: 300,}}>
               <Text style ={{paddingLeft: 160, }}>
               <Ionicons name="checkmark-circle-sharp" size={75} color="black" />
               </Text>
               <Text  style ={{paddingLeft: 125, fontSize: 30, }}>Akua Lovina</Text>
               <Text  style ={{paddingLeft: 30, fontSize: 20,}}>some quick example text to build on the</Text>
               <Text  style ={{paddingLeft: 30, fontSize: 20,}}>card  title and make up the bulk of the</Text>
               <Text style ={{paddingLeft: 140,fontSize: 20, }}>card's content.</Text>
           

          <View style={{flexDirection:"row", justifyContent:"space-around",  top: 40,}}>
             <Text>
             <Entypo name="facebook-with-circle" size={30} color="black" />
             </Text>
             <Text>
             <Entypo name="twitter-with-circle" size={30} color="black" />
             </Text>
             <Text>
             <FontAwesome name="google-plus-circle" size={30} color="black" />
             </Text>
             <Text>
             <Entypo name="instagram-with-circle" size={30} color="black" />
             </Text>
             <Text>
             <FontAwesome5 name="whatsapp-square" size={30} color="black" />
             </Text>
          </View>
          </View>



          </View>
          



            </ScrollView>
            </ImageBackground>

            );
        }
        
        export default CardView;
        
        const styles = StyleSheet.create({
            container: {
              flex: 10,
              // 
              height: null,
              width: null,
              
            },

smal:{
   justifyContent: "center",
   alignItems: "center",
   paddingRight: 10,
   paddingLeft: 10,
   top: 20,
},

container2: {
   
   // 
   height: 300,
   width: 380,
   // paddingRight: 10,
   // paddingLeft: 10,
   top: 6,
},


image: {
   height: 200,
   width: 200,
     top: 20,
    borderRadius: 50, 
     

},

img: {
marginLeft: 20,
marginTop: 40,
borderRadius: 30, 
justifyContent: "center",
alignItems: "center",

},


lov:{
   height: 30,
    width: 30,
     borderRadius: 15 
},


         })





