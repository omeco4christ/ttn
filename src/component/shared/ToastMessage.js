import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

const ToastMessage = ({type, message, autoHide = false, onClose}) => {
  useEffect(() => {
    if (message) {
      Toast.show({
        position: 'bottom',
        type: type,
        text1: message,
        topOffset: 20,
        autoHide: autoHide,
        onHide: () => {
          if (onClose) {
            onClose();
          }
        },
        // bottomOffset: 40,
      });
    }
  }, [message]);
  return <></>;
};

export default ToastMessage;
