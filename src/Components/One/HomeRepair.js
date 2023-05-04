import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/One/images/carpentery.jpg";
import b from "../../Pages/One/images/carpenter.jpg";
import c from "../../Pages/One/images/electronics.jpg";
import d from "../../Pages/One/images/plumber.jpg";
import e from "../../Pages/One/images/insuranceprotection.jpg";
import f from "../../Pages/One/images/antidiscrimation.jpg";
import g from "../../Pages/One/images/skillindia.jpg";
import { Link as RouterLink } from "react-router-dom";

const HomeRepair = () => {
  return (
    <Box height="1130px">
      <h1 style={{ fontSize: "50px" }}>Home Repairs</h1>
      <Flex mt="100px" ml="150px" gap="15px">
      <RouterLink to="/services">
        <Box>
          <img
            style={{ height: "180px" }}
            width="280px"
            alt="Big Home Rush"
            src={a}
          ></img>
          <p>Furniture Making, Upholstery & Polish1</p>
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
          <p>Carpenters</p>
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
          <p>Electronics</p>
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
          <p>Plumbers</p>
        </Box>
        </RouterLink>
      </Flex>
      <img style={{marginTop:"100px"}} src={e}/>
      <img style={{marginTop:"30px"}} src={f}/>
      <img style={{marginTop:"30px"}} src={g}/>
    </Box>
  )
}

export default HomeRepair