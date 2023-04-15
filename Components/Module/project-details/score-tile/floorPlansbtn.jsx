import React from "react";
import { View, Image, Text, ScrollView } from "react-native";


const FloorPlans=()=>{
    return( <View className="mx-[18] justify-evenly  h-[50] flex-row  mt-[20]">
    <View className="justify-center border-[#DDDDDD] border-[1px] w-[70] rounded-[100px]">
        <Text className="text-[14px]  text-center  text-[#2A2A2A]">
            All
        </Text>
    </View>

    <View className="justify-center border-[#DDDDDD] border-[1px] w-[70] rounded-[100px]">
        <Text className="text-[14px] text-center text-[#2A2A2A]">
            1 Bed
        </Text>
    </View>

    <View className="justify-center border-[#DDDDDD] border-[1px] w-[70] rounded-[100px]">
        <Text className="text-[14px] text-center text-[#2A2A2A]">
            2 Bed
        </Text>
    </View>

    <View className="justify-center border-[#DDDDDD] border-[1px] w-[70] rounded-[100px]">
        <Text className="text-[14px] text-center text-[#2A2A2A]">
            3 Bed
        </Text>
    </View>
</View>
)
}

export default FloorPlans;