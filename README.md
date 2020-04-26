# chat-firebase

## Features
- Auth with Google and GitHub account
- Create/Delete chat room
- Room URL share
- Text chat in room
- Save chat message to storage

## Chat Architecture
![chat-architecture-firebase](https://user-images.githubusercontent.com/24800246/80309434-fe445700-880f-11ea-85ae-b10726c8fc24.png)

## Authentication
[Firebase Authentication](https://firebase.google.com/docs/auth)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Setup for firebase-tools on functions

```console
$ firebase login:ci
$ firebase functions:config:set fb.token="YOUR_TOKEN_HERE"
```
