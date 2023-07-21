import { Box, CircularProgress,Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(1)"}>
      <CircularProgress value={100} size="100px" color="green.400" /> 
      </Box>
    </VStack>
  );
};

export default Loader;