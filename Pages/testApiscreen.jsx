import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from "axios";


const TestApiScreen = ({ navigation }) => {

    const [data21, setData] = useState({ total: 0, items: [] });
    const [city, setCity] = useState(undefined);

    const getApiData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        console.log(result);
        setData(result)

    }
    const getApiDataAxios = async(data) => {
        /////-------------------------------------   gett Data to Api ----------------------------
        axios.get('https://dev.realtorspk.com/api/city').then((res) => {
            console.log(res.data);
            setData(res.data)

        }

        ).catch(err => {
            console.log(err);

        });


        ////------------------------------------------    Post data--------------------------------------
        // const rese = await axios({
        //     method :'Post',
        //     url:'https://dev.realtorspk.com/api/lead',
        //     data : {
        //         "adjustmentCategoryId": null,
        //         "projectId": 174,
        //         "customerId": null,
        //         "inventoryId": null,
        //         "description": "string",
        //         "mobileNo": "3109724117",
        //         "countryCode": "pk",
        //         "dialCode": "+92",
        //         "firstname": "eleyeen",
        //         "lastname": "awan",
        //         "email": "e@gmail.com",
        //         "type": "default"
        //       }
        // }).then(res=>{
        //     console.log(res.data);
        // });

        // const rese = await axios({
        //     method :'Post',
        //     url:'https://jsonplaceholder.typicode.com/posts',
        //     data : {
        //         title: 'Eleyeen',
        //         docs: 'Eleyeen',
        //         id: 103,
        //       }
        // }).then(res=>{
        //     console.log(res.data);
        // });


        ///--------------------------------------- PUT--------------------------------------
        // const rese = await axios({
        //     method :'put',
        //     url:'https://jsonplaceholder.typicode.com/posts/'+100,
        //     data : {
        //         title: 'Eleeeeeeeeyyyyyyyyyyyyeen',
        //         docs: 'Eleyeen',
        //         id: 19,
        //       }
        // }).then(res=>{
        //     console.log(res.data);
        // });

        ///------------------------------ patch------------------------------------

        // const rese = await axios({
        //     method :'patch',
        //     url:'https://jsonplaceholder.typicode.com/posts/'+101,
        //     data : {
        //         title: 'Ahmedd',
                
        //       }
        // }).then(res=>{
        //     console.log(res.data);
        // });

        //------------------------------------------------------- deleteee----------------

        // const rese = await axios({
        //     method :'delete',
        //     url:'https://jsonplaceholder.typicode.com/posts/'+101,
            
        // }).then(res=>{
        //     console.log(res.status);
        // });

return rese;


         
    }
   

    useEffect
    (() => {
        getApiDataAxios();
    }, []);

    const onclick = (item) => {
        console.log(item);
        // setCity(item);
    }

    return (
        <View className='bg-[#f7f5f5] flex-1 pb-[20px]'>
            <ScrollView>
                <View >

                    <View>
                        <Text className='text-[#000] font-bold text-center my-[20px] text-[20px]'>
                            City Name
                        </Text>
                    </View>

                    <Text className='text-[#000] mx-[25px] my-[20px] text-[20px]'>
                        slected city {city}
                    </Text>
                    <View className='mx-[20px]'>

                        {
                            data21 ?
                                data21.items.map((item) =>
                                    <TouchableOpacity
                                        className={`${city  === item.name ? 'bg-[#777]' : 'bg-white'} rounded-[8px] border-[#DDDDDD] mx-[20] mt-[17] mb[8] `}
                                        onPress={() => setCity(item.name)}
                                    >

                                        <View className='bg-[#fff] mx-[10] my-[10] h-[40px] px-[5] py-[5]'>
                                            <Text className='text-[#000]'>
                                                City Name : {item.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                                : null}
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}
export default TestApiScreen;