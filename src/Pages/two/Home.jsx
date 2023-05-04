import React, { useState } from 'react'
import Navbar from '../../Components/two/Navbar'
import {
  Box,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import mainimg from "../../assets/homemain.jpg"
import banner from "../../assets/banner1.png"
import mobile from "../../assets/mobile.png"
import { useNavigate } from 'react-router-dom';
import { Cities } from "../../assets/Cities";
import './Home.css'
const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleChange = (value) => {
    setCity(value);
    localStorage.setItem("location", value);
    navigate(`/allservices`);
  };
  return (
    <div>
      <Box>
      <Navbar/>
      <Box  pos={"relative"}>
      <Image w={"56%"} src={mainimg} />
      <Box
          width={"100%"}
          height={"100%"}
          
          className="text"
          
          pos={"absolute"}
          right="0.5"
          top={"0.5"}
        >
         
          <Box
            
            width={"44%"}
            marginLeft={"55%"}
            h={"100%"}
          >
            <VStack gap={6}>
              <Text className="heading">URBAN COMPANY</Text>
              <Text className="subHeading">
                All your needs at one place.
              </Text>
              <br />
              <Text className="exp" w={"25rem"} textAlign={"left"}>
                Find Experienced Professionals for your everything you need.
              </Text>
              <br />
              <Box
                bg={"whiteAlpha.900"}
                borderRadius={"8"}
                padding={"3"}
                color={"blackAlpha.900"}
              >
                <Text>Where do you need a service?</Text>
                <Select
                  cursor={"pointer"}
                  placeholder="Select City"
                  value={city}
                  width={"20em"}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {Cities.map((item, index) =>
                    item.city ? (
                      <option
                        key={index}
                        style={{ cursor: "pointer" }}
                        value={item.city}
                      >
                        {item.city}
                      </option>
                    ) : (
                      <option key={index} disabled value={item.country}>
                        {item.country}
                      </option>
                    )
                  )}
                </Select>
               
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box>
      <Image  src={banner} />
      </Box>
      <Box>
      <Image  src={mobile} />
      </Box>
      </Box>
    </div>
  )
}

export default Home