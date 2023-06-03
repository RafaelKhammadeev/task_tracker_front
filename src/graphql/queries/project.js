import { gql } from "@apollo/client";

import projectFragments from "../fragments/projectFragments";
import taskFragments from "../fragments/taskFragments";

export default gql`
  ${projectFragments}
  ${taskFragments}
  query ($id: ID!) {
    project(id: $id) {
      ...ProjectInfo
      tasks {
        ...TaskInfo
      }
    }
  }
`;
