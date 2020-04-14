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
