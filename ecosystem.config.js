module.exports = {
    apps: [
      {
        name: 'FUNNY_MADE_PI',
        script: 'yarn',    // 使用 yarn令
        args: 'start',     // 运行 start 脚本
        interpreter: 'none',   // 不使用解释器
        env: {
          NODE_ENV: 'production'   // 设置环境变量
        }
      }
    ]
  };
  
