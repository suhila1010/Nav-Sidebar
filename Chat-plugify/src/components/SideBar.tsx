// Sidebar.js
import React from "react";
import {Box, Text, VStack, Link, Flex, Spacer} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGears,
  faWallet,
  faTable,
  faCommentDots,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      className="SideBar"
    >
      <Box p={1} m={30}>
        <Text fontSize="2xl" fontWeight="bold">
          Chat
          <Text as="span" color="tomato">
            Plugify
          </Text>
        </Text>
      </Box>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon icon={faUser} style={{marginRight: "10px"}} />
          My Profile
        </Box>
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon icon={faGears} style={{marginRight: "8px"}} />
          Setting
        </Box>
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon icon={faWallet} style={{marginRight: "10px"}} />
          Billing
        </Box>
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon icon={faTable} style={{marginRight: "10px"}} />
          Dashboard
        </Box>
      </Flex>
      <Spacer />
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        pb={"14"}
      >
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon icon={faCommentDots} style={{marginRight: "10px"}} />
          My Bots
        </Box>
        <Box
          as="a"
          fontSize="l"
          href="#"
          mb={15}
          paddingInline={8}
          paddingBlock={3}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            style={{marginRight: "10px"}}
          />
          Logout
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
