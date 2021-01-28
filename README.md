# Hasura video course project

This is a project which we going to build during these video courses about the GraphQL engine Hasura

- See the Course [on Udemy](https://bit.ly/hasura-course)
- See the Course [on SkillShare](https://skl.sh/3fahki2)

##### Please read it before cloning the code!

Keep in mind please that you will clone the source code of the FINISHED project! **You do not need to clone it** in order to proceed with the course. Use it just as a source where you can look up the code in case some parts for whatever reason are not visible in video.

## Installation

Installation of the project happens step by step during the course. However, if you want to install and run the project immediately you need to perform next steps:

### Clone it

Just clone this repository to you local machine
`git clone https://github.com/mezhik91/hasura-course-2020.git`

### Install necessary tools:

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [NodeJS](https://nodejs.org/en/download/)

### Install Hasura CLI

- Follow [this link](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html) to install it on your OS

### Configure the Firebase project to work locally:

- Install Firebase Tools `npm install -g firebase-tools`
- Install npm dependencies: `cd functions && npm install`
- Go You need to login with your firebase tools. Just run `firebase login`.
- Create a project. Run: `firebase projects:create --display-name 'Any name you like'`. You will be asked to give some id to the project. HINT! Use some unique prefix.
- Set up project alias: `firebase use --add` and pick created project and give some aliase.
- Run command: `firebase open auth`. Click "Get started" and activate "Email/Password" provider.
- In Firebase console, go to "Storage" and click "Get Started" and follow instructions.
- In Code editor, go to folder `functions` and clone and rename `.runtimeconfig.example.json` to `runtimeconfig.json` and `serviceAccountKey.example.json` to `serviceAccountKey.json`;
- Run `firebase open settings`. Copy WEB API KEY and paste it into `.runtimeconfig.json` for key "apikey" instead "_YOUR_WEB_API_"
- On the settings page (Firebase Console), go to "Service Accounts" tab and click "Generate new private key". Open generated file, copy its content and replace content of `serviceAccountKey.json` with what you just copied.
- Go to hasura-server folder. There you have to create a file .env and copy/paste content from .env.example file.
  After this you have to replace all `_your_firebase_project_id_` with your Firebase Project ID.

## Run project

### Run Backend

- Run cloud functions locally. In folder `functions` run `npm run serve`

- Run docker containers. Open new terminal tab and in the project root folder execute:`docker-compose up` or `docker-compose up -d` if you want to run it as a daemon. (it may take up to 1-2 minutes)

- Open Hasura Console. Once your containers are up and running you can open another terminal tab and navigate to hasura-server folder and open your Hasura console: `cd hasura-server && hasura console`

### Frontend

- Open a new terminal tab and go to the folder wich application (Angular or React) `cd angular-hasura-app` or `cd react-hasura-app`
- Run `npm install`
- If you are going to run React App you have to create a `.env.local` file under react-hasura-app folder a copy content from `.env.local.example` into `.env.local`
- Run `npm run start`
- (Optional) if you plan to change .graphql files you should run `npm run generate-types` in separate terminal tab.
