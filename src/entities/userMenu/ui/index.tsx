import { useContext, useState } from 'react';
import { AuthContext } from '../../../app/context';
import * as styles from './styles.module.scss';
import Arrow from '../../../shared/assets/icons/arrow-down.svg';
import { NavMenu } from '../../../widgets';

export const UserMenu = () => {
  const currentUser = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div
      className={styles.menu}
      onMouseOver={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <img
        width='50'
        height='50'
        src='https://img.icons8.com/ios-filled/50/FD7E14/user-male-circle.png'
        alt='user-male-circle'
      />
      <span>{currentUser?.email}</span>
      <img src={Arrow} alt='arrow' width={20} />
      <NavMenu isOpen={menuOpen} />
    </div>
  );
};
