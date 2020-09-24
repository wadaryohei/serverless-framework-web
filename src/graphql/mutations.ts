/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      postId
      content
      userId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $expectedVersion: Int) {
    deletePost(input: $input, expectedVersion: $expectedVersion) {
      postId
      content
      userId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      postId
      content
      userId
    }
  }
`;
