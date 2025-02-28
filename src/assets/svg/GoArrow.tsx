/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function GoArrow(props: SvgProps) {
  return (
    <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    fill="none"
  >
    <Path
      fill="#2D264B"
      d="M13.528.467a.75.75 0 0 0-1.056 1.066l1.763 1.747c.716.71 1.206 1.197 1.538 1.61.108.135.193.253.258.36H1a.75.75 0 0 0 0 1.5h15.03c-.065.107-.149.225-.257.36-.332.413-.822.9-1.538 1.61l-1.763 1.747a.75.75 0 0 0 1.056 1.066l1.795-1.78c.676-.67 1.228-1.217 1.62-1.704.407-.508.702-1.023.781-1.64a3.223 3.223 0 0 0 0-.817c-.079-.618-.374-1.133-.781-1.64-.392-.488-.944-1.036-1.62-1.706L13.528.467Z"
    />
  </Svg>
  );
}
