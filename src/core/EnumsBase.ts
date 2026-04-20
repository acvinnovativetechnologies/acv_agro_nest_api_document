export enum PAGING {
  Yes = 'Yes',
  No = 'No',
}

export enum LoadParents {
  Yes = 'Yes',
  No = 'No',
  Custom = 'Custom',
}

export enum LoadChild {
  No = 'No',
  Yes = 'Yes',
  Count = 'Count',
  Custom = 'Custom',
  Direct = 'Direct',
}

export enum LoadChildCount {
  No = 'No',
  Yes = 'Yes',
  Custom = 'Custom',
}

export enum OrderBy {
  asc = 'asc',
  desc = 'desc',
}

export enum AdminRole {
  MasterAdmin = 'MasterAdmin',
  Admin = 'Admin',
}

export enum LoginFrom {
  Web = 'Web',
  Android = 'Android',
  IPhone = 'IPhone',
  AndroidPWA = 'AndroidPWA',
  iOSPWA = 'iOSPWA',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum FileType {
  NoFile = 'NoFile',
  Image = 'Image',
  Video = 'Video',
  PDF = 'PDF',
  Excel = 'Excel',
}

export enum YesNo {
  Yes = 'Yes',
  No = 'No',
}

// Cronjobs
export enum ExecutionStatus {
  REGISTERED = 'REGISTERED',
  FIRED = 'FIRED',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum RunType {
  SCHEDULED = 'SCHEDULED',
  MANUAL = 'MANUAL',
}

// EXTERNAL APIS
export enum APIAuthType {
  API_KEY = 'API_KEY',
  BASIC_AUTH = 'BASIC_AUTH',
}
