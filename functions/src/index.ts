import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;
// console.log(universal)
export const angularUniversal = functions.https.onRequest(universal);