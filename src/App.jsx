import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Box, useColorMode, Container, Flex, Heading, HStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <Box as="nav" bg={colorMode === "light" ? "brand.800" : "gray.700"} color="white" py={4}>
          <Container maxW="container.lg">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">My Blog</Heading>
              <HStack spacing={4}>
                <Link as={RouterLink} to="/" color="white">Home</Link>
                <Link as={RouterLink} to="/add-post" color="white">Add Post</Link>
                <Link href="#about" color="white">About</Link>
                <Link href="#contact" color="white">Contact</Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </HStack>
            </Flex>
          </Container>
        </Box>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;