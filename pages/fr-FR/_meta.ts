const meta = {
  index: {
    title: 'Accueil',
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
    title: 'Documentation API',
  },
  source: {
    title: 'Code source',
    type: 'menu',
    items: {
      user: {
        title: 'Site utilisateur',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Site administration',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Serveur',
        href: 'https://github.com/ArchNets/server',
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: "Modèle d'abonnement",
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Démonstration en ligne',
    type: 'menu',
    items: {
      user: {
        title: 'Démonstration utilisateur',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Démonstration administration',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Journal des modifications',
  },
};

export default meta;
