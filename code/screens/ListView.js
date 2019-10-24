import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faChevronRight} from '@fortawesome/free-solid-svg-icons';
export default class ListView extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <FlatList
        style={{
          flex: 1,
          padding: 20,
          marginVertical: 40,
          backgroundColor: '#F1F1F1',
        }}
        keyExtractor={item => item.name.toString()}
        data={this.props.navigation.getParam('data', {})}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginVertical: 10,
                elevation: 4,
                shadowOffset: {width: 5, height: 5},
                shadowColor: 'gray',
                shadowOpacity: 1,
                shadowRadius: 10,
              }}>
              <View style={{}}>
                <Image
                  style={{height: 150, width: '100%'}}
                  source={{uri: item.url}}
                />
              </View>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 25, fontWeight: '500'}}>
                  {item.name}
                </Text>
                <Text style={{color: 'gray'}}>{item.days}</Text>
                <Text numberOfLines={3} style={{paddingVertical: 10}}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  backgroundColor: '#EFEFEF',
                }}>
                <View style={{flex: 1}}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      icon: 'regular',
                    }}
                    size={25}
                    color={item.liked ? '#CF2929' : '#CBCBCB'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Details', {item});
                  }}
                  style={{flex: 1, alignItems: 'flex-end'}}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={20}
                    color="#BFBFBF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    );
  }
}
