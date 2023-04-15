import React from "react";
import { View, Image, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import AppBarDetail from '../Components/Global/appBarDetail';
import detailimage from '../Assest/pdetailimage.png';
import camicon from '../Assest/camicon.png';
import Score from '../Components/Module/project-details/score-tile/index'
import FloorPlans from '../Components/Module/project-details/score-tile/floorPlansbtn'
import FloorPlansCard from '../Components/Module/project-details/score-tile/FloorPlansCard'
import OfferForUCard from "../Components/Module/project-details/score-tile/OfferForeUCard";
import RoundedCard from "../Components/Module/project-details/score-tile/RoundedCard";
const ProjectDetailScren = ({navigation}) => {


    const LandingCardData = [

        {
            id: 1,
            name: 'Ground Floor',
        },

        {
            id: 2,
            name: '1 Floor',
        },

        {
            id: 3,
            name: '2 Floor',
        },

        {
            id: 4,
            name: '3 Floor',
        }, {
            id: 5,
            name: '4 Floor',
        },
        {
            id: 6,
            name: '5 Floor',
        }, {
            id: 7,
            name: '6 Floor',
        }, {
            id: 8,
            name: '7 Floor',
        },
    ];
    const navigateScreen = () => {
        console.log('navigate');
        // navigation.navigate('TestApiScreen')
        navigation.navigate('TestApiScreen')
    }
    return (
        <View className="flex-[1] bg-[#fff]">
            <ScrollView>
                <AppBarDetail />

                <View>
                    <Image
                        className='h-[225] object-contain w-full'
                        source={detailimage}
                    />
                    <Image
                        className='absolute h-[36] w-[36] right-[15]  bottom-[15]'
                        source={camicon}
                    />
                </View>

                <Text className="h-[38] text-[24px] font-bold-[700] text-[#2A2A2A] ml-[14] mt-[13]">
                    091 Mall

                </Text>

                <Text className="h-[38] text-[14px] font-bold-[400] text-[#9A9A9A] ml-[14] mt-[13]">
                    Main University Rd, Peshawar, KPK
                </Text>
                <Score />

                <View className="rounded-[10px] mx-[18] justify-evenly  h-[50] flex-row border-[#DDDDDD] border-[1px] mt-[20]">
                    <TouchableOpacity className="bg-white rounded-[8px] border-[#DDDDDD]  flex-row "
                        onPress={navigateScreen}>
                        <View className="justify-center">

                            <Text className="font-bold text-[18px] text-[#732DD9]  ">
                                Residential
                            </Text>

                        </View>
                    </TouchableOpacity >
                    <View className="bg-[#DDDDDD] h-[50] w-[1px]">

                    </View>
                    <View className="justify-center">
                        <Text className="text-[18px] font-bold text-[#2A2A2A]">
                            Commercial
                        </Text>
                    </View>
                </View>

                <Text className="h-[24] text-[16px] ml-[18] mt-[18] font-bold text-[#000]">
                    Floor Plans for North Hills
                </Text>
                <FloorPlans />
                <FloorPlansCard />

                <View>
                    <Text className=" text-[#2A2A2A] text-[14px] mx-[13] mt-[32]">
                        Accessible, entertaining, and revolutionary, it is set to amaze the people, and the best real estate project in Peshawar.
                    </Text>
                    <Text className=" text-[#732DD9] text-[14px] mx-[13] mt-[10] font-bold ">
                        Show more
                    </Text>
                </View>
                <Text className="mt-[14px] text-left pl-[13] text-[20px] text-[#2A2A2A] font-[700]">
                    Offer for You</Text>
                <OfferForUCard />

                <View className="rounded-[10px] mx-[18] mb-[20] justify-evenly  h-[50] flex-row border-[#DDDDDD] border-[1px] mt-[20]">
                    <View className="justify-center">

                        <Text className="font-bold text-[18px] text-[#732DD9]  ">Floor Plans
                        </Text>

                    </View>
                    <View className="bg-[#DDDDDD] h-[50] w-[1px]">

                    </View>
                    <View className="justify-center">
                        <Text className="text-[18px] font-bold text-[#2A2A2A]"> Pricing
                        </Text>
                    </View>

                </View>

                <FlatList
                    data={LandingCardData}
                    renderItem={({ item }) =>

                        <View className="ml-[16]  w-[100]">
                            <Image
                                className="bg-[#000] h-[90px] w-[100]"
                                source={detailimage}
                            />
                            <Text className="text-[14px] w-[93] h-[30]  mt-[8] text-[#000]">
                                {item.name}

                            </Text>
                        </View>


                    }
                    numColumns={3}
                    keyExtractor={(item) => item.id}

                />

                <Text className="mt-[14px] text-left pl-[16] text-[20px] text-[#2A2A2A] font-[700]">
                    Trending Projects</Text>

                <RoundedCard />
                <View className="h-[390]"></View>

            </ScrollView>

        </View>
    )
}

export default ProjectDetailScren;