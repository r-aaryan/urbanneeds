import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/One/images/chimney.jpg";
import b from "../../Pages/One/images/cleaningsupp.jpeg";
import c from "../../Pages/One/images/airpurifier.jpg";
import d from "../../Pages/One/images/gardening.jpg";
import { Link as RouterLink } from "react-router-dom";

const Appliances = () => {
  return (
    <Box height="500px">
      <h1 style={{ fontSize: "50px" }}>Appliances</h1>
      <Flex mt="100px" ml="150px" gap="15px">
      <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px" }}
            width="280px"
            alt="Big Home Rush"
            src={a}
          ></img>
          <p>Chimneys</p>
          {/* <p>Advanced Skin Treatments</p> */}
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={b}
          ></img>
          <p>Household Supplies</p>
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={c}
          ></img>
          <p>Air Purifier</p>
            
        </Box>
        </RouterLink>
        <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px"}}
            width="280px"
            alt="Big Home Rush"
            src={d}
          ></img>
          <p style={{textAlign:"center"}}>Gardening essentials</p>
        </Box>
        </RouterLink>
      </Flex>
    </Box>
  )
}

export default Appliances