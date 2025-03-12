/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function Polygon(props: SvgProps) {
  return (
    <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
  >
    <Path
      fill="#00FF94"
      d="M8.824.854a2 2 0 0 1 2.352 0l7.159 5.202a2 2 0 0 1 .726 2.236l-2.734 8.416a2 2 0 0 1-1.902 1.382h-8.85a2 2 0 0 1-1.902-1.382L.938 8.292a2 2 0 0 1 .727-2.236L8.825.854Z"
    />
  </Svg>
  );
}
