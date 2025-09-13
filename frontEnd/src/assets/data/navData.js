import { TbHome } from 'react-icons/tb';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdFavoriteBorder, MdOutlineNotificationsActive } from 'react-icons/md';

export const listArray = [
    {
        to: '/',
        listItem: 'Home'
    },
    {
        to: '',
        listItem: 'Categories'
    },
    {
        to: '',
        listItem: 'Settings'
    },
    {
        to: '',
        listItem: 'Our services'
    },
    {
        to: '',
        listItem: 'Onboard your product'
    },
    {
        to: '',
        listItem: 'Contact us'
    },
];

export const bottomNavList = [
    {
        to: '',
        listItem: 'Home',
        listIcon: TbHome,
    },
    {
        to: '',
        listItem: 'Track',
        listIcon: FaExternalLinkAlt,
    },
    {
        id: 'profile',
        to: '',
        listItem: '',
    },
    {
        to: '',
        listItem: 'Favorite',
        listIcon: MdFavoriteBorder,
    },
    {
        to: '',
        listItem: 'Notification',
        listIcon: MdOutlineNotificationsActive,
    },
];