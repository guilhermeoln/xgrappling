import { Flex, Text, Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import eventos from "@/mocks/eventos";
import CardEvento from "@/components/CardEvento";

import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Flex
      width="100%"
      justifyContent="center"
      py="80px"
      backgroundColor="#f8f9fa"
    >
      <Flex
        maxW="1400px"
        w="100%"
        flexDirection="column"
        alignItems="center"
        padding={isLargerThan900 ? "0px" : "15px"}
      >
        <Text fontSize="28px" color="#004581">
          Próximos Eventos
        </Text>
        <Grid
          templateColumns={
            isLargerThan900 ? "repeat(4, 1fr)" : "repeat(1, 1fr)"
          }
          gap={6}
          w="100%"
          marginTop="50px"
        >
          {eventos.map((evento, index) => (
            <CardEvento key={index} {...evento} />
          ))}
        </Grid>
        <Button
          marginTop="60px"
          backgroundColor="#004581"
          color="white"
          fontWeight="400"
        >
          VER MAIS
        </Button>
      </Flex>
    </Flex>
  );
}
