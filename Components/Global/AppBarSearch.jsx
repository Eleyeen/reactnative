import React,{useState} from 'react';
import  {StyleSheet,Text,View,Image} from 'react-native';
import GlobalStylesSheet from '../Global/GlobalStyleSheet'
import appBarLogo from '../../Assest/appbarlogo.png'

 const AppBarSearch= () =>{
    return <View className='py-[20px] pl-[14px] mb-[17px]  bg-[#fff] '>
        <Image  
             className='w-[155.03px] h-[26.2px]'
             source={appBarLogo} 
            />
        {/* <Text style={GlobalStylesSheet.title}>Test App  </Text> */}
    </View>
}
export default AppBarSearch;