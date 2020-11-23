import * as functions from "firebase-functions";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";
import { getProfileHandler } from "./getProfile";
import initApolloServer from "./remoteScheme";
import { loginHandler } from './login';
import { authHookHandler } from './authHook';
import { uploadPhotoHandler } from './uploadPhoto';
import { initializeApp, credential } from "firebase-admin";

const serviceAccount = require("../serviceAccountKey.json");
const { STORAGE_BACKET } = require("../config.json");

initializeApp({
  credential: credential.cert(serviceAccount),
  storageBucket: STORAGE_BACKET
});


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
