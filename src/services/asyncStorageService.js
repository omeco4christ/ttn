import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
  async getToken() {
    try {
      return await AsyncStorage.getItem('@token');
    } catch (e) {
      console.log(e);
    }
  }

  async setToken(token) {
    try {
      return await AsyncStorage.setItem('@token', token);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AsyncStorageService();
