import { Alert, AlertIcon, AlertTitle, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react"
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs"

export type CardProps = {
    title: string,
    description: string,
    buttonText: string,
    alertText: string,
    alertStatus: "info" | "warning" | "success" | "error"
    key: number
}

function CustomCard ({ title, description, buttonText, alertText, alertStatus }: CardProps) {
    return (
        <Card>
            <CardHeader color="white" bgColor="green.500">
              <Heading fontSize={24}>{title}</Heading>
            </CardHeader>
            <CardBody display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <Text>{description}</Text>
              <Alert my={3} status={alertStatus} variant="left-accent">
                <AlertIcon />
                <AlertTitle>{alertText}</AlertTitle>
              </Alert>
            </CardBody>
            <Divider borderColor="gray.400" />
            <CardFooter gap={4}>
              {buttonText && <Button variant="green">{buttonText} <BsArrowRight style={{ marginLeft: "8px" }} /></Button>}
              <Button>Read More <BsBoxArrowUpRight size={18} style={{ marginLeft: "8px" }} /></Button>
            </CardFooter>
        </Card>
    )
}

export default CustomCard