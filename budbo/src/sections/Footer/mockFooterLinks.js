
import facebook from '../../assets/images/facebook-icon.svg';
import instagram from '../../assets/images/instagram-icon.svg';
import twitter from '../../assets/images/twitter-icon.svg';
import youtube from '../../assets/images/youtube-icon.svg';

export const mockFooterLinks = [
    {
        title: 'About',
        links: [
            {
                name: 'Company',
                link: '/company',
            },
            {
                name: 'History',
                link: '/history',
            },
            {
                name: 'Careers',
                link: '/careers',
            },
        ],
    },
    {
        title: 'Support',
        links: [
            {
                name: 'FAQ',
                link: '/faq',
            },
            {
                name: 'Help Center',
                link: '/help-center',
            },
            {
                name: 'Support',
                link: '/support',
            }
        ]
    },
    {
        title: 'Budbo Token',
        links: [
            {
                name: 'Exchanges',
                link: '/exchanges',
            },
            {
                name: 'Coinmarketcap',
                link: 'https://coinmarketcap.com/currencies/budbo/',
            },
            {
                name: 'CoinGecko',
                link: 'https://www.coingecko.com/en/coins/budbo',
            }
        ]
    },
    {
        title: 'Dispensary Solutions',
        links: [
            {
                name: 'Add your dispensary',
                link: '/add-your-dispensary',
            },
            {
                name: 'E-commerce',
                link: '/e-commerce',
            },
            {
                name: 'Fleet Tracking',
                link: '/fleet-tracking',
            },
            {
                name: 'Blockchain',
                link: '/blockchain',
            },
        ],
    }
]

export const mockFooterSocialLinks = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/budbo/',
        icon: instagram,
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/budbo/',
        icon: facebook,
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/budbo/',
        icon: twitter,
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        icon: youtube,
    }
]
