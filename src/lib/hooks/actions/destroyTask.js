import { useContext } from "react";
import { useMutation } from "@apollo/client";
import NotifierContext from "src/context/NotifierContext";
import project from "../../../graphql/queries/project";
import destroyTask from "../../../graphql/mutations/destroyTask";

export const useDestroyTask = ({ onSubmit }) => {
  const { setMessage } = useContext(NotifierContext);

  const [mutation, mutationState] = useMutation(destroyTask, {
    refetchQueries: [{ query: project?.tasks }],
    onCompleted: (data) => {
      onSubmit();
      setMessage(`Проект ${data?.destroyTask?.task?.title} успешно удален`);
    },
  });

  const mutate = async ({ id }) => {
    const destroyTaskInput = {
      id,
    };

    try {
      await mutation({ variables: { input: destroyTaskInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState];
};
