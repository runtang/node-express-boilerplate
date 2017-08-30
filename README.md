# node-express-boilerplate
Node.js express boilerplate

## Features
- watch & debug
  - npm run watch, open http://localhose:3579 to dev
  - in another terminal, npm run debug to debug using chrome devtools
- log
  - /log to record anything as you like
  - /accesslog to record http access logs
- mvc 
  - /routes as controller, /models as model, /views as view
- config
  - use .env to config envionment variables
  - /common/config to use different config associate with NODE_ENV
- nohup
  - use pm2 to run a nohup server, check the command in package.json

## Todo
- es6 version
- test
- ...
