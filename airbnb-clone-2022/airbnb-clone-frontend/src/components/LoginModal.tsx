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
} from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  } = useForm<iForm>();
  const onSubmit = (data: iForm) => {};
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
          <Button type="submit" mt={4} colorScheme="red" w="100%">
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
