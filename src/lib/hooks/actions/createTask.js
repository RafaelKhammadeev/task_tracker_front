import { useMutation } from "@apollo/client";
import createTask from "../../../graphql/mutations/createTask";
import project from "../../../graphql/queries/project";

export const useCreateTask = () => {
  const [mutation, mutationState] = useMutation(createTask, {
    refetchQueries: [{ query: project?.tasks }],
  });

  const mutate = async ({ title, description, deadlineAt }) => {
    const createTaskInput = {
      title,
      description,
      deadlineAt,
    };

    try {
      await mutation({ variables: { input: createTaskInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};
