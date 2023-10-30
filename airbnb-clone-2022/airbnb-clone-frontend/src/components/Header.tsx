import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSingUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  return (
    <HStack
      justifyContent={"space-between"}
      py={5}
      px={10}
      borderBottomWidth={1}
    >
      <Box color={"red.500"}>
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={"2"}>
        <IconButton
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}>Sign in</Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          Sign up
        </Button>
      </HStack>
      <LoginModal onClose={onLoginClose} isOpen={isLoginOpen} />
      <SignUpModal onClose={onSingUpClose} isOpen={isSignUpOpen} />
    </HStack>
  );
}
