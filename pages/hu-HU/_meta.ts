const meta = {
  index: {
    title: 'Kezdőlap',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumentáció',
  },
  swagger: {
    type: 'page',
    title: 'API dokumentáció',
  },
  source: {
    title: 'Forráskód',
    type: 'menu',
    items: {
      user: {
        title: 'Felhasználói web',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Admin web',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Szerver',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: 'Előfizetés sablon',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Online demó',
    type: 'menu',
    items: {
      user: {
        title: 'Felhasználói demó',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin demó',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Változások',
  },
};

export default meta;
