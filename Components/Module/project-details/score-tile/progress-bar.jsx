import React from "react";
import { Text, View } from "react-native";

const ProgressBar =(props)=>{
    console.log(props.data.title)
    return(
        <View>
            <View className="flex-row ">
            <Text className="text-[16] font-bold-[700] text-[#2A2A2A] ml-[16] mt-[22]">
                {props.data.title} (Rate out of {props.data.outof})
                
            </Text>

            <Text className="text-[16] font-bold-[700] text-[#2A2A2A] absolute mt-[22] right-[22]">
            {props.data.outof}/5
                {props.outof}
            </Text>
        </View>
        
        <View className="h-[8] flex-row mx-[14] my-[10] bg-[#000] rounded-[10px]">
            <View className="bg-[#14c8ff] w-[200] rounded-[10px]"></View>
        </View>
        </View>

    )
}
export default ProgressBar;