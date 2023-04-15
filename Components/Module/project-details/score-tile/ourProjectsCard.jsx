import React from 'react'
import { Text, View, Image, ScrollView, FlatList,TouchableOpacity } from "react-native";
import projectimage from '../../../../Assest/projectimage.png';
import fireicon from '../../../../Assest/fireicon.png';


const OurProjectCard=()=>{
    const LandingCardData = [

        {
            id: 1,
            name: 'Mall 35 Saddar Rwp',
        },

        {
            id: 2,
            name: 'Gerova Mall Islamabad',
        },

        {
            id: 3,
            name: 'Mall 35 Saddar Rwp ',
        },

        {
            id: 4,
            name: ' Gerova Mall Islamabad',
        }
    ];
    return(
        <View>
            

                    <FlatList
                        horizontal
                        data={LandingCardData}
                        renderItem={({ item }) =>
                            <View className="w-[168px] h-[200px] bg-white rounded-[9px] ml-[16px] my-[10px]">
                                <Image
                                    className='w-[168px] h-[168px] bg-black rounded-[9px] '
                                    source={projectimage}
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
                            </View >
                        }
                        keyExtractor={(item) => item.id}
                    />
        </View>
    )


}
export default OurProjectCard;