import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => (setSelectionMode(value), onSelectSwitch);
  return (
    <View
      style={{
        height: 20,
        width: '100%',
        backgroundColor: '#AD40AF',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'centre',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#AD40AF',
          borderRadius: 10,
          justifyContent: 'centre',
          alignItems: 'centre',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? '#AD40AF' : '#AD40AF',
            fontSize: 14,
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#AD40AF',
          borderRadius: 10,
          justifyContent: 'centre',
          alignItems: 'centre',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#AD40AF',
            fontSize: 14,
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
