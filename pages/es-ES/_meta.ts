const meta = {
  index: {
    title: 'Inicio',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Documentación',
  },
  swagger: {
    type: 'page',
    title: 'Documentación de la API',
  },
  source: {
    title: 'Código fuente',
    type: 'menu',
    items: {
      user: {
        title: 'Cliente',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Administrador',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Servidor',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'Nodo',
        href: 'https://github.com/wyx2685/archnet-node',
        newWindow: true,
      },
      subscription: {
        title: 'Plantilla de suscripción',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Demostración en línea',
    type: 'menu',
    items: {
      user: {
        title: 'Demostración de cliente',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'Demostración de administrador',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Registro de cambios',
  },
};

export default meta;
