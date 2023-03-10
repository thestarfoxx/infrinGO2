import {Dimensions} from 'react-native';
import * as React from 'react';
import MapView, { Callout } from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, Image,View, Button, Modal } from 'react-native';
import * as Location from 'expo-location';
import { LogBox } from 'react-native';

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


export default function HomeScreen({route}) {
  LogBox.ignoreAllLogs();
  let saleInfo = route.params ?   route.params.saleInfo : null
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
            <Text> ????t??r Pide ve Lahmacun</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/citir.png')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> ????rencilere 1 lahmacuna alana 1 lahmacun bedava 11</Text>
        </View>
        
        </Callout> 
      </Marker> 

      <Marker coordinate={ciragan} pinColor="blue"> 
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> ????ra??an Restoran</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/????ra??an.png')}
            resizeMethod='scale'
            resizeMode='cover'/>


            <Text> B??t??n ??r??nlerde %15'e varan indirimler!</Text>
          </View>
        
        </Callout> 
      
      </Marker>
      <Marker coordinate={aylak} pinColor="blue">
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Aylak Bar</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/aylak.png')}
            resizeMethod='scale'
            resizeMode='cover'/>

            <Text> 17.00-19.00 Aras?? Happy Hour</Text>
        </View>
        
        </Callout> 
      </Marker>
      <Marker coordinate={makana} pinColor="blue">
      <Callout tooltip>
          <View style={styles.bubble}>
            <Text> Makana</Text>
            <Image 
            style={styles.image}
            source={require('../../assets/makana.jpg')}
            resizeMethod='scale'
            resizeMode='cover'/>

           {saleInfo ? <Text>{saleInfo}</Text> : <Text> B??t??n ??r??nlerde %20'ye varan indirimler!</Text>}

        </View>
        
        </Callout> 
      </Marker>
      <Marker coordinate={pin}
      pinColor="blue"/>
          
      
      <Marker coordinate={dami}
      pinColor="red"/>
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