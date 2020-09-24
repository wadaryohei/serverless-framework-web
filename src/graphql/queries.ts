/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      username
      email
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      postId
      content
      userId
    }
  }
`;
export const listPost = /* GraphQL */ `
  query ListPost {
    listPost {
      postId
      content
      userId
    }
  }
`;
