import  { React ,useEffect ,useState} from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import AppBarSearch from '../Components/Global/AppBarSearch';
import projectCardlogo from '../Assest/projectCardlogo.png';

import cardlogoproject from '../Assest/investmentsprojectslogo.png';
import cardlogocommercial from '../Assest/commercialpropertieslogo.png';
import cardlogoproperties from '../Assest/residentialpropertieslogo.png';
import cardlogoroof from '../Assest/sharedrooflogo.png';
import fireicon from '../Assest/fireicon.png';
import homeimage from '../Assest/homeimage.png';
import roadimage from '../Assest/roadimage.png';
import projectimage from '../Assest/projectimage.png';
import limtedimage from '../Assest/limtedimage.png';
import stopwatchicon from '../Assest/stopwatchicon.png';
import fbicon from '../Assest/fbicon.png';
import linkicon from '../Assest/linkicon.png';
import twicon from '../Assest/twicon.png';
import OurProjectCard from "../Components/Module/project-details/score-tile/ourProjectsCard";
import RoundedCard from "../Components/Module/project-details/score-tile/RoundedCard";
import OfferForUCard from "../Components/Module/project-details/score-tile/OfferForeUCard";
import axios from "axios";
import { user } from "firebase-functions/v1/auth";

const ProjectScreen = ({ navigation }) => {

    const LandingCardData = [

        {
            id: 1,
            name: 'Mall 35 Saddar Rwp',
            image: cardlogoproject
        },

        {
            id: 2,
            name: 'Gerova Mall Islamabad',
            image: cardlogocommercial
        },

        {
            id: 3,
            name: 'Mall 35 Saddar Rwp ',
            image: cardlogoproperties
        },

        {
            id: 4,
            name: ' Gerova Mall Islamabad',
            image: cardlogoroof
        }
    ];

    const navigateScreen = () => {
        console.log('navigate');
        navigation.navigate('ProjectDetailScreen')
        
    }

    
    



    return (
        <View className='bg-[#fff] flex-1  '>
            <ScrollView>
                <View>
                    <AppBarSearch />
                    
                 
                    
                    
                    <View>
                        <Text className="mt-17 text-left pl-[16] text-[20px] text-[#2A2A2A] font-bold">
                            Recommended Projects </Text>

                    </View >




                    
                
                    <FlatList
                        horizontal

                        data={LandingCardData}
                        onTouchStart={navigateScreen}
                        renderItem={({ item }) =>

                            <View className="w-[168px] h-[200px] bg-white rounded-[9px] ml-[16px] my-[10px]">
                                <View>
                                    <Image
                                        className='w-[168px] h-[168px] bg-black rounded-[9px] '
                                        source={projectCardlogo}
                                    />
                                    <View className="absolute right-[5px] flex-row  bg-white w-[54px] h-[18] rounded-[10px] bottom-[40px] ">
                                        <Image
                                            className="w-[10px] h-[13] ml-[4px] mt-[2px]"
                                            source={fireicon}
                                        />
                                        <Text className=" text-left ml-[3px] pt-[2px] w-[168px] text-[12px] text-[#732DD9] font-bold">
                                            Offer</Text>
                                    </View>

                                    <Text className="mt-[10px] text-left pl-[16px] w-[168px] text-[12px] text-[#2A2A2A] font-bold">
                                        Mall 35 Saddar Rwp</Text>
                                </View>

                            </View >



                        }
                        keyExtractor={(item) => item.id}
                    />
                    <Text className="mt-[1px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Move in now, next year or later</Text>
                    <Text className="mt-[3px] text-left pl-[16] text-[12px] text-[#2A2A2A] font-[400]">
                        Projects based on your preferred possession date</Text>


                    <FlatList
                        horizontal

                        data={LandingCardData}
                        renderItem={({ item }) =>
                            <View className="w-[200px] h-[232.56px] bg-white ml-[16] mt-[20] rounded-[10] border-[#DDDDDD] border-[1px]">
                                <View className="h-[82.33px] bg-[#fff] pl-[22.79] pt-[24]">

                                    <Text className="text-left pl-[16] text-[16px] text-[#2A2A2A] font-[700]">
                                        Ready to Move</Text>
                                    <Text className="mt-[3px] text-left pl-[16] text-[12px] text-[#2A2A2A] font-[400]">
                                        1500 Properties</Text>


                                </View>

                                <Image
                                    className="object-contain w-[198px] h-[150.11px] rounded-[10px]"
                                    source={homeimage}
                                />

                            </View>




                        }
                        keyExtractor={(item) => item.id}
                    />
                    <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Our Projects</Text>

                    <OurProjectCard />

                    <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Expore by City</Text>

                    <RoundedCard />

                    <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Offer for You</Text>

                    <OfferForUCard />

                    <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Tourism In Pakistan</Text>

                    <RoundedCard />

                    <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                        Real Estate Trends In Market</Text>

                    <RoundedCard />

                </View>

                <View className="h-[66] bg-[#F5F5F5]">

                    <View className="flex-row mt-[11] justify-center ">
                        <Image

                            className="ml-[5]"
                            source={linkicon}
                        />
                        <Image
                            className="ml-[5]"
                            source={fbicon}
                        />
                        <Image
                            className="ml-[5]"
                            source={twicon}
                        />




                    </View>
                    <Text className="text-[12px] text-center mt-[4] bg-red font-[400] text-black mb-[20px] pl-[8]">
                        Terms & Condition | Legal | Privacy Policy
                    </Text>


                </View>
            </ScrollView>

        </View>

    )
}
export default ProjectScreen;