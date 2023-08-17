import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import {freeGames, paidGames, sliderData} from '../data';
import BannerSlider from '../BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../CustomSwitch';
import {useState} from 'react';
import ListItem from '../ListItem';

function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{Flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16}}>Hello Jerone Chevannes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Game ON')}>
            <ImageBackground
              source={require('../Images/profile.png')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexdirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 0,
            paddingHorizontal: 10,
            paddingVertical: 8,
            //these are the making of the Search bar
          }}>
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>Popular Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>View</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
          //makes the scrollview loop and not end
        />

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1=""
            option2=""
            onSelectSwitch={onSelectSwitch}
          />
          <Text style={{fontSize: 18}}>Top 5 Games Today :</Text>
        </View>
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subTitle}
              isFree={item.isFree}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;
