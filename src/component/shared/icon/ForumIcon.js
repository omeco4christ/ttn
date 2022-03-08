import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {color = '#000', size = 24, ...others} = props;
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}>
      <Path
        d="M5.5 18.25v.5h7v.75H6c-.411 0-.715-.135-.915-.335-.2-.2-.335-.504-.335-.915V6c0-.411.135-.715.335-.915.2-.2.504-.335.915-.335h17.5c.411 0 .715.135.915.335.2.2.335.504.335.915v12.25c0 .411-.135.715-.335.915-.2.2-.504.335-.915.335h-5.685l-.15.213-3.378 4.827-.598-.448 3.77-5.342H24V5.5H5.5v12.75zm-3.5-4h-.75V3.375c0-1.211.914-2.125 2.125-2.125H14.25V2H3.375c-.376 0-.728.128-.988.387C2.127 2.647 2 3 2 3.375V14.25z"
        stroke={color}
      />
    </Svg>
  );
}

export default SvgComponent;
