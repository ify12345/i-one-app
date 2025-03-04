import React from 'react';
import {Dimensions, FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import {Text, TextInput, useTheme} from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import AlarmIcon from '@/src/assets/svg/Alarm';
import FilterIcon from '@/src/assets/svg/FilterSvg';
import PolygonShape from '@/src/components/PolygonComponent';
import GoArrow from '@/src/assets/svg/GoArrow';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    title: 'Pitch 1',
    image: require('@/src/assets/images/pitch.png'),
  },
  {
    title: 'Pitch 2',
    image: require('@/src/assets/images/pitch.png'),
  },
  {
    title: 'Pitch 3',
    image: require('@/src/assets/images/pitch.png'),
  },
  {
    title: 'Pitch 4',
    image: require('@/src/assets/images/pitch.png'),
  },
];

const Fixtures = [
  { id: '1', time: '14:00', type: 'Friendly Match' },
  { id: '2', time: '14:00', type: 'Friendly Match' },
  { id: '3', time: '14:00', type: 'Friendly Match' },
  { id: '4', time: '14:00', type: 'Friendly Match' },
];

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.82;
const ITEM_MARGIN = 10;

const renderItem = ({item}) => (
  <View style={[styles.card]}>
    <ImageBackground source={item.image} style={styles.image} />
  </View>
);


export default function HomeScreen() {
  const {colors} = useTheme();
  const [carouselRef, setCarouselRef] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0); 
  const navigation = useNavigation()

  const renderFixtures = ({ item }) => (
    <TouchableOpacity style={styles.fixtureCard} onPress={()=>navigation.navigate('Fixtures')}>
      <View style={styles.view}>
        <Text style={{ color: 'black' }} variant="displayMedium">
          {item.time}
        </Text>
        <Text style={{ color: 'black' }} variant="displayMedium">
          {item.type}
        </Text>
        <GoArrow />
      </View>
      <View style={styles.versus}>
        <PolygonShape centerContent="TN" bottomContent="Team Name" />
        <Text style={{ color: 'black' }} variant="displayMedium">
          VS
        </Text>
        <PolygonShape centerContent="TN" bottomContent="Team Name" />
      </View>
    </TouchableOpacity>
  );

  const handleScrollEnd = event => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / (ITEM_WIDTH + ITEM_MARGIN));
    setCurrentIndex(index);
  };

  return (
    <SafeAreaScreen style={styles.screen}>
      <View style={styles.top}>
        <View>
          <Text style={{color: 'black'}} variant="displayMedium">
            Hey, Kevin👋
          </Text>
          <Text style={{color: 'black', marginTop: 7}} variant="displayLarge">
            It’s Matchday!
          </Text>
        </View>
        <AlarmIcon />
      </View>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search for locations" />
        <FilterIcon />
      </View>
      <View style={{flexDirection: 'column', gap: 10, marginTop: 34, paddingHorizontal:30}}>
        <Text style={{color: 'black', marginTop: 7}} variant="displayLarge">
          Nearby Pitches
        </Text>

        <FlatList
          ref={ref => setCarouselRef(ref)}
          data={DATA}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={handleScrollEnd} // Capture the current index
          keyExtractor={item => item.title}
        />

        {/* Add bottom indicators */}
        <View style={styles.indicators}>
          {DATA.map((item, index) => (
            <TouchableOpacity key={item.title} onPress={() => carouselRef.scrollToIndex({index})}>
              <View
                style={[
                  styles.indicator,
                  {backgroundColor: index === currentIndex ? colors.primary : 'gray'},
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{flexDirection: 'column', gap: 10, marginTop: 34,flex:1}}>
        <Text style={{color: 'black', marginTop: 7, paddingHorizontal:30}} variant="displayLarge">
          Upcoming Fixtures
        </Text>
     
      <FlatList
        data={Fixtures}
        renderItem={renderFixtures}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
  
      </View>
    </SafeAreaScreen>
  );
}
