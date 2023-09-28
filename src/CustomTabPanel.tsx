import { Box, Heading, Text, Flex, Alert, AlertTitle, AlertIcon, Button } from "@chakra-ui/react";
import { AiOutlineApi } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CardProps as TabProps } from "./Card";

function CustomTabPanel ({ title, description, buttonText, alertText, alertStatus }: TabProps) {
    return (
        <>
            <Box h="100%" p={5} textAlign="left" borderTop="green">
                <Flex justifyContent="space-between" direction={{ base: "column", md: "row" }}>
                    <Heading>{title}</Heading>
                    <AiOutlineApi style={{ marginLeft: "8px" }} size={40} />
                </Flex>
                <Box h="auto" my={10} borderRadius={4} p={5} bgColor="white" borderTop="5px solid green">
                    <Text fontSize={20}>{description}</Text>
                </Box>
                    <Alert status={alertStatus}>
                        <AlertIcon />
                        <AlertTitle>{alertText}</AlertTitle>
                    </Alert>
                    <Button size="lg" my={4} colorScheme="green">{buttonText} <BsBoxArrowUpRight size={20} style={{ marginLeft: "8px" }} /></Button>
            </Box>
        </>
    )
}

export default CustomTabPanel