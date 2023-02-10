import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip = () => setIsFlipped(isUp => !isUp);

    return [isFlipped, flip];
}

const useAxios = (baseUrl) => {
    const [dataArray, setDataArray] = useState([])

    const addData = async (restOfUrl="") => {
        console.log("Sending Axios get request...")
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        console.log("Printing response.data...")
        console.log(response.data);
        setDataArray(dataArray => [...dataArray, { ...response.data, id: uuid() }]);
    };

    return [dataArray, addData];
}

export { useFlip, useAxios };