import admin from "firebase-admin";
import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";
import DocumentData = admin.firestore.DocumentData;

export interface IFirebaseGuildV2 extends DocumentData {
  id?: string | undefined;
  newPropertyOnV2?: string | undefined;
  version?: FirebaseGuildVersionEnum.V2 | undefined;
}
