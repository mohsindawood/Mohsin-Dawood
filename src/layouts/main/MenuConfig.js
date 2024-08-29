import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import roundGrain from '@iconify/icons-ic/round-grain';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: (
      <Icon
        icon={homeFill}
        {...ICON_SIZE}
      />
    ),
    path: '/',
  },
  {
    title: 'About',
    icon: (
      <Icon
        icon={homeFill}
        {...ICON_SIZE}
      />
    ),
    path: 'Projects',
  },
  {
    title: 'Projects',
    icon: (
      <Icon
        icon={homeFill}
        {...ICON_SIZE}
      />
    ),
    path: '/',
  },
  {
    title: 'Technologies',
    icon: (
      <Icon
        icon={homeFill}
        {...ICON_SIZE}
      />
    ),
    path: '/',
  },
  {
    title: 'Services',
    icon: (
      <Icon
        icon={roundGrain}
        {...ICON_SIZE}
      />
    ),
    path: '#',
  },
  {
    title: 'Testimonial',
    icon: (
      <Icon
        icon={roundGrain}
        {...ICON_SIZE}
      />
    ),
    path: '#',
  },
];

export default menuConfig;
