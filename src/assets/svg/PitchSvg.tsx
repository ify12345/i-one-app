/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function PitchIcon(props: SvgProps) {
  return (
    <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={16}
    fill="none"
  >
    <Path
     fill={props.color || '#B9B9B9'}
      d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm.082 2.051a1 1 0 0 1 1-1h10.377a1 1 0 0 1 1 1v2.81c0 .47-.34.858-.744 1.1A2.385 2.385 0 0 0 11.537 8c0 .86.473 1.617 1.178 2.04.403.24.744.63.744 1.099v2.81a1 1 0 0 1-1 1H2.082a1 1 0 0 1-1-1v-1.62a1 1 0 0 1 1-1h1.845a1 1 0 0 0 1-1V5.671a1 1 0 0 0-1-1H2.082a1 1 0 0 1-1-1v-1.62Zm13.459 0a1 1 0 0 1 1-1h10.378a1 1 0 0 1 1 1v1.62a1 1 0 0 1-1 1h-1.846a1 1 0 0 0-1 1v4.657a1 1 0 0 0 1 1h1.846a1 1 0 0 1 1 1v1.62a1 1 0 0 1-1 1H15.54a1 1 0 0 1-1-1v-2.81c0-.469.34-.857.744-1.099A2.385 2.385 0 0 0 16.463 8c0-.86-.473-1.617-1.178-2.04-.403-.24-.744-.63-.744-1.099v-2.81ZM1.08 6.723a1 1 0 0 1 1-1h.764a1 1 0 0 1 1 1v2.554a1 1 0 0 1-1 1h-.763a1 1 0 0 1-1-1V6.723Zm23.073 0a1 1 0 0 1 1-1h.765a1 1 0 0 1 1 1v2.554a1 1 0 0 1-1 1h-.765a1 1 0 0 1-1-1V6.723Zm-11.49.93c.153-.57.795-.244.795.347s-.642.918-.795.347a1.333 1.333 0 0 1 0-.694ZM14.54 8c0-.591.642-.918.795-.347a1.333 1.333 0 0 1 0 .694c-.153.57-.795.244-.795-.347Z"
    />
  </Svg>
  );
}
