<h3 align="center"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /><span>+</span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="100" alt="React Logo" /><span>+</span><img src="https://go.dev/images/go-logo-white.svg" width="100" alt="Go Logo" /></h3>

<p align="center">This is a demonstration of my skills. You can see other projects by <a href="http://caroso.dev" target="_blank">clicking here</a>, there you'll be able to see clearly which skills was used to build each one.</p>

## Description

Challenge: To build a Google Search simulator using Nest.js on server-side, React.js on client-side and Golang app for search bot development.

### Home page
<img src="https://caroso-dev.s3.amazonaws.com/projects/bm/img1.png" alt="home"/>

### Search result
<img src="https://caroso-dev.s3.amazonaws.com/projects/bm/img2.png"/>

### Database preview
<img src="https://caroso-dev.s3.amazonaws.com/projects/bm/img3.png" style="margin-bottom: 2rem;" alt="result"/>

## Important to know!!!
MongoDB database which it's url is in environment variables should be a `Replica Set (cluster)`!

## Production
To up the application, simply choose `one` command below:

```bash
# Remember: .env.production file is obligatory!

# Windows - Powershell
$ ./up

# Ubuntu - Bash
$ sudo bash ./up.sh

# Docker command
$ docker compose up -d --build
```
And It's almost the same to down the application, simply choose `one` command below:

```bash
# Windows - Powershell
$ ./down

# Ubuntu - Bash
$ sudo bash ./down.sh

# Docker command
$ docker compose down
```

## Development
All Javascript stack in this project uses Yarn as package manager, so once in project dir you should use the commands bellow:

```bash
# Remember: .env.local file is obligatory!

# Bot - Gin (GO)
# Remember: Gin URL should be changed to "127.0.0.1:5000" to be used locally!
$ cd bot
$ go run ./bot/

# Client - Vite
$ cd client
$ yarn dev

# Server - Nest
$ cd server
$ yarn start:dev
```

## Local Production
All Javascript stack in this project uses Yarn as package manager, so once in project dir you should use the commands bellow:

```bash
# Client and Server (nested)
# Builds and starts Nest server with also built react page inside public dir
# Remember: .env.production file is obligatory!
$ cd server
$ yarn build
$ yarn start:prod

# Starts Gin server
# Remember: Gin URL should be changed to "127.0.0.1:5000" to be used locally!
$ cd ..
$ cd bot
$ go run ./bot/
```
