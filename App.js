import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, Image,Button, SafeAreaView,FlatList} from 'react-native';
import Options from './screens/Options';
import serch from './assets/search.png'
import ListView from './screens/ListView';
import Details from './screens/Details';


export default function App() {
  const [bodyType, setBodyType] = useState('')
  const [userInput, setUserInput] = useState('')
  const [bodiesList, setBodiesList] = useState([])
  const [rel, setRel] = useState('https://api.le-systeme-solaire.net/rest/bodies/uranus')
  // API CALL
useEffect(() => {
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies?exclude=moons,mass,vol,semimajorAxis,perihelion,escape,eccentricity,aphelion,longAscNode,argPeriapsis,mainAnomaly,avgTemp,axialTilt,discoveredBy,aphelion,aroundPlanet,discoveryDate,alternativeName,alternativeName,equaRadius,meanRadius")
  .then(res => res.json())
  .then(({bodies})=>{    
    setBodiesList(bodies)
  })
  return () => {
  }
}, [])

const setType = typeSelected =>{
  setBodyType(typeSelected)
}

const setReference = bodySelected =>{
  setRel(bodySelected)
  console.log("refence: --> "+rel)
}

  return (
    <SafeAreaView className="w-full h-full bg-black text-white">
      <StatusBar style="auto" />
      <View className="mt-10 px-2  justify-left">
        <Text className="text-white text-2xl">Hi!</Text>
        <Text className="text-white tex-sm ">What will you learn today?!</Text>
        {/* search bar */}
        <View className="mt-10 flex-row mx-4 border rounded-md p-2  bg-gray-800 items-center">
          <Image  className="mx-3 w-6 h-6" source={serch} tintColor='#ffff'/>
          <TextInput
          placeholderTextColor="#808080" 
          className="text-gray-300 px-2"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          type="text"
          placeholder="Look for planets, asteroids, stars..."
          />
        </View> 
      </View>

      {/* Lista de opaciones     */}
      <Options setType={setType}/>
      {/* Caousel */}
      <ListView DATA={bodiesList} bodyType={bodyType} setReference={setReference}/>
      {/* detalles */}
      <Details rel={rel} bodyType={bodyType} />

   
   
    </SafeAreaView>
  );
}

