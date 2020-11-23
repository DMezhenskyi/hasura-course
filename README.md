# Hasura video course project

This is a project which we going to build during the video course about GraphQL engine Hasura

- See the Course [on Udemy](https://bit.ly/hasura-course)
- See the Course [on SkillShare](https://skl.sh/3fahki2)

## Instalation

Installation of the project happens step by step during the course but if you want to install and run the project immediately you need to perform next steps:

### Clone it

Just clone this repository to you local machine
`git clone https://github.com/mezhik91/hasura-course-2020.git`

### Install neccessary tools:

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [NodeJS](https://nodejs.org/en/download/)

### Install Hasura CLI

- Follow [this link](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html) to install it on your OS

### Configure the Firebase project:

- Install Firebase Tools `npm install -g firebase-tools`
- Install npm dependencies: `cd functions && npm install`
- Go You need to login with your firebase tools. Just run `firebase login`.
- Create a project. Run: `firebase projects:create --display-name hasura-course-project`. You will be asked to give some id to the project. HINT! Use some unique prefix.
- Copy Project ID of created project and replace all strings "hasura-course" in whole files with your project id. (but exclude files: package-lock.json, README.MD). HINT! You can use global search/replace in your IDE or `CMD + Shift + f` if you use VS CODE. (Should be affected files docker-compose.yaml, actions.yaml, remote_schemas.yaml, tables.yaml)
- Set up project alias: `firebase use --add` and pick created project and give some aliase.
- Run command: `firebase open auth`. Click "Get started" and activate "Email/Password" provider.
- On Firebase console go to "Storage" and click "Get Started" and follow instructions.
- In Code editor go to folder `functions` and clone and rename `config.example.json` to `config.json` and `serviceAccountKey.example.json` to `serviceAccountKey.json`;
- Run `firebase open settings` copy WEB API KEY and paste in config.json instead "YOUR_API_KEY"
- On this settings page go to "Service Accounts" tab and click "Generate new private key". Open generated file, copy its content and replace content of `serviceAccountKey.json` with what you just copied.
- Go to the Storage page and copy your path to backet and in `config.json` replace value of "STORAGE_BACKET" with yours. HINT! It starts with: `gs://`. I explained where to find it in [this lecture on Udemy](https://www.udemy.com/course/develop-graphql-backend-faster-with-hasura/learn/lecture/23283364#overview) or [this lecture on SkillShare] (https://www.skillshare.com/classes/Performant-GraphQL-Backend-just-in-few-evenings-with-Hasura-2020/26542982/projects) time code - 4:04

## Run progect

### Run Backend

- Run cloud functions locally. In folder `functions` run `npm run serve`

- Run docker containers. Open new terminal tab and in the project root folder execute:`docker-compose up` or `docker-compose up -d` if you want to run it as a daemon. (it may take up to 1-2 minutes)

- Open Hasura Console. Once your containers are up and running you can open another terminal tab and navigate to hasura-server folder and open your Hasura console: `cd hasura-server && hasura console`

### Frontend

- Open a new terminal tab and go to the folder wich application (Angular so far) `cd angular-hasura-app`
- Run `npm install`
- Run `npm run start`
- (Optional) if you plan to change .graphql files you should run `npm run generate-types` in separate terminal tab.
