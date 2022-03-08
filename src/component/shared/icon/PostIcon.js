import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {color = '#000', size = 24, ...others} = props;
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.977 13.86H5.93a.93.93 0 010-1.86h6.047a.93.93 0 110 1.86zM5.93 9.86h8.372a.93.93 0 100-1.86H5.93a.93.93 0 000 1.86z"
        fill={color}
      />
      <Path
        d="M6 0a6 6 0 00-6 6v16h14a6 6 0 006-6V6a6 6 0 00-6-6H6zm.214 1.61h7.572a4.5 4.5 0 014.5 4.5v9.78a4.5 4.5 0 01-4.5 4.5H1.714V6.11a4.5 4.5 0 014.5-4.5z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
