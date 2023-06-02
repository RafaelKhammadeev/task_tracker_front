import { gql } from "@apollo/client";

export default gql`
  fragment TaskInfo on Task {
    createdAt
    deadlineAt
    description
    id
    state
    title
    updatedAt
  }
`;
