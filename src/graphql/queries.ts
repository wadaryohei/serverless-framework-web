/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      postId
      content
    }
  }
`;
export const listPost = /* GraphQL */ `
  query ListPost {
    listPost {
      postId
      content
    }
  }
`;
