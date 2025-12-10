const meta = {
  index: {
    title: 'Etusivu',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumentaatio',
  },
  swagger: {
    type: 'page',
    title: 'API-dokumentaatio',
  },
  source: {
    title: 'Lähdekoodi',
    type: 'menu',
    items: {
      user: {
        title: 'Käyttäjän verkkosivu',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Hallinnon verkkosivu',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Palvelin',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: 'Tilausmalli',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Online-demo',
    type: 'menu',
    items: {
      user: {
        title: 'Käyttäjädemo',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin-demo',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Muutokset',
  },
};

export default meta;
