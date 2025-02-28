/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function AlarmIcon(props: SvgProps) {
  return (
    <TouchableOpacity>
      <Svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <Path
          fill="#2D264B"
          d="M11.1 1.25a5.645 5.645 0 0 0-5.602 6.345l.08.635a2.9 2.9 0 0 1-.911 2.492 4.401 4.401 0 0 0-.976 5.155l.104.213a4.72 4.72 0 0 0 4.246 2.66h8.221a4.562 4.562 0 0 0 3.105-7.905l-.044-.04a3.132 3.132 0 0 1-.925-1.61.75.75 0 1 0-1.463.33 4.638 4.638 0 0 0 1.367 2.378l.044.041a3.062 3.062 0 0 1-2.084 5.306h-8.22a3.22 3.22 0 0 1-2.898-1.815l-.103-.213a2.901 2.901 0 0 1 .643-3.398 4.401 4.401 0 0 0 1.382-3.78l-.08-.635A4.145 4.145 0 0 1 11.1 2.75h1.703c.737 0 1.422.19 2.015.52a.75.75 0 1 0 .73-1.31 5.623 5.623 0 0 0-2.745-.71H11.1ZM9.783 20.55a.75.75 0 1 0-1.2.9l.3.4c1.65 2.2 4.95 2.2 6.6 0l.3-.4a.75.75 0 1 0-1.2-.9l-.3.4a2.625 2.625 0 0 1-4.2 0l-.3-.4Z"
        />
        <Path fill="#03EA89" d="M19.183 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      </Svg>
    </TouchableOpacity>
  );
}
