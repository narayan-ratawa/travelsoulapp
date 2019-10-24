import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
export default class Login extends Component {
  state = {
    placesArray: [],
    userName:"",
    password:""
  };

   login(navigation) {
      firebase.auth().signInWithEmailAndPassword(this.state.userName,this.state.password)
      .then(function(firebaseUser) {
          // Success 
          let data = {};
          const db = firebase.firestore();
          db.collection('places')
            .get()
            .then(snapshot => {
              snapshot.docs.forEach(doc => {
                let items = doc.data();
                data=items.test;
              });
              navigation.navigate('ListView',{data})
            });
          
      })
     .catch(function(error) {
          // Error Handling
          alert(error.message)
     });
  }
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "YOUR-API-KEY",
      authDomain: "YOUR_DOMAIN",
      databaseURL: "URL",
      projectId: "sample-78572",
      storageBucket: "sample-78572.appspot.com",
      messagingSenderId: "522222402232",
      appId: "1:522222402232:web:96a57e3d2889e95519524d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ImageBackground style={{flex: 1}} source={require('../assets/bg.jpg')}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 30,
              elevation: 4,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'gray',
              shadowOpacity: 1,
              shadowRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>
              Travel<Text style={{color: 'yellow', fontSize: 50}}>Soul</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              elevation: 4,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'white',
              shadowOpacity: 1,
              shadowRadius: 10,
              marginHorizontal: 20,
              paddingVertical: 20,
            }}>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <TextInput
                autoCorrect={false}
                style={{
                  color: 'white',
                  flex: 1,
                  padding: 10,
                  backgroundColor: 'rgba(0,0,0,0.25)',
                }}
                onChangeText={(text)=>this.setState({userName:text})}
                placeholder={'User Name'}
                placeholderTextColor={'rgba(256,256,256,0.5)'}
                selectionColor="white"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <TextInput
                autoCorrect={false}
                secureTextEntry={true}
                style={{
                  color: 'white',
                  flex: 1,
                  padding: 10,
                  backgroundColor: 'rgba(0,0,0,0.25)',
                }}
                onChangeText={(text)=>this.setState({password:text})}
                secureTextEntry={true}
                placeholder={'Password'}
                placeholderTextColor={'rgba(256,256,256,0.5)'}
                selectionColor="white"
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.login(this.props.navigation);
            }}
            style={{
              padding: 10,
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
              marginHorizontal: 20,
              elevation: 4,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'white',
              shadowOpacity: 0.5,
              shadowRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
