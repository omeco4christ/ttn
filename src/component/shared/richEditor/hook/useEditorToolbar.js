import {uploadImageFromStorageToServer} from '../../../../utils/upload';

const useEditorToolbar = ({editorRef}) => {
  const handleAddImage = async () => {
    const url = await uploadImageFromStorageToServer();
    editorRef.current.insertImage(url);
  };

  return {handleAddImage};
};

export default useEditorToolbar;
