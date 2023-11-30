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
  VStack,
} from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ onClose, isOpen }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      // onChangeUsername(event.currentTarget.value);
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setEmailError("please write a valid email");
    }
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={onSubmit as any}>
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
                required
                name="username"
                onChange={onChange}
                value={username}
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
                name="password"
                type="password"
                onChange={onChange}
                value={password}
                variant={"filled"}
                placeholder="Password"
              />
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
