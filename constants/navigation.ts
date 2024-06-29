import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { linksType } from "~/types/navigation";

type footerSocialLinksType = Omit<linksType, 'label'>;

export function useNavigationLinks() {
    const { t } = useI18n();

    const ROUTE_LINKS = computed(() => [
        {
            label: t('layout.header.home'),
            to: '/',
            icon: ''
        },
        {
            label: t('layout.header.about_us'),
            to: '/about-us',
            icon: ''
        },
        {
            label: t('layout.header.services'),
            to: '/services',
            icon: ''
        }
    ]);

    const SOCIAL_LINKS: footerSocialLinksType[] = [
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
            icon: 'mdi:twitter'
        }
    ];

    return {
        ROUTE_LINKS,
        SOCIAL_LINKS
    };
}