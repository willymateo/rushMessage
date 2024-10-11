# devfest-livetalk

DevFest LiveTalk is a real-time chat app built with Firebase Firestore, inspired for Google DevFest. It features instant message syncing across devices. This project demonstrates how to build scalable, real-time apps using Firestore’s powerful real-time listeners and cloud integration.

## Environment variables

You must have a `.env.local` file in the `root` of the proyect. The `.env.local` file must have the content of [.env.template](https://github.com/willymateo/portfolio/blob/main/.env.template)

**Note**: Ask to an admin for the value of environment variables.

## Setup

### Install dependencies

```cmd
npm install
```

### Run server

#### Production

```cmd
npm run build
npm start
```

#### Development

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
# or
bun start:dev
```

Open [http://localhost:3000](http://localhost:3000)


## Preview

### Web

![image](https://github.com/user-attachments/assets/258575ca-f52e-4355-bf64-ca98485bf0d0)


### Smarthphone

![image](https://github.com/user-attachments/assets/498aac1e-48c6-46c7-8193-3782f5056be9)
