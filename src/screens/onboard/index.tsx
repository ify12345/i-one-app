import {Animated, Dimensions, View, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import {useTheme, Text} from 'react-native-paper';
import CustomButton from '@/src/components/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '@/src/types/navigation';
import {Colors} from '@/src/config/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const {width} = Dimensions.get('screen');

const images = [
  require('@/src/assets/images/onboard-1.png'),
  require('@/src/assets/images/onboard-2.png'),
]

const DATA = [
  {
    id: 1,
    text: 'Value added services to students',
    primaryText:
      'Student Deal is an organisation that works to support international students throughout the lifecycle of their study experience, from application to arrival through to graduation to maximise the quality of their education',
    image: '../../../assets/images/onboard-1.png',
  },
  {
    id: 2,
    text: 'Achieve your dreams',
    primaryText:
      'Our mission is to help you achieve your academic and career goals with unparalleled support and services.',
    image: '../../../assets/images/onboard-2.png',
  },
];

export default function Onboard() {
  const {colors} = useTheme();
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation('onboarding');
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const navigation = useNavigation<RootStackScreenProps<'Onboard'>['navigation']>();

  function handleContinue() {
    navigation.navigate('Authentication');
  }

  function handleNext() {
    if (activeIndex < DATA.length - 1) {
      const nextIndex = activeIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setActiveIndex(nextIndex);
    } else {
      handleContinue(); // If it's the last item, navigate to the next screen
    }
  }

  function handleGoBack() {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      flatListRef.current?.scrollToIndex({index: prevIndex, animated: true});
      setActiveIndex(prevIndex);
    }
  }

  return (
    <SafeAreaScreen style={styles.screen}>
      <ImageBackground
        resizeMode="cover"
        source={require('@/src/assets/images/logo_1.png')}
        style={styles.img1}
      />
      <Animated.FlatList
        horizontal
        data={DATA}
        ref={flatListRef}
        keyExtractor={item => item.id.toString()}
        decelerationRate="fast"
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
          useNativeDriver: true,
        })}
        onMomentumScrollEnd={ev => {
          setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / (width - 9)));
        }}
        renderItem={({item, index}) => {
          const {text, primaryText} = item;
          return (
            <View style={{width: width - 1,  flex:1,
              justifyContent:'space-between',
              gap:5}}>
              <View style={{backgroundColor: 'white', paddingVertical: 2, paddingHorizontal: 24,}}>
                <ImageBackground
                  resizeMode="cover"
                  source={images[index]}
                  style={styles.imgBackground}
                  imageStyle={styles.img}
                />
              </View>
              <View style={styles.indicatorWrapper}>
                {DATA.map((_, index) => {
                  const backgroundColor = scrollX.interpolate({
                    inputRange: [width * (index - 1), width * index, width * (index + 1)],
                    outputRange: ['#A9AABD', '#002100', '#A9AABD'],
                  });
                  const isActive = activeIndex === index;
                  return (
                    <Animated.View
                      key={index.toString(10)}
                      style={[
                        isActive ? styles.activeIndicator : styles.inActiveIndicator,
                        {backgroundColor},
                      ]}
                    />
                  );
                })}
              </View>

              <View style={styles.imgOverlay}>
                <Text
                  variant="titleMedium"
                  style={{color: 'black', textAlign: 'center'}}>
                  {text}
                </Text>
                <Text
                  variant="titleSmall"
                  style={{textAlign: 'center'}}>
                  {primaryText}
                </Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  paddingBottom: bottom,
                  paddingHorizontal: 24,
                  gap: 5,
                }}>
                {/* First Button */}
                <CustomButton
                  primary
                  title={activeIndex === 0 ? t('Next') : t('Get Started')}
                  style={styles.loginBtn}
                  onPress={activeIndex === 0 ? handleNext : handleContinue}
                />

                {/* Second Button */}
                <CustomButton
                  title={activeIndex === 0 ? t('Skip') : t('Go Back')}
                  style={styles.loginBtn}
                  onPress={activeIndex === 0 ? handleContinue : handleGoBack}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaScreen>
  );
}
