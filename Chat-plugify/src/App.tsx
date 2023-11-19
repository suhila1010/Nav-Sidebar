import {useState} from "react";
import "./App.css";
import {ChakraProvider} from "@chakra-ui/react";
import {Flex} from "@chakra-ui/react";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
