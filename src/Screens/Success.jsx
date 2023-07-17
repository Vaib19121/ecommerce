import React, { useEffect, useState } from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { emptyproduct } from "../Store/productslice";

const Success = () => {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(5);
    useEffect(() => {
        dispatch(emptyproduct());
    }, []);

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
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width={"50%"}
                className="mt-10 border-2 border-green-500 drop-shadow-lg rounded-3xl"
            >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Transaction Successful!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Thanks for Visiting our Website. Redirecting to Home Page in{" "}
                    {seconds} Seconds.
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default Success;
