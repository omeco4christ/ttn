import {useState} from 'react';

const useModal = () => {
  const [modal, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(prev => !prev);
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return {modal, openModal, closeModal, toggleModal};
};

export default useModal;
