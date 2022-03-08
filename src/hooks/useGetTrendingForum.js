// import PoliticsImage from '../assets/demo/forum/politics.svg';
// import TechnologyImage from '../assets/demo/forum/technology.svg';
// import ReligionImage from '../assets/demo/forum/religion.svg';
// import HealthImage from '../assets/demo/forum/health.svg';
// import PropertiesImage from '../assets/demo/forum/properties.svg';

const useGetTrendingForum = () => {
  const data = [
    {
      id: 1,
      image:
          'https://freepikpsd.com/media/2019/10/public-speaker-icon-png-4-Transparent-Images.png',
      name: 'Politics',
    },
    {
      id: 2,
      image: 'https://drive.google.com/uc?id=1OnhxZGYyS61Htni66F9Tw3Ra0e7A64C0',
      name: 'Technology',
    },
    {id: 3, image: 'https://drive.google.com/uc?id=1tX3x3RcK_1McJmcHEElncevgnFRWYo6I', name: 'Religion'},
    {
      id: 4,
      image: '../../../assets/demo/forum/properties.svg',
      name: 'Properties',
    },
    {id: 5, image: '../../../assets/demo/forum/health.svg', name: 'Health'},
  ];
  return [data];
};
export default useGetTrendingForum;
