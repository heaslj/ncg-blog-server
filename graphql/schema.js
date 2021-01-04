const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type PostsData {
        posts: [Post!]!
        totalItems: Int!
    }

    type StatusData {
        status: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input PostInputData {
        title: String!
        content: String!
        imageUrl: String!
    }

    input PostsInputData {
        page: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        getPost(postId: ID!): Post!
        getPosts(postsInput: PostsInputData!): PostsData!
        getStatus: StatusData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createPost(postInput: PostInputData): Post!
        updatePost(id: ID!, postInput: PostInputData): Post!
        deletePost(id: ID!): Boolean!
        updateStatus(status: String!): StatusData!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
