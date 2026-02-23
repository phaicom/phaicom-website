import { GetTypeByName } from "@content-collections/core";

import configuration from "../../content-collections.ts";

export type Project = GetTypeByName<typeof configuration, "projects">;
export declare const allProjects: Array<Project>;
