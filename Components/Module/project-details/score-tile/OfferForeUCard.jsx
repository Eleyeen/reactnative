import React from "react";
import { View, Image, Text, ScrollView ,FlatList } from "react-native";
import limtedimage from '../../../../Assest/limtedimage.png';
import stopwatchicon from '../../../../Assest/stopwatchicon.png';

const OfferForUCard =()=>{
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
        
        <FlatList
        horizontal
        data={LandingCardData}
        renderItem={({ item }) =>
            <View className="bg-[#FFEFEA] w-[305] h-[197]  ml-[16px] rounded-[16px] ">

                <View className="ml-[20] mt-[37px] w-[270] mr-[50px] flex-row ">
                    <Image
                        source={limtedimage}
                    />
                    <View className="absolute  right-[5px] mt-[15px] flex-row pt-[3] pl-[8]  bg-[#fff] w-[100px] h-[25px] rounded-[10px]  ">
                        <Image
                            className="w-[12px] h-[15] ml-[4px] mt-[2px]"
                            source={stopwatchicon}
                        />
                        <Text className=" text-left ml-[10px] pt-[2px] w-[168px] text-[12px] text-[#000] font-bold">
                            00:42:21</Text>
                    </View>


                </View>

                <Text className=" text-left mt-[13px] ml-[20px] pt-[2px] w-[270px] text-[18px] text-[#000] font-[700]">
                    Double your deposit</Text>


                <Text className=" text-left  ml-[20px] pt-[2px] w-[234px] text-[16px] text-[#000] font-[500]">
                    +100% on real ac count with deposit from $ 50 to $ 150</Text>




            </View>
        }
        
        keyExtractor={(item) => item.id}

    />
    )
}
export default OfferForUCard;