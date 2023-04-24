import { gql } from "@apollo/client";

import projectFragments from "../fragments/projectFragments";

export default gql`
  ${projectFragments}
  query($id: ID!) {
    project(id: $id) {
      ...ProjectInfo
      tasks {
        ...TaskInfo
      }
    }
  }
`;
