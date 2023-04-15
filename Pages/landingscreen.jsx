import  React,{useState,useEffect} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import AppBar from '../Components/Global/AppBar';
import cardlogoproject from '../Assest/investmentsprojectslogo.png'
import cardlogocommercial from '../Assest/commercialpropertieslogo.png'
import cardlogoproperties from '../Assest/residentialpropertieslogo.png'
import cardlogoroof from '../Assest/sharedrooflogo.png'
import axios from 'axios';

const LandingScreen = ({ navigation }) => {

    const LandingCardData = [

        {
            id: 1,
            name: 'Investments Projects',
            image: cardlogoproject
        },

        {
            id: 2,
            name: 'Commercial Properties',
            image: cardlogocommercial
        },

        {
            id: 3,
            name: 'Residential Properties ',
            image: cardlogoproperties
        },

        {
            id: 4,
            name: ' Shared  Roof',
            image: cardlogoroof
        }
    ];

    const navigateScreen = () => {
        console.log('navigate');
        navigation.navigate('ProjectScreen')
    }
   


    return (

        <View className='bg-[#f5f5f5] border-[1px]'>
            <AppBar />
            {/* <View className='h-[180px]'>
            {
            data21 ? 
            
                
            data21.items.map((item)=> 

                <View >
                    <Text className='text-[#000]'>
                       id is : {item.name}
                    </Text>
                </View>


            )
            :null}

            </View> */}
            <View>
                <Text className="mt-17 text-center text-[20px] text-[#2A2A2A] font-bold"> Your Property Type</Text>
            </View >
            <View >
                {
                    LandingCardData.map((item) => {
                        return (
                            <TouchableOpacity
                                className="bg-white rounded-[8px] border-[#DDDDDD] mx-[20] mt-[17] mb[8] flex-row h-1/5"
                                onPress={navigateScreen}>

                                <View className="bg-white rounded-[8px] border-[#DDDDDD] mx-[20] mt-[17] mb[8] flex-row h-1/5">
                                    <Text className='ml-[24] my-[30.12] text-[#2A2A2A] w-[96] h-[111] text-[16px] font-medium mr-[69.39]'>
                                        {item.name}
                                    </Text>

                                    <Image
                                        className='w-[104.64] h-[80] mr-[24] my-[25.12] object-contain  '
                                        source={item.image}
                                    />



                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </View>



        </View>

    );
}

export default LandingScreen;
