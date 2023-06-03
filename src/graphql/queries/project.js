import { gql } from "@apollo/client";

import projectFragments from "../fragments/projectFragment";
import taskFragments from "../fragments/taskFragment";

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
