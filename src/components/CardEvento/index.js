import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
export default function CardEvento({ nome, imagem, dataEvento, localEvento }) {
  return (
    <Flex
      flexDirection="column"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      backgroundColor="white"
      width="100%"
      height="250px"
      cursor="pointer"
    >
      <Flex
        width="100%"
        height="80%"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="30px">LOREM</Text>
      </Flex>
      <Flex width="100%" height="20%" borderTop="1px solid #ccc">
        <Flex
          width="50%"
          backgroundColor="#004581"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          <AiOutlineCalendar />
          <Text fontSize="14px" marginLeft="5px">
            {dataEvento}
          </Text>
        </Flex>
        <Flex width="50%" alignItems="center" justifyContent="center">
          <CiLocationOn />
          <Text fontSize="14px" marginLeft="5px">
            {localEvento}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
