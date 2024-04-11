import { FC } from 'react';
import { MenuItem } from '../../../shared';
import { MENU_ITEMS } from '../constants';
import * as styles from './styles.module.scss';
import { INavMenu } from '../types';
import classNames from 'classnames';

export const NavMenu: FC<INavMenu> = ({ isOpen }) => {
  return (
    <nav className={classNames(styles.nav, isOpen && styles.nav_open)}>
      <ul className={styles.list}>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            path={item.path}
            handleClick={item.handleClick}
          />
        ))}
      </ul>
    </nav>
  );
};
