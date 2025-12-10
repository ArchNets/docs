const meta = {
  index: {
    title: 'خانه',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'مستندات',
  },
  swagger: {
    type: 'page',
    title: 'مستندات API',
  },
  source: {
    title: 'کد منبع',
    type: 'menu',
    items: {
      user: {
        title: 'وب‌کاربر',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'وب‌مدیر',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'سرور',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: 'نود',
        href: 'https://github.com/wyx2685/archnet-node',
      },
      subscription: {
        title: 'الگوی اشتراک',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'نمایش آنلاین',
    type: 'menu',
    items: {
      user: {
        title: 'نمایش کاربر',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: 'نمایش مدیر',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'فهرست تغییرات',
  },
};

export default meta;
