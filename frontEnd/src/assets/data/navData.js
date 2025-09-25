import { TbHome } from 'react-icons/tb';
import { FaExternalLinkAlt, FaCartArrowDown } from 'react-icons/fa';
import { MdFavoriteBorder, MdOutlineNotificationsActive } from 'react-icons/md';
import { MdOutlineIosShare } from 'react-icons/md';

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
        to: '/',
        listItem: 'Home',
        listIcon: TbHome,
    },
    {
        to: '/tracking',
        listItem: 'Track',
        listIcon: MdOutlineIosShare,
    },
    {
        id: 'cart',
        to: '',
        listItem: '',
        // listIcon: FaCartArrowDown,
    },
    {
        to: 'favorite',
        listItem: 'Favorite',
        listIcon: MdFavoriteBorder,
    },
    {
        to: '/notifications',
        listItem: 'Notification',
        listIcon: MdOutlineNotificationsActive,
    },
];