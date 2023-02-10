import { useState } from "react";
import axios from "axios";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip = () => setIsFlipped(isUp => !isUp);

    return [isFlipped, flip];
}

const useAxios = (baseUrl) => {
    const [dataArray, setDataArray] = useState([])

    const addData = async (formatter = data => data, restOfUrl="") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setDataArray(dataArray => [...dataArray, formatter(response.data)]);
    };

    return [dataArray, addData];
}

export { useFlip, useAxios };