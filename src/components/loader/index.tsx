/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {StyleSheet, View, Modal, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Text, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

interface Prop {
  visible: boolean;
}

export default function Loader({visible}: Prop) {
  const {colors} = useTheme();
  const {t} = useTranslation('onboard');
  const CustomLoader = () => {
    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    }, []);

    const rotate = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 5,
          borderColor: colors.primary,
          borderTopColor: 'transparent',
          transform: [{rotate}],
        }}
      />
    );
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <CustomLoader />
        <Text variant="labelLarge" style={[styles.text, {color: colors.primary}]}>
          {t('Loading...')}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 24,
  },
  svg: {
    width: 153,
    height: 153,
  },
});
