import { Box, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box>
      <HStack></HStack>
      <Outlet />
    </Box>
  );
}
