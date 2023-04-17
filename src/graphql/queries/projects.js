import { gql } from "@apollo/client";

import projectFragments from "../fragments/projectFragments";

export default gql`
  ${projectFragments}
  query {
    projects {
      ...ProjectInfo
    }
  }
`;
