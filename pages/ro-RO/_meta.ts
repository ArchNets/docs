const meta = {
  index: {
    title: 'Acasă',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Documentație',
  },
  swagger: {
    type: 'page',
    title: 'Documentație API',
  },
  source: {
    title: 'Cod sursă',
    type: 'menu',
    items: {
      user: {
        title: 'Site utilizator',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Site administrare',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Server',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: 'Șablon abonament',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Demonstrație online',
    type: 'menu',
    items: {
      user: {
        title: 'Demonstrație utilizator',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Demonstrație administrare',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Jurnal de modificări',
  },
};

export default meta;
