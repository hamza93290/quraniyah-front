import { EnvType } from "@core/enums/env.enum";
import { version } from "./build-info";

export const environment = {
    production: true,
    envType: EnvType.PROD,
    appVersion: version,
    api: "http://localhost:8080"
};