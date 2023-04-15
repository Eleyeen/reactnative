import React from 'react'
import { View, Image, Text, FlatList, ScrollView } from "react-native";
import builtuperea from '../../../../Assest/builtupareaicon.png'
import buildprice from '../../../../Assest/buildprice.png'
import phoneicon from '../../../../Assest/phoneicon.png'
import floorplansimage from '../../../../Assest/floorplansimage.png'


const FloorPlansCard = () => {
    const floorCardData = [

        {
            id: 1,
            name: 'a',
        },

        {
            id: 2,
            name: 'b',
        },

        {
            id: 3,
            name: 'c ',
        },

        {
            id: 4,
            name: 'd',
        }
    ];

    return (
        <FlatList
            horizontal
            data={floorCardData}
            renderItem={({ item }) =>
                <View className="h-[290] w-[290] rounded-[10px] border-[#DDDDDD] border-[1px] ml-[13] mt-[10]">
                    <View className="justify-center ml-[150] w-[123] mt-[15] h-[35] rounded-[10px] border-[#DDDDDD] border-[1px]">
                        <Text className="text-[12px] font-bold text-[#732DD9] pl-[15]">
                            Inventory Details
                        </Text>
                    </View>
                    <View className='h-[146] w-[221] mx-[35] object-contain justify-center'>
                        <Image
                            source={floorplansimage}
                        />
                    </View>
                    <View className="flex-row ml-[18]">
                        <Image
                            className="h-[24] w-[24] mt-[6] "
                            source={builtuperea}
                        />
                        <View>
                            <Text className="text-[12px] ml-[11] text-[#888888] ">
                                Built-up Area
                            </Text>
                            <Text className="text-[14px] ml-[11] font-bold text-[#000000] ">
                                1200 - 2200 sq.ft
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row ml-[18] mt-[10]">
                        <Image
                            className="h-[24] w-[24] mt-[6]"
                            source={buildprice}
                        />
                        <View>
                            <Text className="text-[12px] ml-[11]  text-[#888888] ">
                                Builder Price
                            </Text>
                            <Text className="text-[14px] ml-[11] font-bold text-[#000000] ">
                                1.9 Crore
                            </Text>
                        </View>
                    </View>
                    <View className='absolute right-[20] h-[40] w-[40] bottom-[30]'>
                        <Image
                            source={phoneicon}
                        />
                    </View>
                </View>
            }
        />
    )
}

export default FloorPlansCard;
