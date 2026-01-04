import configs from '@phaicom/eslint-config'

export default
configs(
  {
    astro: true,
    unocss: true,
    formatters: true,
    ignores: ['pnpm-workspace.yaml'],
  },
)
