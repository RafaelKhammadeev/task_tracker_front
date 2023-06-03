import { gql } from "@apollo/client";

import projectFragments from "../fragments/projectFragment";

export default gql`
  ${projectFragments}
  query {
    projects {
      ...ProjectInfo
    }
  }
`;
