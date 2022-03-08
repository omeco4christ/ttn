import React from 'react';

import Svg, {Path} from 'react-native-svg';

function EditIcon(props) {
  const {color, ...others} = props;
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.751 2.735l-1.735-1.73a2.04 2.04 0 00-2.885 0L2.694 8.452a2.04 2.04 0 00-.506.816L.694 14.041a.816.816 0 001.02 1.024l4.768-1.498c.308-.1.588-.272.816-.502l7.453-7.449a2.04 2.04 0 000-2.881zm-2.6.865l-6.939 6.939A.816.816 0 014.07 9.388l6.94-6.939a.817.817 0 111.154 1.155l-.012-.004z"
        fill={color}
      />
      <Path
        d="M1.673 20h12.653a1.02 1.02 0 000-2.04H1.673a1.02 1.02 0 100 2.04z"
        fill={color}
      />
    </Svg>
  );
}

export default EditIcon;
