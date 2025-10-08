import BuildHelper from "../classes/Builder/BuildHelper";

export interface ProjectConfig {
  [key: string]: string;
}

export interface DebugJSON {
  [key: string]: string
}

export interface TargetValue {
  script: string,
  outputs: Array<string>,
  input?: string,
  constantDependencies?: Array<string>,
  compareRemoteHashes?: boolean,
  requiredFiles?: Array<string>,
  additionalFiles?: Array<string>,
  afterGetHashCallback?: ((builder: BuildHelper, hash: string, project: string) => void)
}

export interface TargetObject {
  [key: string]: TargetValue
}

export interface BuildConfig {
  [key: string]: TargetObject;
}

export type PipeConfig = {
  script: string,
  config?: {
    debug?: boolean;
    compareWith?: string;
    compareHash?: boolean;
    logAffected?: boolean;
    skipDependencies?: boolean;
    debugLocation?: string;
    skipPackageJson?: boolean;
    noCache?: boolean;
    worker?: string;
  }
}

export type PipeConfigArray = Array<PipeConfig | Array<PipeConfig>>

export type ZenithConfigType = {
  pipe: PipeConfigArray,
  ignore: string[],
  appDirectories: string[]
  buildConfig: BuildConfig,
  projects: ProjectConfig,
  onFail?: (failedTarget: string, details: unknown) => void;
}