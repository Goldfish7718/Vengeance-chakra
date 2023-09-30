import {
    Flex,
    Text,
    Button,
    Spacer,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    MenuGroup,
    IconButton,
    useBreakpointValue
} from "@chakra-ui/react"
import { BsDiscord } from 'react-icons/bs'
import { FaXTwitter, FaInstagram, FaThreads } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'

function Navbar () {

    const isBelowMd = useBreakpointValue({ base: true, md: false })

    return (
        <Flex bgColor="green.500" px={5} py={2} alignItems="center" position="fixed" w="100vw" zIndex="1">
            <Text fontSize={{base: 20, md: 32}} fontWeight="700" color="white">Vengeance</Text>
            <ButtonGroup display={{base: "none", md: "block" }} isAttached mx={5} >
                <Button><BsDiscord size={18} /></Button>
                <Button><FaXTwitter size={18} /></Button>
                <Button><FaInstagram size={18} /></Button>
                <Button><FaThreads size={18} /></Button>
            </ButtonGroup>
            <Spacer />
            <Menu>
                <MenuButton variant="solid" colorScheme="green" p={{base: 2, md: 4 }} _hover={{ bgColor: "whiteAlpha.300" }} _active={{ bgColor:"green" }} as={IconButton} icon={<GiHamburgerMenu color="white" size={18} />} />
                <MenuList>
                    {isBelowMd ?  
                    <>
                        <MenuGroup title="Social">
                            <MenuItem>Discord <BsDiscord size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>X (Twitter) <FaXTwitter size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>Instagram <FaInstagram size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>Threads <FaThreads size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        </MenuGroup> 
                        <MenuDivider borderColor="gray.400" />
                    </> : null
                    }
                    {isBelowMd ? 
                    <>
                        <MenuGroup title="Navigation">
                            <MenuItem>Home <AiOutlineHome size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>About <AiOutlineInfoCircle size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>Contact <AiOutlineMail size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        </MenuGroup>
                        <MenuDivider borderColor="gray.400" />
                    </> : <>
                        <MenuItem>Home <AiOutlineHome size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        <MenuItem>About <AiOutlineInfoCircle size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        <MenuItem>Contact <AiOutlineMail size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        <MenuDivider borderColor="gray.400" />
                    </>
                    }
                    {isBelowMd ? 
                    <>
                        <MenuGroup title="Profile">
                            <MenuItem>Login <BiLogIn size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                            <MenuItem>Sign Up<AiOutlineUserAdd size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        </MenuGroup>
                    </> : <>
                        <MenuItem>Login <BiLogIn size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                        <MenuItem>Sign Up<AiOutlineUserAdd size={18} style={{ marginLeft: "8px" }} /></MenuItem>
                    </>
                    }
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Navbar