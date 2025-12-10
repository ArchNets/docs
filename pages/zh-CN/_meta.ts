const meta = {
  index: {
    title: '首页',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: '文档',
  },
  swagger: {
    type: 'page',
    title: '接口文档',
  },
  source: {
    title: '源代码',
    type: 'menu',
    items: {
      user: {
        title: '用户端',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: '管理端',
        href: 'https://github.com/ArchNets/archnet-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: '服务端',
        href: 'https://github.com/ArchNets/server',
        newWindow: true,
      },
      node: {
        title: '节点端',
        href: 'https://github.com/wyx2685/archnet-node',
        newWindow: true,
      },
      subscription: {
        title: '订阅模板',
        href: 'https://github.com/ArchNets/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: '在线演示',
    type: 'menu',
    items: {
      user: {
        title: '用户端',
        href: 'https://user.archnet.dev',
        newWindow: true,
      },
      admin: {
        title: '管理端',
        href: 'https://admin.archnet.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: '更新日志',
  },
};

export default meta;
