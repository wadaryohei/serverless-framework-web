export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      postId
      username
      content
    }
  }
`;

export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $expectedVersion: Int) {
    deletePost(input: $input, expectedVersion: $expectedVersion) {
      postId
      username
      content
    }
  }
`;

export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      postId
      username
      content
    }
  }
`;
