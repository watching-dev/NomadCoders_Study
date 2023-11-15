import {
  Box,
  Button,
  HStack,
  Stack,
  IconButton,
  LightMode,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { Link } from "react-router-dom";
import useUser from "../lib/useUser";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
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

  const { colorMode, toggleColorMode } = useColorMode();

  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      justifyContent={"space-between"}
      py={5}
      px={40}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={"2"}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          //   icon={<Icon />}
        />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Sign in</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            <Avatar name={user?.name} src={user?.avatar} size={"md"} />
          )
        ) : null}
      </HStack>
      <LoginModal onClose={onLoginClose} isOpen={isLoginOpen} />
      <SignUpModal onClose={onSingUpClose} isOpen={isSignUpOpen} />
    </Stack>
  );
}
