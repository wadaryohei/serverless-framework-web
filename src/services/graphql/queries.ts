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
      username
      content
    }
  }
`;

export const listPost = /* GraphQL */ `
  query ListPost {
    listPost {
      postId
      username
      content
    }
  }
`;
