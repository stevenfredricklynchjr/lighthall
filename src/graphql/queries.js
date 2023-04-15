/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const clickCount = /* GraphQL */ `
  query ClickCount {
    clickCount {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const getClickCount = /* GraphQL */ `
  query GetClickCount($id: ID!) {
    getClickCount(id: $id) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const listClickCounts = /* GraphQL */ `
  query ListClickCounts(
    $filter: ModelClickCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClickCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
