import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
import Image from 'next/legacy/image';
import Footer from './components/footer';
const config: DocsThemeConfig = {
  i18n: [
    {
      locale: 'en-US',
      name: 'English',
      direction: 'ltr',
    },
    {
      locale: 'fa-IR',
      name: 'فارسی',
      direction: 'rtl',
    },
  ],
  project: {
    icon: (
      <Image
        src='https://raw.githubusercontent.com/ArchNets/assets/refs/heads/main/logo.svg'
        width={24}
        height={24}
        alt='logo'
      />
    ),
    link: 'https://t.me/Arch_Net',
  },
  logo: (
    <div className='flex items-center font-bold gap-2'>
      <Image
        src='https://raw.githubusercontent.com/ArchNets/assets/refs/heads/main/logo.svg'
        width={48}
        height={48}
        alt='logo'
      />
      ArchNet
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const isDefault = route === '/' || !config.title;
    const image = 'https://archnets.com/' + (isDefault ? 'og.jpeg' : `api/og?title=${config.title}`);

    const description =
      config.frontMatter.description ||
      'ArchNet is a pure, professional, and perfect open-source proxy panel tool, designed to be your ideal choice for learning and practical use.';
    const title = config.title + (route === '/' ? '' : ' - ArchNet');

    return (
      <>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        <meta name='msapplication-TileColor' content='#fff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site:domain' content='archnets.com' />
        <meta name='twitter:url' content='https://archnets.com' />
        <meta name='apple-mobile-web-app-title' content='Nextra' />
        <link rel='icon' href='favicon.ico' type='image/svg+xml' />
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/ArchNets/docs',
  editLink: {
    content: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
  footer: {
    component: <Footer />,
  },
};

export default config;
