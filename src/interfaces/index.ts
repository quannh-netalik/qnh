export interface IReferenceSites {
  linkedinRef: string;
  githubRef: string;
  skypeRef: string;
}

export interface ISelfReferences {
  gmail: string;
  phone: string;
  skype: string;
  github: string;
  linkedin: string;
  npx: string;
  portfolio: string;
}

export interface ISelfInformation {
  name: string;
  title: string;
  references: ISelfReferences;
}
