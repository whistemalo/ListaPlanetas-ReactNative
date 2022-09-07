import { View, Text, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

// images
import asteroid from "../assets/asteroid.png"
import planets from "../assets/planet.png"
import star from "../assets/star.png"
import lune from "../assets/luna.png"


const Options = ({setType}) => {
  return (
    <View className="flex-row items-center justify-center space-x-4 mt-10 ">

        {/* planetas */}
        <LinearGradient
            colors={['#5935FF','#47408E' ]}
            className="h-20 w-20 rounded-lg items-center justify-center"
            >
            <TouchableOpacity className="items-center" onPress={()=> setType("Planet")}>
                <Image className="h-8 w-8" tintColor='#ffff' source={planets}/>
                <Text className="text-white">Planets</Text>
            </TouchableOpacity>
            
        </LinearGradient>

        {/* asteroids */}
        <LinearGradient
            colors={['#FF6CD9','#FF2184' ]}
            className="h-20 w-20 rounded-lg items-center  justify-center"
            >
            <TouchableOpacity className="items-center " onPress={()=> setType("Asteroid")}>
                <Image className="h-8 w-8" tintColor='#ffff' source={asteroid}/>
                <Text className="text-white">Asteroids</Text>
            </TouchableOpacity>
        </LinearGradient>

        {/* strellas */}
        <LinearGradient
            colors={['#01D4E4','#47408E' ]}
            className="h-20 w-20 rounded-lg items-center justify-center"
            >
             <TouchableOpacity className="items-center " onPress={()=> setType("Star")}>   
                <Image className="h-8 w-8" tintColor='#ffff' source={star}/>
                <Text className="text-white">Stars</Text>
             </TouchableOpacity>
        </LinearGradient>
        {/* Lunas */}
        <LinearGradient
            colors={['#FFEBCD','#FFAA2B' ]}
            className="h-20 w-20 rounded-lg items-center justify-center"
            >
             <TouchableOpacity className="items-center " onPress={()=> setType("Moon")}>   
                <Image className="h-8 w-8" tintColor='#ffff' source={lune}/>
                <Text className="text-white">Moons</Text>
             </TouchableOpacity>
        </LinearGradient>
    </View>
  )
}

export default Options