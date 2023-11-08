import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack spacing={1} alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"2xl"}>
        <Image minH="280" src={imageUrl} />
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
            {name}
          </Text>
          <HStack
            _hover={{
              color: "red.100",
            }}
            spacing={1}
            alignItems={"center"}
          >
            <FaStar size={12} />
            <Text fontSize={"sm"}>{rating}</Text>
          </HStack>
        </Grid>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        {city}, {country}
      </Text>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">${price}</Text>/ night
      </Text>
    </VStack>
  );
}
