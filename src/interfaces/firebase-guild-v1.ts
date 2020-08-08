import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";

export interface IFirebaseGuildV1 {
  id?: string | undefined;
  version?: FirebaseGuildVersionEnum.V1 | undefined;
}
