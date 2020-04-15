/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
  }
}
`;
export const onCreateTest = `subscription OnCreateTest($id: ID, $title: String) {
  onCreateTest(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onUpdateTest = `subscription OnUpdateTest($id: ID, $title: String) {
  onUpdateTest(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onDeleteTest = `subscription OnDeleteTest($id: ID, $title: String) {
  onDeleteTest(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onCreateCoffee = `subscription OnCreateCoffee($id: ID, $title: String) {
  onCreateCoffee(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onUpdateCoffee = `subscription OnUpdateCoffee($id: ID, $title: String) {
  onUpdateCoffee(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onDeleteCoffee = `subscription OnDeleteCoffee($id: ID, $title: String) {
  onDeleteCoffee(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onCreateExperience = `subscription OnCreateExperience(
  $id: ID
  $title: String
  $subtitle: String
  $content: String
  $period: String
) {
  onCreateExperience(
    id: $id
    title: $title
    subtitle: $subtitle
    content: $content
    period: $period
  ) {
    id
    title
    subtitle
    content
    period
  }
}
`;
export const onUpdateExperience = `subscription OnUpdateExperience(
  $id: ID
  $title: String
  $subtitle: String
  $content: String
  $period: String
) {
  onUpdateExperience(
    id: $id
    title: $title
    subtitle: $subtitle
    content: $content
    period: $period
  ) {
    id
    title
    subtitle
    content
    period
  }
}
`;
export const onDeleteExperience = `subscription OnDeleteExperience(
  $id: ID
  $title: String
  $subtitle: String
  $content: String
  $period: String
) {
  onDeleteExperience(
    id: $id
    title: $title
    subtitle: $subtitle
    content: $content
    period: $period
  ) {
    id
    title
    subtitle
    content
    period
  }
}
`;
export const onCreatePresentation = `subscription OnCreatePresentation(
  $id: ID
  $title: String
  $content: String
  $period: AWSDateTime
) {
  onCreatePresentation(
    id: $id
    title: $title
    content: $content
    period: $period
  ) {
    id
    title
    content
    period
  }
}
`;
export const onUpdatePresentation = `subscription OnUpdatePresentation(
  $id: ID
  $title: String
  $content: String
  $period: AWSDateTime
) {
  onUpdatePresentation(
    id: $id
    title: $title
    content: $content
    period: $period
  ) {
    id
    title
    content
    period
  }
}
`;
export const onDeletePresentation = `subscription OnDeletePresentation(
  $id: ID
  $title: String
  $content: String
  $period: AWSDateTime
) {
  onDeletePresentation(
    id: $id
    title: $title
    content: $content
    period: $period
  ) {
    id
    title
    content
    period
  }
}
`;
export const onCreateFresentation = `subscription OnCreateFresentation(
  $id: ID
  $title: String
  $content: String
  $peroid: String
) {
  onCreateFresentation(
    id: $id
    title: $title
    content: $content
    peroid: $peroid
  ) {
    id
    title
    content
    peroid
  }
}
`;
export const onUpdateFresentation = `subscription OnUpdateFresentation(
  $id: ID
  $title: String
  $content: String
  $peroid: String
) {
  onUpdateFresentation(
    id: $id
    title: $title
    content: $content
    peroid: $peroid
  ) {
    id
    title
    content
    peroid
  }
}
`;
export const onDeleteFresentation = `subscription OnDeleteFresentation(
  $id: ID
  $title: String
  $content: String
  $peroid: String
) {
  onDeleteFresentation(
    id: $id
    title: $title
    content: $content
    peroid: $peroid
  ) {
    id
    title
    content
    peroid
  }
}
`;
export const onCreateWork = `subscription OnCreateWork(
  $id: ID
  $title: String
  $tech: [String]
  $content: String
  $learnt: String
) {
  onCreateWork(
    id: $id
    title: $title
    tech: $tech
    content: $content
    learnt: $learnt
  ) {
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
export const onUpdateWork = `subscription OnUpdateWork(
  $id: ID
  $title: String
  $tech: [String]
  $content: String
  $learnt: String
) {
  onUpdateWork(
    id: $id
    title: $title
    tech: $tech
    content: $content
    learnt: $learnt
  ) {
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
export const onDeleteWork = `subscription OnDeleteWork(
  $id: ID
  $title: String
  $tech: [String]
  $content: String
  $learnt: String
) {
  onDeleteWork(
    id: $id
    title: $title
    tech: $tech
    content: $content
    learnt: $learnt
  ) {
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
export const onCreateDetail = `subscription OnCreateDetail($id: ID, $title: String, $content: String) {
  onCreateDetail(id: $id, title: $title, content: $content) {
    id
    title
    content
  }
}
`;
export const onUpdateDetail = `subscription OnUpdateDetail($id: ID, $title: String, $content: String) {
  onUpdateDetail(id: $id, title: $title, content: $content) {
    id
    title
    content
  }
}
`;
export const onDeleteDetail = `subscription OnDeleteDetail($id: ID, $title: String, $content: String) {
  onDeleteDetail(id: $id, title: $title, content: $content) {
    id
    title
    content
  }
}
`;
export const onCreateProject = `subscription OnCreateProject(
  $id: ID
  $decoration: String
  $period: String
  $title: String
  $tech: [String]
) {
  onCreateProject(
    id: $id
    decoration: $decoration
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onUpdateProject = `subscription OnUpdateProject(
  $id: ID
  $decoration: String
  $period: String
  $title: String
  $tech: [String]
) {
  onUpdateProject(
    id: $id
    decoration: $decoration
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onDeleteProject = `subscription OnDeleteProject(
  $id: ID
  $decoration: String
  $period: String
  $title: String
  $tech: [String]
) {
  onDeleteProject(
    id: $id
    decoration: $decoration
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onCreateMyself = `subscription OnCreateMyself(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onCreateMyself(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onUpdateMyself = `subscription OnUpdateMyself(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onUpdateMyself(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onDeleteMyself = `subscription OnDeleteMyself(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onDeleteMyself(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onCreateArt = `subscription OnCreateArt(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onCreateArt(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onUpdateArt = `subscription OnUpdateArt(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onUpdateArt(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
export const onDeleteArt = `subscription OnDeleteArt(
  $id: ID
  $deco: String
  $period: String
  $title: String
  $tech: [String]
) {
  onDeleteArt(
    id: $id
    deco: $deco
    period: $period
    title: $title
    tech: $tech
  ) {
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
