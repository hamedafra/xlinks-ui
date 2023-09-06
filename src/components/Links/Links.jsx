import { Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";

function Links() {
  return (
    <>
      <Flex gap={5} mt={10}>
        <Stack bg={"red"} p={3} rounded={"2xl"}>
          <FaYoutube color="white" fontSize={35} />
        </Stack>
        <Stack bg={"red"} p={3} rounded={"2xl"}>
          <Image src={torrent} alt={torrent} />
        </Stack>
        <Stack bg={"red"} p={3} rounded={"2xl"}>
          <FaYoutube color="white" fontSize={35} />
        </Stack>
      </Flex>
    </>
  );
}

export default Links;
