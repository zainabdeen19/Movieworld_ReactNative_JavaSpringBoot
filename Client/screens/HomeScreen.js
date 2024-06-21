import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon , UserCircleIcon } from "react-native-heroicons/outline"
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { generalStyles} from '../style/style.js';
import { getMovies } from '../api/api.js';
import { useNavigation } from '@react-navigation/native';
import LandscapeCarousel from '../components/LandscapeCarousel.js';
import { fetchUpcomingMovies } from '../api/api.js';
import { fetchPopularMovies } from '../api/api.js';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

var {width , height} = Dimensions.get('window');



export default function HomeScreen() {
  const navigation = useNavigation();
  const [general, setGeneral] = useState({});
  const [upcoming, setUpcoming] = useState({});
  const [popular, setPopular] = useState({});

  useEffect(() => {
    getGeneral();
    getUpcoming();
    getPopular();
    
  }

  , [])

  getGeneral = async () => {
    //const response = await getMovies();
    setGeneral({
      "adult": false,
      "backdrop_path": "/yhEu41kat5sZ5QhCdZnh3Vypu5V.jpg",
      "belongs_to_collection": null,
      "budget": 800000,
      "genres": [
          {
              "id": 27,
              "name": "Horror"
          },
          {
              "id": 53,
              "name": "Thriller"
          },
          {
              "id": 35,
              "name": "Comedy"
          }
      ],
      "homepage": "",
      "id": 1225377,
      "imdb_id": "tt30743549",
      "origin_country": [
          "CA"
      ],
      "original_language": "en",
      "original_title": "The Mouse Trap",
      "overview": "It's Alex's 21st Birthday, but she's stuck at the amusement arcade on a late shift so her friends decide to surprise her, but a masked killer dressed as Mickey Mouse decides to play a game of his own with them which she must survive.",
      "popularity": 940.199,
      "poster_path": "/3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg",
      "production_companies": [
          {
              "id": 217337,
              "logo_path": null,
              "name": "Into Frame Productions",
              "origin_country": ""
          },
          {
              "id": 217394,
              "logo_path": null,
              "name": "Bailey Phillips Productions",
              "origin_country": ""
          },
          {
              "id": 44632,
              "logo_path": "/neCKH4sJCBhZ1B4QocTM4VXCQOR.png",
              "name": "Gravitas Ventures",
              "origin_country": "US"
          }
      ],
      "production_countries": [
          {
              "iso_3166_1": "CA",
              "name": "Canada"
          }
      ],
      "release_date": "2024-08-23",
      "revenue": 0,
      "runtime": 80,
      "spoken_languages": [
          {
              "english_name": "English",
              "iso_639_1": "en",
              "name": "English"
          }
      ],
      "status": "Released",
      "tagline": "This is not the funhouse.",
      "title": "The Mouse Trap",
      "video": false,
      "vote_average": 2.625,
      "vote_count": 4
  });
    //console.log(response,"response general");
  }

  getUpcoming = async () => {
    const response = await fetchUpcomingMovies();
    if(response && response.results){
      setUpcoming(response);
    }
    
    console.log(response,"upcoming");
  }

  getPopular = async () => {
    const response = await fetchPopularMovies();
    
    setPopular(response);
    console.log(response,"popular");
  }







  return (
    <View className = "flex-1 bg-neutral-900  ">

        <SafeAreaView className = " z-10">
         <StatusBar style="light" />
        <View className = "flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size= "30" strokeWidth = {2} color = "#96a723" />
            <Text className = "text-white text-3xl font-bold ">movie <Text style={generalStyles.text} >world </Text></Text>
            <TouchableOpacity >
                <UserCircleIcon size= "33" strokeWidth = {2} color={"#96a723"}  />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        <ScrollView className = "flex-1">
            
            <LandscapeCarousel data={{general}} title={"On Cinemas"} />
      <Text className = "text-white text-3xl font-bold mx-4 pb-4">Upcoming</Text>
            <View className = "flex-row  items-center mx-4">
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                
                {upcoming && upcoming.results && upcoming.results.map((item,index) => {
                  console.log(item,"upcoming-item")
                  return (
                    <View key={item.id} className = "flex-row " style={{width : width * 0.5 , borderRadius : 100  }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", {item})} style ={{borderRadius : 100}}>
                    <View>
                    <Image
                    source={{uri : "https://image.tmdb.org/t/p/w1280" + item.poster_path}}
                    style={{width: width * 0.40 , height: height * 0.25 }}
                    className = "rounded-3xl"
                    />
                    <View className = "flex-row items-center justify-start" style={{width : width * 0.8}}>
                    <Text className = "text-white text-xl font-bold mx-2 mt-2">{item.title}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                    </View>
                  )
                }
                )}
              
                

        </ScrollView>
        </View>
        
        <Text className = "text-white text-3xl font-bold mx-4 pb-4">Pre-Booking</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle= {{padding : 20}} >
        {popular && popular.results && popular.results.map((item) => {
          console.log(item,"popular-item")
                  return (
                   <View key={item.id} className = "flex-row " style={{width : 0.5 * width ,  borderRadius : 100  }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", {item})} style ={{borderRadius : 100}}>
                    <View>
                    <Image
                    source={{uri : "https://image.tmdb.org/t/p/w1280" + item.poster_path}}
                    style={{width: width * 0.40 , height: height * 0.25 }}
                    className = "rounded-3xl"
                    />
                    <View className = "flex-row items-center justify-start" style={{width : width * 0.8}}>
                    <Text className = "text-white text-xl font-bold mx-2 mt-2">{item.title}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                    </View>
                    
                  )
                }
                )}
        </ScrollView>
        

        </ScrollView>
    </View>
  )
}

 
 
