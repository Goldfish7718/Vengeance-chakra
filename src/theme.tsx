import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react'
import { cardAnatomy } from "@chakra-ui/anatomy"

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
    container: {
        borderRadius: "15px"
    },
    header: {
        borderTopRadius: "15px"
    }
})

const Card = defineMultiStyleConfig({baseStyle})

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                bgColor: "gray.300",
                color: "white",
                _hover: {
                    bgColor: "gray.400"
                }
            },
            variants: {
                green: {
                    bgColor: "green.500",
                    _hover: {
                        bgColor: "green.700"
                    }
                }
            }
        },
        Card
    }
})

export default theme