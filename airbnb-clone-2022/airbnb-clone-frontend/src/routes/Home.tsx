import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";

import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";

import Room from "../components/Room";

export default function Home() {
  return (
    // <Grid gap={10} templateColumns={"200px 200px 200px"}>
    // <Grid gap={10} templateColumns={"repeat(5, 1fr)"}>
    // <Grid
    //   mt={10}
    //   px={40}
    //   columnGap={4}
    //   rowGap={8}
    //   templateColumns={"repeat(5, 1fr)"}
    // >
    // <Grid
    //   mt={10}
    //   px={{
    //     base: 10,
    //     lg: 40,
    //   }}
    //   columnGap={4}
    //   rowGap={8}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "repeat(5, 1fr)",
    //   }}
    // >
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        // lg: "1fr 1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      <Box>
        <Skeleton rounded={"2xl"} height={280} mb={7} />
        <SkeletonText w="50%" noOfLines={3} mb={7} />
      </Box>
    </Grid>
  );
}
