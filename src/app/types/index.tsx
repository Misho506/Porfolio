type Project = {
  name: string;
  description?: string;
  link: string;
  languages: Array<string> | [];
};

type RepositoryData = {
  name: string;
  description: string;
  link: string;
  languages: Array<string> | [];
}

export type {
  Project,
  RepositoryData
}