import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  color,
  useToast,
} from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IUsernameLoginError,
  IUsernameLoginSuccess,
  IUsernameLoginVariables,
  usernameLogIn,
} from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface iForm {
  username: string;
  password: string;
}

export default function LoginModal({ onClose, isOpen }: LoginModalProps) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iForm>();
  const toast = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    IUsernameLoginSuccess,
    IUsernameLoginError,
    IUsernameLoginVariables
  >(usernameLogIn, {
    onMutate: () => {},

    onSuccess: (data) => {
      // data.ok;
      toast({
        title: "Welcome back!",
        status: "success",
      });
      onClose();
      queryClient.refetchQueries(["me"]);
      reset();
    },
  });
  const onSubmit = ({ username, password }: iForm) => {
    mutation.mutate({ username, password });
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaUserNinja />
                  </Box>
                }
              />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                {...register("username", {
                  required: "Please write a username",
                })}
                variant={"filled"}
                placeholder="Username"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input
                required
                {...register("password", {
                  required: true,
                })}
                type="password"
                variant={"filled"}
                placeholder="Password"
              />
              <Text fontSize={"small"} color={"red.500"}>
                {errors.password?.message}
              </Text>
            </InputGroup>
          </VStack>
          {mutation.isError ? (
            <Text color={"red.500"} textAlign={"center"} fontSize={"sm"}>
              Username or Password are wrong{" "}
            </Text>
          ) : null}
          <Button
            isLoading={mutation.isLoading}
            type="submit"
            mt={4}
            colorScheme="red"
            w="100%"
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
        {/* <ModalFooter>
      <Button colorScheme="red" w="100%">
        Log in
      </Button>
    </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
