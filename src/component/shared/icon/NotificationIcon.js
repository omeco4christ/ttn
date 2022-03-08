import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {color = '#000', size = 24, ...others} = props;
  return (
    <Svg
      width={21}
      height={23}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M17.5 0a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={color} />
      <Path
        d="M12 1.22c0-.074.002-.147.007-.22H6a6 6 0 00-6 6v10a6 6 0 006 6h8a6 6 0 006-6V8.993a3.262 3.262 0 01-.22.007h-1.494v7.89a4.5 4.5 0 01-4.5 4.5H6.214a4.5 4.5 0 01-4.5-4.5V7.11a4.5 4.5 0 014.5-4.5H12V1.22z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
