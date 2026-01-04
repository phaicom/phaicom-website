import configs from '@phaicom/eslint-config'

export default
configs(
  {
    unocss: true,
    formatters: true,
    ignores: ['pnpm-workspace.yaml'],
  },
)
