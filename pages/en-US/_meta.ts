const meta = {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Documentation',
  },
  swagger: {
    type: 'page',
    title: 'API Documentation',
  },
  source: {
    title: 'Source Code',
    type: 'menu',
    items: {
      user: {
        title: 'User Web',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Admin Web',
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
        newWindow: true,
      },
      subscription: {
        title: 'Subscription Template',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Online Demo',
    type: 'menu',
    items: {
      user: {
        title: 'User Demo',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin Demo',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Changelog',
  },
};

export default meta;
