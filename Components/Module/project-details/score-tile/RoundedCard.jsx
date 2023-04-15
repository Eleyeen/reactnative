import React from 'react'
import { Text, View, Image, ScrollView, FlatList,TouchableOpacity } from "react-native";
import roadimage from '../../../../Assest/roadimage.png';
import fireicon from '../../../../Assest/fireicon.png';


const RoundedCard=()=>{
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
                            <View className="w-[167px] h-[159px] rounded-[10px] bg-white mt-[8px] ml-[16px] mb-[30px]">
                                <Image
                                    source={roadimage}
                                />
                                <Text className="text-[16px] font-[400] mt-[10px] pl-[8] text-black mb-[20px]">
                                    Islamabad
                                </Text>
                            </View >


                        }
                        keyExtractor={(item) => item.id}

                    />


        </View>
    )


}
export default RoundedCard;