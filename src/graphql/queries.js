/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorks = `query GetWorks {
  getWorks {
    id
    title
    content
  }
}
`;
export const getWork = `query GetWork($id: ID!) {
  getWork(id: $id) {
    id
    title
    content
  }
}
`;
export const listWorks = `query ListWorks(
  $filter: TableWorkFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
    }
    nextToken
  }
}
`;
export const listExperiences = `query ListExperiences(
  $filter: TableExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
    }
    nextToken
  }
}
`;

export const listMadens = `query listMadens(
  $filter: TableMadenFilterInput
  $limit: Int
  $nextToken: String
) {
  listMadens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      git_url
      period
      tech
      title
      content
    }
    nextToken
  }
}
`;

export const createWork = `mutation createWorkSingle($var : CreateWorkInput!){
  createWork(input : $var){
    id
  }
}`;

export const listLanguages = `query listLanguages(
  $filter: TableLanguageFilterInput
  $limit: Int
  $nextToken: String
) {
  listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      title
    }
    nextToken
  }
}
`;
