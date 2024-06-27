import type {linksType} from "~/types/navigation";

type footerSocialLinksType = Omit<linksType, 'label'>

export const ROUTE_LINKS : linksType[] = [
    {
        label: 'Home',
        to: '/',
        icon: ''
    },
    {
        label: 'About us',
        to: '/about-us',
        icon: ''
    },
    {
        label: 'Services',
        to: '/services',
        icon:''
    }
]

export const SOCIAL_LINKS : footerSocialLinksType[] = [
    {
        to: 'https://www.instagram.com/',
        icon: 'mdi:instagram'
    },
    {
        to: 'https://telegram.org/',
        icon: 'mdi:telegram'
    },
    {
        to: 'https://x.com/',
        icon:'mdi:twitter'
    }
]