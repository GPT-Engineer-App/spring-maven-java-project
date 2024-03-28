import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Stack, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            My Portfolio
          </Heading>
        </Flex>
        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" mt={{ base: 4, md: 0 }}>
          <Button variant="link" mr={6}>
            About
          </Button>
          <Button variant="link" mr={6}>
            Projects
          </Button>
          <Button variant="link">Contact</Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="nowrap" px={8} py={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" textAlign={["center", "center", "left", "left"]}>
            Hi, I'm John Doe
          </Heading>
          <Heading as="h2" size="md" opacity="0.8" fontWeight="normal" textAlign={["center", "center", "left", "left"]}>
            Full Stack Developer
          </Heading>
          <Text fontSize="sm" mt={2} textAlign={["center", "center", "left", "left"]}>
            I'm a software engineer specializing in building web applications. Currently, I'm focused on building accessible, human-centered products.
          </Text>
          <Button colorScheme="blue" borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
            View Projects
          </Button>
          <Flex mt={8} align="center" justify="center">
            <a href="https://github.com/johndoe" target="_blank">
              <FaGithub size="28px" mr={4} />
            </a>
            <a href="https://www.linkedin.com/in/johndoe/" target="_blank">
              <FaLinkedin size="28px" mr={4} />
            </a>
            <a href="mailto:john@example.com">
              <FaEnvelope size="28px" />
            </a>
          </Flex>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTU2MDU1OHww&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      {/* Projects */}
      <Box p={8}>
        <Heading size="xl" mb={8} textAlign="center">
          Projects
        </Heading>
        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
          <GridItem>
            <Box borderWidth={1} borderRadius={8} p={4}>
              <Heading size="md" mb={2}>
                Project 1
              </Heading>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius={8} p={4}>
              <Heading size="md" mb={2}>
                Project 2
              </Heading>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box textAlign="center" p={4} bg="gray.100">
        <Text>&copy; 2023 John Doe. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
