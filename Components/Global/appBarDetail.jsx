import React,{useState} from 'react';
import  {StyleSheet,Text,View,Image} from 'react-native';
import GlobalStylesSheet from '../Global/GlobalStyleSheet'
import appBarLogo from '../../Assest/rlogo.png'
import backarrow from '../../Assest/backarrow.png'
import menuicon from '../../Assest/menuicon.png'

 const AppBarDetail= () =>{
    return <View className='py-[20px] pl-[14px]  bg-[#fff] flex-row justify-between'>
        <Image  
             className='w-[22.03px] h-[26.2px] ml-[16]'
             source={backarrow} 
            />
        <Image  
             className='w-[22.03px] h-[26.2px]'
             source={appBarLogo} 
            />


        <Image  
             className='w-[22.03px] h-[26.2px] mr-[10]'
             source={menuicon} 
            />
        {/* <Text style={GlobalStylesSheet.title}>Test App  </Text> */}
    </View>
}
export default AppBarDetail;