import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip = () => setIsFlipped(isUp => !isUp);

    return [isFlipped, flip];
}

const useAxios = (url) => {
    const [dataArray, setDataArray] = useState([])

    const addData = async () => {
        const response = await axios.get(url);
        setDataArray(dataArray => [...dataArray, { ...response.data, id: uuid() }]);
    };

    return [dataArray, addData];
}

export { useFlip, useAxios };