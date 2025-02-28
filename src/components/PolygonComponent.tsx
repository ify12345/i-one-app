import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { Polygon } from 'react-native-svg';
import { Colors } from '../config/colors';

type PolygonShapeProps = {
  sides?: number;
  size?: number;
  centerContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
};

const PolygonShape: React.FC<PolygonShapeProps> = ({ sides = 5, size = 49, centerContent,bottomContent }) => {
  const radius = size / 2;
  const angle = (2 * Math.PI) / sides;
  const points = Array.from({ length: sides }).map((_, i) => {
    const x = radius + radius * Math.cos(i * angle - Math.PI / 2);
    const y = radius + radius * Math.sin(i * angle - Math.PI / 2);
    return `${x},${y}`;
  }).join(" ");

  return (
    <View>

    <View style={[styles.container, { width: size, height: size }]}> 
      <Svg width={size} height={size}>
        <Polygon points={points} fill={Colors.paleGreen} stroke={Colors.paleGreen}  strokeWidth={2} />
      </Svg>
      <View style={styles.centerContent}>
        <Text variant="displaySmall" style={styles.bottomContent}>{centerContent}</Text>
      </View>
    </View>
      <View >
        <Text  variant="displaySmall" style={styles.bottomContent}>{bottomContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
     color:'black'
  },
  bottomContent:{
    color:'black',
    alignSelf:'center'
  }
});

export default PolygonShape;
