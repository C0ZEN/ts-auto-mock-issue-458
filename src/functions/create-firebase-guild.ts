import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";
import { IFirebaseGuildV2 } from "../interfaces/firebase-guild-v2";

export function createFirebaseGuild(): IFirebaseGuildV2 {
  return {
    id: `dummy-id`,
    newPropertyOnV2: `dummy-new-property-on-v-2`,
    version: FirebaseGuildVersionEnum.V2,
  };
}
