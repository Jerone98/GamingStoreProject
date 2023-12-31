import React from 'react';
import {View, Text, Image} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 180, width: 300, borderRadius: 10}}
      />
    </View>
  );
}
