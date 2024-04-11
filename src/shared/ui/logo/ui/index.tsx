import { Link } from 'react-router-dom';
import LogoSVG from '../../../assets/icons/logo.svg';
import { PATH_PAGE } from '../../../constants';

export const Logo = () => {
  return (
    <Link to={PATH_PAGE.root}>
      <img src={LogoSVG} alt='logo' width={50} />
    </Link>
  );
};
