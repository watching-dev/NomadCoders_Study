import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";

import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

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
      {[
        1, 2, 3, 4, 5, 6, 123, 32, 4, 42, 4, 12, 5, 6, 23, 7, 4, 5, 67, 2, 6, 2,
        4, 56, 2, 4, 5, 5,
      ].map((index) => (
        <VStack key={index} spacing={1} alignItems={"flex-start"}>
          <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"2xl"}>
            <Image
              minH="280"
              src="https://a0.muscache.com/im/pictures/e2bcb474-9938-47b0-a417-c4a02fd0532a.jpg?im_w=720"
            />
            {/* <Box
            cursor={"pointer"}
            position={"absolute"}
            top={5}
            right={5}
            color={"white"}
          > */}
            <Button
              variant={"unstyled"}
              position={"absolute"}
              top={0}
              right={0}
              color={"white"}
            >
              {/* <FaHeart size={"20px"} /> */}
              <FaRegHeart size={"20px"} />
            </Button>
          </Box>
          <Box>
            <Grid gap={2} templateColumns={"6fr 1fr"}>
              {/* <Heading noOfLines={1} fontSize={"md"}>
              [RIWON 3F] 루프탑 바베큐가 가능한 신축의 한국식 퓨전 하우스
              (녹사평역 도보7분)
            </Heading> */}
              <Text display={"block"} as="b" noOfLines={1} fontSize={"md"}>
                [RIWON 3F] 루프탑 바베큐가 가능한 신축의 한국식 퓨전 하우스
                (녹사평역 도보7분)
              </Text>
              <HStack spacing={1}>
                <FaStar size={15} />
                <Text>5.0</Text>
              </HStack>
            </Grid>
          </Box>
          <Text fontSize={"sm"} color={"gray.600"}>
            Seoul, S. korea
          </Text>
          <Text fontSize={"sm"} color={"gray.600"}>
            <Text as="b">$72</Text>/ night
          </Text>
        </VStack>
      ))}
    </Grid>
  );
}
