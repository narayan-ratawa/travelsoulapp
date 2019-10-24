import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faChevronLeft,
  faHiking,
  faSkating,
  faSkiing,
  faSkiingNordic,
} from '@fortawesome/free-solid-svg-icons';
export default class Details extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {
      name,
      url,
      description,
      liked,
      days,
      plan,
    } = this.props.navigation.getParam('item', {});

    return (
      <View style={{flex: 1, marginVertical: 40}}>
        <ScrollView
          style={{}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
          <View style={{}}>
            <Image style={{height: 300, width: '100%'}} source={{uri: url}} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{position: 'absolute', left: 20, top: 20}}>
              <FontAwesomeIcon icon={faChevronLeft} size={25} color="#FFF" />
            </TouchableOpacity>
            <View style={{position: 'absolute', top: 20, right: 20}}>
              <FontAwesomeIcon
                icon={faHeart}
                size={25}
                color={liked ? '#CF2929' : '#CBCBCB'}
              />
            </View>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              flexDirection: 'row',
              backgroundColor: '#EFEFEF',
              justifyContent: 'space-between',
            }}>
            <FontAwesomeIcon icon={faHiking} size={25} color="#000" />
            <FontAwesomeIcon icon={faSkating} size={25} color="#000" />
            <FontAwesomeIcon icon={faSkiing} size={25} color="#000" />
            <FontAwesomeIcon icon={faSkiingNordic} size={25} color="#000" />
          </View>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 25, fontWeight: '500'}}>{name}</Text>
            <Text style={{color: 'gray'}}>{days}</Text>
            <Text style={{paddingVertical: 10}}>{description}</Text>
          </View>
          <View
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#808B96'}}>
              {'Itinerary'}
            </Text>
          </View>

          <FlatList
            style={{borderTopWidth: 0.5, 
                marginHorizontal:5}}
            data={plan}
            keyExtractor={item => item.title.toString()}
            renderItem={item => (
              <View
                style={{
                  flexDirection: item.index % 2 === 0 ? 'row' : 'row-reverse',
                  margin: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#E8F8F5',
                    flex:1,
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    flexDirection: item.index % 2 === 0 ? 'row' : 'row-reverse',
                  }}>
                  <Text style={{paddingHorizontal: 5}}>Day {item.index + 1}</Text>
                  <View
                    style={{
                      borderRightWidth: item.index % 2 === 0 ? 0 : 0.5,
                      borderLeftWidth: item.index % 2 === 0 ? 0.5 : 0,
                      paddingHorizontal: 5,
                      borderColor: '#ABB2B9',
                      flex:1
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        textAlign: item.index % 2 === 0 ? 'left' : 'right',
                      }}>
                      {item.item.title}
                    </Text>
                    <Text
                      style={{
                        textAlign: item.index % 2 === 0 ? 'left' : 'right',
                      }}>
                      {item.item.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            alert('Thank you for booking, Visit Again.');
            this.props.navigation.goBack();
          }}
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            position: 'absolute',
            padding: 10,
            paddingHorizontal: 30,
            bottom: 20,
            backgroundColor: 'yellow',
            elevation: 4,
            shadowOffset: {width: 5, height: 5},
            shadowColor: 'black',
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }}>
          <Text style={{fontWeight: 'bold'}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
