import configs from '@phaicom/eslint-config'

export default
configs(
  {
    vue: true,
    tailwind: true,
    formatters: true,
    ignores: ['pnpm-workspace.yaml'],
  },
)
