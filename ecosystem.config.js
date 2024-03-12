module.exports = {
  apps: [
    {
      name: 'Ngrok-DS',
      script: 'C:\\Users\\KUBO_0212\\AppData\\Roaming\\nvm\\v16.17.1\\node_modules\\ngrok\\bin\\ngrok',
      args: 'http --domain measured-model-tiger.ngrok-free.app 5500',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
