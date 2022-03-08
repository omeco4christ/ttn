import axios from 'axios';
import {
  API_CHANGE_PASSWORD,
  API_EDUCATION_HISTORY,
  API_FORGET_PASSWORD,
  API_FORUM_TOPIC,
  API_FORUMS,
  API_FORUMS_TOPIC_COMMENT,
  API_FORUMS_TOPIC_COMMENTS,
  API_FORUMS_TOPIC_REACTION,
  API_LOGIN,
  API_PROFILE,
  API_RESET_PASSWORD,
  API_RESET_PASSWORD_TOKEN_VALIDATION,
  API_SIGNUP,
  API_UPLOAD,
  API_USER,
} from '../constants/api_endpoints';
import asyncStorageService from './asyncStorageService';
// import qs from 'qs';

const axiosHelper = axios.create({
  baseURL: 'https://dev-api.tellit.io/api/v1/',
});

const apiHelper = async func => {
  try {
    const {data} = await func;
    return data.data;
  } catch (error) {
    if (error.toJSON() && !error.toJSON().status) {
      throw 'Network error!';
    } else if (error.response) {
      throw error.response.data.message;
    } else if (error.request) {
      throw 'Request not processed!';
    } else {
      throw error.message;
    }
  }
};

class ApiService {
  signup(dataObj) {
    return apiHelper(axiosHelper.post(API_SIGNUP, {...dataObj}));
  }

  login(dataObj) {
    return apiHelper(axiosHelper.post(API_LOGIN, {...dataObj}));
  }

  forgetPassword(dataObj) {
    return apiHelper(axiosHelper.post(API_FORGET_PASSWORD, {...dataObj}));
  }

  resetPassword(dataObj) {
    return apiHelper(axiosHelper.post(API_RESET_PASSWORD, {...dataObj}));
  }

  resetPasswordTokenValidation(dataObj) {
    return apiHelper(
      axiosHelper.post(API_RESET_PASSWORD_TOKEN_VALIDATION, {...dataObj}),
    );
  }

  async changePassword(dataObj) {
    return apiHelper(
      axiosHelper.post(
        API_CHANGE_PASSWORD,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async createForumTopic(dataObj) {
    return apiHelper(
      axiosHelper.post(
        API_FORUM_TOPIC,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async getForumsList(page) {
    return apiHelper(axiosHelper.get(`${API_FORUMS}?page=${page}`));
  }

  async getForum(id) {
    return apiHelper(axiosHelper.get(`${API_FORUMS}/${id}`));
  }

  async getForumTopics({forumID, pageNumber}) {
    console.log(forumID);
    return apiHelper(
      axiosHelper.get(
        `${API_FORUM_TOPIC}?page=${pageNumber}${
          forumID ? `&forum_id=${forumID}` : ''
        }`,
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async getForumTopicsByID(topicID) {
    return apiHelper(
      axiosHelper.get(`${API_FORUM_TOPIC}/${topicID}`, {
        headers: await getAuthorizationHeader(),
      }),
    );
  }

  async createForumTopicComment({topicID, comment}) {
    return apiHelper(
      axiosHelper.post(
        `${API_FORUM_TOPIC}/${topicID}/${API_FORUMS_TOPIC_COMMENTS}`,
        {
          comment: comment,
        },
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async getForumTopicComment({topicID, pageNumber}) {
    return apiHelper(
      axiosHelper.get(
        `${API_FORUM_TOPIC}/${topicID}/${API_FORUMS_TOPIC_COMMENTS}?page=${pageNumber}`,
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async addForumTopicReaction({topicID}) {
    return apiHelper(
      axiosHelper.post(
        `${API_FORUM_TOPIC}/${topicID}/${API_FORUMS_TOPIC_REACTION}`,
        {},
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async deleteForumTopicReaction({topicID}) {
    return apiHelper(
      axiosHelper.delete(
        `${API_FORUM_TOPIC}/${topicID}/${API_FORUMS_TOPIC_REACTION}`,
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async addForumTopicCommentReaction({commentID}) {
    return apiHelper(
      axiosHelper.post(
        `${API_FORUMS_TOPIC_COMMENT}/${commentID}/${API_FORUMS_TOPIC_REACTION}`,
        {},
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async deleteForumTopicCommentReaction({commentID}) {
    return apiHelper(
      axiosHelper.delete(
        `${API_FORUMS_TOPIC_COMMENT}/${commentID}/${API_FORUMS_TOPIC_REACTION}`,
        {headers: await getAuthorizationHeader()},
      ),
    );
  }

  async getUserProfile() {
    return apiHelper(
      axiosHelper.get(API_PROFILE, {headers: await getAuthorizationHeader()}),
    );
  }

  async uploadFile(formData) {
    return apiHelper(
      axiosHelper.post(API_UPLOAD, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    );
  }

  async updateUserProfile(data) {
    return apiHelper(
      axiosHelper.put(API_USER, data, {
        headers: await getAuthorizationHeader(),
      }),
    );
  }

  async getEducationCredential() {
    return apiHelper(
      axiosHelper.get(API_EDUCATION_HISTORY, {
        headers: await getAuthorizationHeader(),
      }),
    );
  }

  async addEducationHistory(data) {
    return apiHelper(
      axiosHelper.post(API_EDUCATION_HISTORY, data, {
        headers: await getAuthorizationHeader(),
      }),
    );
  }

  async updateEducationHistory(data) {
    return apiHelper(
      axiosHelper.put(API_EDUCATION_HISTORY, data, {
        headers: await getAuthorizationHeader(),
      }),
    );
  }
}

export default new ApiService();

const getAuthorizationHeader = async () => {
  const token = await asyncStorageService.getToken();
  return {Authorization: `Bearer ${token}`};
};
