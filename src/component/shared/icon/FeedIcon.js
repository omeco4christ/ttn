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
        d="M7.22 3.756a3.22 3.22 0 100 6.44h5.56a3.22 3.22 0 100-6.44H7.22z"
        fill={color}
      />
      <Path
        d="M0 6a6 6 0 016-6h8a6 6 0 016 6v10a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm1.714.11v9.78a4.5 4.5 0 004.5 4.5h7.572a4.5 4.5 0 004.5-4.5V6.11a4.5 4.5 0 00-4.5-4.5H6.214a4.5 4.5 0 00-4.5 4.5z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
