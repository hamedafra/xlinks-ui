import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { FcAnswers, FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { color } from "framer-motion";
import { FiDownloadCloud, FiEdit, FiEdit3 } from "react-icons/fi";
const Feature = ({ title, text, icon }) => {
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      p={10}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"red"}
        rounded={"full"}
        bgColor={"blackAlpha.900"}
        mb={2}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={"white"} fontSize={22} mb={1}>
        {title}
      </Text>
      <Text color={"white"} textAlign={"center"} fontSize={17}>
        {text}
      </Text>
    </Flex>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} pt={10} bg={"blackAlpha.800"}>
      <Container maxW="container.xl" overflow="hidden">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FiEdit3} w={10} h={10} />}
            title={"وارد کردن لینک"}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            }
          />
          <Feature
            icon={<Icon as={FiDownloadCloud} w={10} h={10} />}
            title={"منتظر بمانید .."}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            }
          />
          <Feature
            icon={<Icon as={FiDownloadCloud} w={10} h={10} />}
            title={"لینک خود را دانلود کنید "}
            text={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            }
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
