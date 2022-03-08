import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetUser = () => {
  const {data, error, isSuccess} = useQuery(
    ['user'],
    apiService.getUserProfile,
    {
      onSuccess: res => console.log(res),
      onError: err => console.log(err),
    },
  );
  const {
    first_name,
    last_name,
    username,
    phone_number,
    about = 'No description about user',
    address,
    email,
  } = data || {};

  const name = {first_name, last_name};

  const userNames = {
    first_name,
    last_name,
    username: `@${username}`,
    photo: '../../assets/images/user.jpg',
  };
  const counters = {
    post: 0,
    following: 0,
    follower: 0,
  };
  const contact = {
    profile_link: `https://www.tellit.com/${username}`,
    phone_number: phone_number,
    email: email,
  };
  const education = {
    school: 'Federal University of Technology, Minna',
    concentration: 'Applied Mathematics',
    from: '2012',
    to: '2018',
    degree: 'B Tech',
  };
  const experience = {
    position: 'Full Stack Engineer',
    company: 'Aku',
    from: '2021',
    to: 'Present',
    duration: '4mons',
  };
  return {
    userNames,
    name,
    counters,
    about,
    contact,
    education,
    experience,
    isSuccess,
  };
};

export default useGetUser;
