import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import ImagesAsteroid from '../assets/AsteroidImages';
import Images from '../assets/Images';

const ListView = ({DATA,bodyType="Planet",setReference}) => {
 
  let luna=0
  function moonImg(name){
    if (luna>=4) {

      return(`l${Math.floor(Math.random() * 18)}`)   
    } else {
        luna=luna+1
        return(name)
    }
   
  }

  let filteredInfo=[]
  const filter = DATA.map( (body) =>{
  if (body.bodyType===bodyType) {
    (bodyType==="Asteroid") 
    ? (body.img=`n${Math.floor(Math.random() * 19)}`)
    : ((bodyType==="Moon")
      ?(body.img= moonImg(body.id))
      :(body.img=body.id)
    )
    filteredInfo.push(body)
  }
});



  const renderItem = ({ item }) => (
    <TouchableOpacity className="border items-center justify-center w-[100px] h-24 bg-slate-800 rounded-lg"
    onPress={()=> setReference(item.rel)}>
      <Text className="text-white">{item.englishName}</Text>
      <Image className="mt-2 w-10 h-10"
        source={Images[item.img]}
      />
    </TouchableOpacity>
  );


  return (
    <View className="mt-10 mr-3 ml-3 ">
       
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="w-2" />
          )}
          className=""
          horizontal={true}
          data={filteredInfo}
          renderItem={renderItem}
          keyExtractor={filteredInfo => filteredInfo.id}
        />

    </View>
  )
}

export default ListView