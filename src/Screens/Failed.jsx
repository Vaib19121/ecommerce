import React,{useState,useEffect} from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Failed = () => {
    const [seconds, setSeconds] = useState(5);
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);

        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);
    }, []);
    return (
        <div className="flex justify-center ">
            <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                w={"50%"}
                className="mt-10 border-2 border-red-600 drop-shadow-lg rounded-3xl"
            >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Transaction Failed!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Our team will get back to you soon regarding error.
                    Redirecting to Home Page in {seconds} Seconds.
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default Failed;
