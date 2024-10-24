import React from 'react';
import { CheckBox, Text, StyleSheet, View } from 'react-native

const Checkbox = ({ children, value, handleChange }) => {
  return (
    <View>
      <View>
        <CheckBox
          type={'checkbox'}
          value={value}
          onValueChange={handleChange}
          checked={value}
        />
        <Text>{children}</Text>
      </View>
    </View>
  );
};

export default Checkbox;