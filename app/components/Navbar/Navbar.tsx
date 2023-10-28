import { useState } from 'react';
import { NavLink, useMatch } from '@remix-run/react';
import { Flex } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';

import classes from './Navbar.module.css';

const menuItems = [
  {
    label: 'Dashboard',
    link: '/admin/dashboard',
    icon: IconBellRinging,
  },
  {
    label: 'Products',
    link: '/admin/products',
    icon: IconSwitchHorizontal,
  },
  {
    label: 'Contacts',
    link: '/admin/contacts',
    icon: Icon2fa,
  },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
];

export default function Navbar() {
  const match = useMatch('/admin/:page');
  const [active, setActive] = useState(match?.pathname || '');

  console.log(active);

  const links = menuItems.map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.link === active || undefined}
      to={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <Flex className={classes.navbarWrapper}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>
        <div className={classes.footer}>
          <NavLink
            className={classes.link}
            data-active={'/admin/settings' === active || undefined}
            to="/admin/settings"
          >
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            <span>Settings</span>
          </NavLink>

          <NavLink to="/" className={classes.link}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </Flex>
  );
}
