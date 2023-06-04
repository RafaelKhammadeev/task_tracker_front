import { gql } from "@apollo/client";

import taskFragment from "../fragments/taskFragment";

export default gql`
  ${taskFragment}
  mutation DestroyTask($input: DestroyTaskInput!) {
    destroyTask(input: $input) {
      task {
        ...TaskInfo
      }
    }
  }
`;
