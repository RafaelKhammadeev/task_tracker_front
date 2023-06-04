import { gql } from "@apollo/client";
import taskFragment from "../fragments/taskFragment";

export default gql`
  ${taskFragment}
  mutation CreateTask{$input: CreateTaskInput!) {
    createTask(input: $input) {
    errors {
      message
      path
    }
    task {
      ...TaskInfo
    }
  }
}
`;
