import Navbar from "./Navbar"
import './App.css'
import { 
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { BsArrowRight } from 'react-icons/bs'
import { GrDocument } from 'react-icons/gr'
import CustomCard, { CardProps } from "./Card"
import cardData from "./CardData"
import tabData from "./tabPanelData"
import CustomTabPanel from "./CustomTabPanel"
import Footer from "./Footer"

function App() {

  return (
    <>
      <Navbar />
      <Box h="100vh" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize={{ base: 25, sm: 40, md: 50 }} fontWeight="700" color="gray.500">Build <Text as="span" color="green.500" >Lightning fast</Text> AI-based Application with speed⚡</Heading>
          <Stack direction={{ base: "column", md: "row" }} mt={10}>
            <Button size='lg' mx={3} my={{ base: 3 }} colorScheme="green">Get Started <BsArrowRight size={30} style={{ marginLeft: "8px" }} /></Button>
            <Button size='lg' mx={3} my={{ base: 3 }} variant="base">Documentation <GrDocument size={24} style={{ marginLeft: "8px" }} /></Button>
          </Stack>
      </Box>
      <Box h="auto" p={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={10} rowGap={10}>
          {cardData.map(item => <CustomCard {...item as CardProps} />)}
        </SimpleGrid>
      </Box>
      <Box h="auto" p={5}>
        <Box bgColor="gray.50" p={4} boxShadow="lg">
          <Heading color="green">Quickstart for Dummies</Heading>
        </Box>
        <Box h="80%" m={5} backgroundColor="gray.50">
          <Tabs mt={10} colorScheme="green">
            <TabList>
              <Tab>API Consumption</Tab>
              <Tab>Community</Tab>
              <Tab>Backwards Compatibility</Tab>
            </TabList>
            <TabPanels>
              {tabData.map(item => (
                <TabPanel key={item.key}>
                  <CustomTabPanel {...item} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default App
