import admin from "firebase-admin";
import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";
import DocumentData = admin.firestore.DocumentData;

export interface IFirebaseGuildV1 extends DocumentData {
  id?: string | undefined;
  version?: FirebaseGuildVersionEnum.V1 | undefined;
}
