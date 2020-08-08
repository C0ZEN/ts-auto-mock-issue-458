import { IFirebaseGuild } from "../types/firebase-guild";

export function logFirebaseGuildVersion(
  firebaseGuild: Readonly<IFirebaseGuild>
): void {
  console.log(`Firebase guild version is: ${firebaseGuild.version}`);
}
