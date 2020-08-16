/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        url: "/",
        i18n: "home.title",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: null,
        icon: 'GlobeIcon',
        i18n: 'forensic_academy.title',
        submenu: [
            {
                url: '/forensic_academy/courses',
                icon: 'Link2Icon',
                slug: 'forensic_academy-courses',
                i18n: 'forensic_academy.courses.title'
            },
            {
                url: '/forensic_academy/faculty',
                icon: 'Link2Icon',
                slug: 'forensic_academy-faculty',
                i18n: 'forensic_academy.faculty.title'
            },
            {
                url: '/forensic_academy/news',
                icon: 'Link2Icon',
                slug: 'forensic_academy-news',
                i18n: 'forensic_academy.news.title'
            }
        ]
    },
    {
        header: 'MENU',
        icon: 'PackageIcon',
        i18n: "menu.title",
        items: [
            {
                url: '/my_data',
                slug: 'my_data',
                icon: 'UserIcon',
                i18n: 'my_data.title'
            },
            {
                url: null,
                icon: 'MonitorIcon',
                i18n: 'classrooms.title',
                submenu: [
                    {
                        url: '/classrooms/active',
                        icon: 'Link2Icon',
                        slug: 'classrooms-active',
                        i18n: 'classrooms.active.title'
                    },
                    {
                        url: '/classrooms/completed',
                        icon: 'Link2Icon',
                        slug: 'classrooms-completed',
                        i18n: 'classrooms.completed.title'
                    }
                ]
            },
            {
                url: '/my_certificates',
                slug: 'my_certificates',
                icon: 'AwardIcon',
                i18n: 'my_certificates.title'
            },
            {
                url: '/chat',
                slug: 'chat',
                icon: 'MessageSquareIcon',
                i18n: 'chat.title'
            },
            {
                url: '/post',
                slug: 'post',
                icon: 'MailIcon',
                i18n: 'post.title'
            },
            {
                url: '/deposition',
                slug: 'deposition',
                icon: 'MessageCircleIcon',
                i18n: 'deposition.title'
            },
            {
                url: null,
                icon: 'FileIcon',
                i18n: 'financial.title',
                submenu: [
                    {
                        url: '/financial/bill',
                        icon: 'Link2Icon',
                        slug: 'financial-bill',
                        i18n: 'financial.bill.title'
                    },
                    {
                        url: '/financial/invoice',
                        icon: 'Link2Icon',
                        slug: 'financial-invoice',
                        i18n: 'financial.invoice.title'
                    }
                ]
            },
            {
                url: null,
                icon: 'HelpCircleIcon',
                i18n: 'help.title',
                submenu: [
                    {
                        url: '/help/faq',
                        icon: 'Link2Icon',
                        slug: 'help-faq',
                        i18n: 'help.faq.title'
                    },
                    {
                        url: '/help/tutorial',
                        icon: 'Link2Icon',
                        slug: 'help-tutorial',
                        i18n: 'help.tutorial.title'
                    }
                ]
            }
        ],
    },
]
