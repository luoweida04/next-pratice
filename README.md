This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
本地开发
```bash
pnpm run dev
```

可视化测试storybook
```bash
pnpm storybook
```

## 目录结构
my-next-app/
├── src/
│   └── app/
│       ├── layout.tsx         # 自动生成的layout文件
│       └── not-found.tsx      # 自定义 404 页面
|       components             # 组件
│       └── _app.tsx           # 拓展layout自定义app
│       └── [page].tsx         # 动态路由页面


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
