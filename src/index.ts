import { createFirebaseGuild } from "./functions/create-firebase-guild";
import { logFirebaseGuildVersion } from "./functions/log-firebase-guild-version";

((): void => {
  logFirebaseGuildVersion(createFirebaseGuild());
})();
