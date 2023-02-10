import { useState } from "react";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip = () => setIsFlipped(isUp => !isUp);

    return [isFlipped, flip];
}

export { useFlip };