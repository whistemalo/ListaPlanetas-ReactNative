import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'


const Details = ({rel, bodyType="Planet"}) => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(rel)
        .then(res => res.json())
        .then((details)=>{    
          setDetail(details)
        })
        return () => {
          
        }
      }, [rel])

      const RenderSwitch= (param) => {
        switch(param) {
          case 'Planet':
            return (
              <View className="ml-3 space-y-2">
              <Text className="text-white text-xl">Planet: {detail.englishName}</Text>
              <Text className="text-white text">Mass: {detail?.mass?.massValue}x10^{detail?.mass?.massExponent} KG</Text>
              <Text className="text-white text">Volume: {detail?.vol?.volValue}x10^{detail?.vol?.volExponent} KG</Text>
              <Text className="text-white text">Density: {detail.density}</Text>
              <Text className="text-white text">Gravity: {detail.gravity}</Text>
              <Text className="text-white text">Radius: {detail.meanRadius} KM</Text>
              <Text className="text-white text">Discovered by: {detail.discoveredBy} </Text>
              <Text className="text-white text">Discovery Date: {detail.discoveryDate} </Text>
            </View>
            );
          case 'Star':
            return (
              <View className="ml-3 space-y-2">
                <Text className="text-white text-xl">Star: The {detail.englishName}</Text>
                <Text className="text-white text">Mass: {detail?.mass?.massValue}x10^{detail?.mass?.massExponent} KG</Text>
                <Text className="text-white text">Volume: {detail?.vol?.volValue}x10^{detail?.vol?.volExponent} KG</Text>
                <Text className="text-white text">Radius: {detail.meanRadius} KM</Text>
              </View>
              
            );
          case 'Moon':
            return (
              <View className="ml-3 space-y-2">
                <Text className="text-white text-xl">Moon: {detail.englishName}</Text>
                <Text className="text-white text">Mass: {detail?.mass?.massValue}x10^{detail?.mass?.massExponent} KG</Text>
                <Text className="text-white text">Volume: {detail?.vol?.volValue}x10^{detail?.vol?.volExponent} KG</Text>
                <Text className="text-white text">Density: {detail.density}</Text>
                <Text className="text-white text">Gravity: {detail.gravity}</Text>
                <Text className="text-white text">Radius: {detail.meanRadius} KM</Text>
                <Text className="text-white text">Orbits: {detail?.aroundPlanet?.planet} </Text>
                <Text className="text-white text">Discovered by: {detail.discoveredBy} </Text>
              <Text className="text-white text">Discovery Date: {detail.discoveryDate} </Text>
            </View>
            );
          case 'Asteroid':
            return (
              <View className="ml-3 space-y-2">
                <Text className="text-white text-xl">Asteroid: {detail.englishName}</Text>
                <Text className="text-white text">Mass: {detail?.mass?.massValue}x10^{detail?.mass?.massExponent} KG</Text>
                <Text className="text-white text">Volume: {detail?.vol?.volValue}x10^{detail?.vol?.volExponent} KG</Text>
                <Text className="text-white text">Density: {detail.density}</Text>
                <Text className="text-white text">Gravity: {detail.gravity}</Text>
                <Text className="text-white text">Radius: {detail.meanRadius} KM</Text>
                <Text className="text-white text">Discovered by: {detail.discoveredBy} </Text>
              <Text className="text-white text">Discovery Date: {detail.discoveryDate} </Text>
            </View>
            );
          default:
            return <Text className="text-white text-xl">type {param}</Text>;
        }
      }

  return (
    <View className="mt-5 space-y-3">
     {(detail.length===0 ||bodyType.trim()==='')
     ? (<Text className="text-white text-xl ml-3">Slect Something To DISCOVER</Text>)
     : (RenderSwitch(bodyType))
     }
    </View>
  )
}

export default Details