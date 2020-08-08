import { createMock } from "ts-auto-mock";
import { FirebaseGuildVersionEnum } from "../enums/firebase-guild-version.enum";
import { IFirebaseGuildV1 } from "../interfaces/firebase-guild-v1";
import { IFirebaseGuildV2 } from "../interfaces/firebase-guild-v2";
import { IFirebaseGuild } from "../types/firebase-guild";
import { logFirebaseGuildVersion } from "./log-firebase-guild-version";

describe(`logFirebaseGuildVersion()`, (): void => {
  let firebaseGuild: IFirebaseGuild;

  let consoleLogSpy: jest.SpyInstance;

  beforeEach((): void => {
    consoleLogSpy = jest.spyOn(console, `log`).mockImplementation();
  });

  describe(`when the given Firebase guild is a v1`, (): void => {
    beforeEach((): void => {
      firebaseGuild = createMock<IFirebaseGuildV1>({
        version: FirebaseGuildVersionEnum.V1,
      });
    });

    it(`should log that the Firebase guild is on version 1`, (): void => {
      expect.assertions(2);

      logFirebaseGuildVersion(firebaseGuild);

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Firebase guild version is: 1`
      );
    });
  });

  describe(`when the given Firebase guild is a v2`, (): void => {
    beforeEach((): void => {
      firebaseGuild = createMock<IFirebaseGuildV2>({
        version: FirebaseGuildVersionEnum.V2,
      });
    });

    it(`should log that the Firebase guild is on version 2`, (): void => {
      expect.assertions(2);

      logFirebaseGuildVersion(firebaseGuild);

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Firebase guild version is: 2`
      );
    });
  });
});
