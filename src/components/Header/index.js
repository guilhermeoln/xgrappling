import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Header() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding={isLargerThan900 ? "20px 0px" : "15px"}
      backgroundColor="#004581"
      color="white"
    >
      <Flex maxW="1400px" w="100%" justifyContent="space-between">
        <Text fontWeight="700" fontSize="30px">
          XGRAPPLING
        </Text>
      </Flex>
    </Flex>
  );
}
