import { useToast } from "@chakra-ui/react";

function useCustomToast() {
  const toast = useToast();

  function successToast(description) {
    toast({
      title: "Success",
      description: description,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  function errorToast(description) {
    toast({
      title: "Error",
      description: description,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  return { successToast, errorToast };
}

export default useCustomToast; 