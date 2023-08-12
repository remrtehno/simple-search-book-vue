import simulateApiCall from '../../utils/emulateApi';
import userMock from '../../mock/user'

export default {
  async login(context, payload) {
   const {email, password} = payload;
      
    // no response just a mock
    const result = await simulateApiCall();

    if (userMock.password !== password || email !== userMock.userEmail) {
      const error = new Error('Failed to authenticate. Check your login data.');
      throw error;
    }

    context.commit('setUser', {
     ...userMock,
    });

  },
  logout(context) {      
    // for api
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
};