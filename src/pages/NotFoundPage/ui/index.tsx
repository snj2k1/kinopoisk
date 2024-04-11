import NotFoundImage from '../../../shared/assets/images/404.jpg';

const NotFoundPage = () => {
  return <img src={NotFoundImage} alt='404' style={{ width: '40%' }} />;
};

export default NotFoundPage;
