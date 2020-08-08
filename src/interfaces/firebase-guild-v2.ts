import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";

export interface IFirebaseGuildV2 {
  id?: string | undefined;
  newPropertyOnV2?: string | undefined;
  version?: FirebaseGuildVersionEnum.V2 | undefined;
}
