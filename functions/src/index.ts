import * as functions from "firebase-functions";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";
import { getProfileHandler } from "./getProfile";
import initApolloServer from "./remoteScheme";
import { loginHandler } from "./login";
import { authHookHandler } from "./authHook";
import { uploadPhotoHandler } from "./uploadPhoto";
import * as admin from "firebase-admin";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);

if (functions.config()?.hasura?.env === "local") {
  const serviceAccount = require("../serviceAccountKey.json");
  adminConfig.credential = admin.credential.cert(serviceAccount);
}

admin.initializeApp(adminConfig);

export const notifyAboutComment = functions.https.onRequest(
  notifyAboutCommentHandler
);
export const createUser = functions.https.onRequest(createUserHandler);
export const getProfile = functions.https.onRequest(getProfileHandler);
export const userProfile = functions.https.onRequest(
  initApolloServer.createHandler()
);
export const login = functions.https.onRequest(loginHandler);
export const authHook = functions.https.onRequest(authHookHandler);
export const uploadPhoto = functions.https.onRequest(uploadPhotoHandler);
