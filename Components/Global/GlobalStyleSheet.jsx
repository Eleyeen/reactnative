import { StyleSheet } from "react-native";
import { flex } from "react-native-wind/dist/styles/flex/flex";
import {Dimensions} from 'react-native';
import { alignItems } from "react-native-wind/dist/styles/flex/align-items";
import { alignContent } from "react-native-wind/dist/styles/flex/align-content";
const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;  
    
const GlobalStylesSheet = StyleSheet.create({
   landingBackground:{
    backgroundColor:'#f5f5f5',
    flex: 1,
   }
   ,
   
   txtPropertyType:{
    width:
    360,
    height:
    29,
    marginTop:16,
    marginLeft:
    35,
    fontSize:
    24,
    alignItems:'center'
    ,color:'background: rgba(42, 42, 42, 1)    ',
    fontWeight:
    900,

   },
    appbar:{
        height:55,
        width:430,
        padding:16,
        backgroundColor:'rgba(255, 255, 255,1)',
      
        

        

        
    },

    image:{
      width:155.03,
      height:  26.02,
        aspectRatio: 1

    },
    cardProject:{
      backgroundColor:'white',
      borderRadius:8,
      borderColor:'rgba(221, 221, 221, 1)',
      marginRight:20,
      marginLeft:20,
      height:windowHeight /5.5,
      marginTop:17,
      marginBottom:8,
      flexDirection:'row',

     },

     txtProjectCard:{
      marginLeft:24,
      marginTop:39.12,
      marginBottom:39.12,
      color:'  rgba(42, 42, 42, 1)',
      width:98,
      height:38,
      fontSize:
      16,fontWeight:
      500,
      marginRight:69.39
    

     },

     txtProjectCardroof:{
      marginLeft:24,
      marginTop:39.12,
      marginBottom:39.12,
      color:'  rgba(42, 42, 42, 1)',
      width:98,
      height:38,
      fontSize:
      16,fontWeight:
      500,
      marginRight:69.39
    

     },

     imgProjectCard:{
      width:
      104.64,
      height:
      80,
      marginRight:24,
      // marginLeft:69.39,
      marginTop:18.12,
      marginBottom:18.12,
      resizeMode:'contain'
     },

    




    title:{
        color:' rgba(42, 42, 42, 1)',
        fontSize:20,

    },
    input:{
        marginBottom:10,
        paddingVertical:9,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        color:'#fff',
        textDecorationColor:'#fff'

    },
    container:{
        flex:1,
        padding:10,
        backgroundColor: '#000',
        // alignItems:'center',
        // justifyContent:'center'
      },
     
      backgroundcolor1:{
        backgroundColor:'blue',
        
      },
      btnContainer:{
        // margin:20,
        alignItems:'center',
        marginLeft:90,
        fontSize:20,
        flexDirection:'row'
      },
      
      items:{
        marginTop:8,
        padding:10,
        backgroundColor:'red',
        fontSize:16,
        marginHorizontal:10,
        flexDirection:'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#fff',
        marginLeft:10,
        borderWidth: 1,
        // backgroundColor:'#fff',
        
        borderStyle: 'dashed',
        borderRadius: 10
      
      },
      items1:{
        padding:10,
        backgroundColor:'red',
        fontSize:16,
        flexDirection:'row',
        padding: 16,
        borderColor: '#fff',
        marginLeft:10,
        borderWidth: 1,
        // backgroundColor:'#fff',
        
        borderStyle: 'dashed',
        borderRadius: 10
      
      },
      itemsText:{
        marginLeft:10
        
      
      }

});

export  default GlobalStylesSheet;
