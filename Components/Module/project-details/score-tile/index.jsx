import React, { Text, View, Image } from "react-native";
import downimage from '../../../../Assest/downimage.png';
import ProgressBar from "./progress-bar";


const ScoreBord = () => {
    const scoredata = [{
        title: 'Land Acquisition',
        outof: '5'
    },
    {
        title: 'Local Body NOC ',
        outof: '9'
    }, 
    {
        title: 'Civil Aviation NOC ',
        outof: '8'
    }, 
    {
        title: 'Project Timeline ',
        outof: '2'
    }, 
    {
        title: 'Project Feasibility ',
        outof: '3'
    }, 
    {
        title: 'Project Target Market ',
        outof: '10'
    }




    ]
    return (
        <View >
            <Text className="text-[16] font-bold-[700] text-[#2A2A2A] ml-[16]">
                Project Score
            </Text>

            <Image
                className='absolute h-[29] w-[114] right-[12] mr-[12]'
                source={downimage}
            />

{
                    scoredata.map((item) => {
                        return (
                            <ProgressBar data={item} />
                        )
                    })
                }

          
            

        </View>

    )
}

export default ScoreBord;
