const meta = {
  index: {
    title: 'Ana Sayfa',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Belgeler',
  },
  swagger: {
    type: 'page',
    title: 'API Dokümantasyonu',
  },
  source: {
    title: 'Kaynak kodu',
    type: 'menu',
    items: {
      user: {
        title: 'Kullanıcı web',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Yönetici web',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Sunucu',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: 'Abonelik şablonu',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Çevrimiçi demo',
    type: 'menu',
    items: {
      user: {
        title: 'Kullanıcı demosu',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Yönetici demosu',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Değişiklik günlüğü',
  },
};

export default meta;
