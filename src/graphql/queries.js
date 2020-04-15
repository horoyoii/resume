/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
export const getTest = `query GetTest($id: ID!) {
  getTest(id: $id) {
    id
    title
  }
}
`;
export const listTests = `query ListTests(
  $filter: TableTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const getCoffee = `query GetCoffee($id: ID!) {
  getCoffee(id: $id) {
    id
    title
  }
}
`;
export const listCoffees = `query ListCoffees(
  $filter: TableCoffeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoffees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const getExperience = `query GetExperience($id: ID!) {
  getExperience(id: $id) {
    id
    title
    subtitle
    content
    period
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
      subtitle
      content
      period
    }
    nextToken
  }
}
`;
export const getPresentation = `query GetPresentation($id: ID!, $period: AWSDateTime!) {
  getPresentation(id: $id, period: $period) {
    id
    title
    content
    period
  }
}
`;
export const listPresentations = `query ListPresentations(
  $filter: TablePresentationFilterInput
  $limit: Int
  $nextToken: String
) {
  listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      period
    }
    nextToken
  }
}
`;
export const getFresentation = `query GetFresentation($id: ID!) {
  getFresentation(id: $id) {
    id
    title
    content
    peroid
  }
}
`;
export const listFresentations = `query ListFresentations(
  $filter: TableFresentationFilterInput
  $limit: Int
  $nextToken: String
) {
  listFresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      peroid
    }
    nextToken
  }
}
`;
export const getWork = `query GetWork($id: ID!) {
  getWork(id: $id) {
    id
    title
    tech
    content
    learnt
    git_url
    period
    detail_url
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
      tech
      content
      learnt
      git_url
      period
      detail_url
    }
    nextToken
  }
}
`;
export const getDetail = `query GetDetail($id: ID!) {
  getDetail(id: $id) {
    id
    title
    content
  }
}
`;
export const listDetails = `query ListDetails(
  $filter: TableDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    decoration
    period
    title
    tech
    introduction
    content {
      id
      title
      content
    }
    git_url
    detail_url
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: TableProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      decoration
      period
      title
      tech
      introduction
      content {
        id
        title
        content
      }
      git_url
      detail_url
    }
    nextToken
  }
}
`;
export const getMyself = `query GetMyself($id: ID!) {
  getMyself(id: $id) {
    id
    deco
    period
    title
    tech
    introduction
    content
    git_url
    detail_url
  }
}
`;
export const listOurselves = `query ListOurselves(
  $filter: TableMyselfFilterInput
  $limit: Int
  $nextToken: String
) {
  listOurselves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      deco
      period
      title
      tech
      introduction
      content
      git_url
      detail_url
    }
    nextToken
  }
}
`;
export const getArt = `query GetArt($id: ID!) {
  getArt(id: $id) {
    id
    deco
    period
    title
    tech
    introduction
    subtitle
    content
    git_url
    detail_url
  }
}
`;
export const listArts = `query ListArts($filter: TableArtFilterInput, $limit: Int, $nextToken: String) {
  listArts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      deco
      period
      title
      tech
      introduction
      subtitle
      content
      git_url
      detail_url
    }
    nextToken
  }
}
`;
