/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  postId?: string | null,
  content: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  postId: string,
};

export type UpdatePostInput = {
  postId: string,
  content: string,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    postId: string,
    content: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  expectedVersion?: number | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    postId: string,
    content: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    postId: string,
    content: string,
  } | null,
};

export type GetPostQueryVariables = {
  postId: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    postId: string,
    content: string,
  } | null,
};

export type ListPostQuery = {
  listPost:  Array< {
    __typename: "Post",
    postId: string,
    content: string,
  } >,
};
