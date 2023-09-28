import { Box, Button, Flex, Heading, Spacer, VStack, useToast, useBreakpointValue, Divider } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

function Footer () {

    const toast = useToast();
    const isBelowMd = useBreakpointValue({ base: true, md: false })

    const showToast = () => {
        toast({
            title: "Thanks! Your response has been submitted",
            description: "Come Back soon!",
            status: "success",
            isClosable: true
        })
    }

    return (
        <>
            <Box bgColor="gray.100" p={5} textAlign="left">
                <Flex direction={{ base: "column", md: "row" }}>
                    <VStack alignItems="flex-start">
                        <Heading fontSize={30} color="green">So what are you waiting for? Get On Board!</Heading>
                        <Box mt={5} display="flex" flexDirection="column">
                            <Link fontSize={20} my={2} href="#">Sign Up</Link>
                            <Link fontSize={20} my={2} href="#">Login</Link>
                            <Link fontSize={20} my={2} href="#">Patreons</Link>
                            <Link fontSize={20} my={2} href="#">Contribute on Github</Link>
                        </Box>
                    </VStack>
                    <Spacer />
                    {isBelowMd && <Divider borderColor="gray.400" />}
                    <VStack mt={isBelowMd ? 3 : 0} alignItems={{ base: "flex-start", md: "flex-end" }}>
                        <Heading fontSize={24} color="gray.600">Leave a feedback!</Heading>
                        <VStack mt={5} alignItems={{ base: "flex-start", md: "flex-end" }}>
                            <Button onClick={showToast} colorScheme="green">Awesome!🥰</Button>
                            <Button onClick={showToast} colorScheme="blue">Good!😁</Button>
                            <Button onClick={showToast} colorScheme="yellow">Average!😄</Button>
                        </VStack>
                    </VStack>
                </Flex>
            </Box>
        </>
    )
}

export default Footer