import {Dimensions} from 'react-native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView, { Callout } from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, Image,View, Button, Modal } from 'react-native';
import * as Location from 'expo-location';

const ciragan ={
  latitude: 41.043205458373286, 
  longitude: 29.0098958,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

const aylak ={
  latitude: 41.04405557201334, 
  longitude: 29.004565697493568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

const citir ={
  latitude: 41.04803397438951, 
  longitude: 29.002270753318555 ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const ayibedenler ={
  latitude: 41.044770729210754, 
  longitude: 29.00366501098861 ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const makana ={
  latitude: 41.043689947997805, 
  longitude: 29.00608383982357  ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const dami ={
  latitude: 41.04659, 
  longitude: 29.01986 ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}


export default function HomeScreen() {
  const [pin,setPin] = React.useState({
    latitude: 0 , 
    longitude: 0 ,
    latitudeDelta: 0,
    longitudeDelta: 0 ,});

  React.useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setPin({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude
      }
      )
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 41.050258,
          longitude: 29.011065,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          }}
     >
      <Marker coordinate={citir}>
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Çıtır Pide ve Lahmacun</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/çıtır(1).png')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> Öğrencilere %20 İndirim</Text>
        </View>
        
        </Callout> 
      </Marker> 

      <Marker coordinate={ciragan} pinColor="yellow"> 
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Çırağan Restoran</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/çırağan.png')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> Bütün ürünlerde %15'e varan indirimler!</Text>
          </View>
        
        </Callout> 
      
      </Marker>
      <Marker coordinate={aylak} pinColor="green">
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Aylak Bar</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/aylak.png')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> 17.00-19.00 Arası Happy Hour</Text>
        </View>
        
        </Callout> 
      </Marker>
      <Marker coordinate={makana} pinColor="yellow">
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Makana</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/makana.jpg')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> Bütün ürünlerde %20'ye varan indirimler!</Text>

        </View>
        
        </Callout> 
      </Marker>
      <Marker coordinate={pin}
      pinColor="gold"/>
          
      
      <Marker coordinate={dami}
      pinColor="blue"/>
     </MapView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bubble: {
    flexDirection :'column',

    alignSelf: 'flex-start',

    backgroundColor: '#fff',
    
    padding: 10,
    
    borderRadius: 6,

    borderWidth: 0.5,

    borderColor: '#ccc',
    
    width: 150,
    
    },
    image: {
      width: 150,
      height: 60,
      
      },
});