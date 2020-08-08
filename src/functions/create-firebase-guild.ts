import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";
import { IFirebaseGuild } from "../interfaces/firebase-guild-v1";

export function createFirebaseGuild(): IFirebaseGuild {
  return {
    id: `dummy-id`,
    version: FirebaseGuildVersionEnum.V1,
  };
}
