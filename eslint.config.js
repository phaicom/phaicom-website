import configs from '@phaicom/eslint-config'

export default
configs(
  {
    tailwind: true,
    formatters: true,
    ignores: ['pnpm-workspace.yaml'],
  },
)
