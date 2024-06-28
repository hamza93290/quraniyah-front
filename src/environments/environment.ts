import { EnvType } from "@core/enums/env.enum";
import { version } from "./build-info";

export const environment = {
    production: false,
    envType: EnvType.LOCAL,
    appVersion: version,
    api: "http://localhost:8080"
};
