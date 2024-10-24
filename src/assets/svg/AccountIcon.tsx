import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function AccountIcon(props: SvgProps) {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <Path
        fill={props.color || '#000'}
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M15 5.313a5.937 5.937 0 1 0 0 11.874 5.937 5.937 0 0 0 0-11.875Zm-4.063 5.937a4.062 4.062 0 1 1 8.125 0 4.062 4.062 0 0 1-8.125 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={props.color || '#000'}
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M15 1.563C7.579 1.563 1.562 7.579 1.562 15c0 3.81 1.588 7.252 4.135 9.696A13.396 13.396 0 0 0 15 28.437c3.61 0 6.89-1.425 9.303-3.74A13.401 13.401 0 0 0 28.437 15c0-7.421-6.016-13.438-13.437-13.438ZM3.437 15C3.438 8.614 8.614 3.437 15 3.437c6.386 0 11.563 5.177 11.563 11.563a11.51 11.51 0 0 1-2.552 7.246 5.936 5.936 0 0 0-5.261-3.183h-7.5a5.936 5.936 0 0 0-5.261 3.183A11.51 11.51 0 0 1 3.438 15Zm15.313 5.938a4.065 4.065 0 0 1 3.854 2.773A11.515 11.515 0 0 1 15 26.563c-2.912 0-5.57-1.076-7.604-2.852a4.065 4.065 0 0 1 3.854-2.773h7.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
