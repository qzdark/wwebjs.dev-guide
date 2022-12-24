import { defaultTheme } from 'vuepress'
//import { searchPlugin } from '@vuepress/plugin-search'
import { head, navbarEN, sidebarEN, navbarDE, sidebarDE } from './config/index'

export default {
    head: head,
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US',
            description: 'A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app',
        },
        '/de/': {
            lang: 'de-DE',
            description: 'Eine Bibliothek, die es ermöglicht, mit WhatsApp Web zu interagieren.',
        },
    },
    theme: defaultTheme({
        docsRepo: 'https://github.com/wwebjs/wwebjs.dev',
        docsBranch: 'main',
        docsDir: 'src',
        repo: 'https://github.com/wwebjs/wwebjs.dev',
        logo: '/assets/light/banner_green_logo.png',
        colorModeSwitch: true,
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: navbarEN,
                sidebar: sidebarEN,
            },
            '/de/': {
                selectLanguageName: 'Deutsch',
                navbar: navbarDE,
                sidebar: sidebarDE,
            },
        },
    }),
    plugins: [
/*        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/de/': {
                    placeholder: 'Suchen',
                },
            },
        }),*/
    ]//,
}