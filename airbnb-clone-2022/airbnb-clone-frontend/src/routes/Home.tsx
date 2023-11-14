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
import RoomSkeleton from "../components/RoomSkeleton";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import { Link } from "react-router-dom";
import { IRoomList } from "../types";

export default function Home() {
  const { isLoading, data } = useQuery<IRoomList[]>(["rooms"], getRooms);
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
        {/* <Skeleton rounded={"2xl"} height={280} mb={7} />
          <SkeletonText w="50%" noOfLines={3} mb={7} /> */}
        {isLoading ? (
          <>
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
          </>
        ) : null}
        {data?.map((room) => (
          <Room
            key={room.pk}
            pk={room.pk}
            imageUrl={
              room.photos[0].file
              // Not Found 또는 file 어쩌고 런타임 에러 뜨는 분들은
              // http://127.0.0.1:8000/admin 에서 로그인, photos -> photo 추가
              // 누른다음 File 에 airbnb 이미지 주소넣고 잊지말고!! Room 선택!!
            }
            name={room.name}
            rating={room.rating}
            city={room.city}
            country={room.country}
            price={room.price}
          />
        ))}
      </Box>
    </Grid>
  );
}
