import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.82;

const styles = StyleSheet.create({
  view: {
    paddingVertical: 38,
    position: 'relative',
  },
  img: {
    width: ITEM_WIDTH,
    height: heightPercentageToDP(50),
  },
  playerCard: {
    backgroundColor: '#FF5F5F',
    width: 25,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default function Pitch() {
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={require('@/src/assets/images/field.png')} />
      {/* keeper */}
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 90,
          left: '42%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 200,
          left: '20%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 200,
          right: '20%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 310,
          left: '10%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 310,
          right: '10%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 290,
          right: '40%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 400,
          right: '40%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
        <View style={styles.playerCard}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text}>John Doe</Text>
      </View>
    </View>
  );
}
