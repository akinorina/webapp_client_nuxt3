module.exports = {
  apps: [
    {
      name: 'webapp_client_nuxt3',
      port: 4000,
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production',
        NITRO_PORT: 4000,
      },
      env_development: {
        NODE_ENV: 'development',
        NITRO_PORT: 4000,
      },
    }
  ]
}
