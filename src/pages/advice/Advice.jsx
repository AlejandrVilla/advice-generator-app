import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import "./advice.scss";

const API_URL = "https://api.adviceslip.com/advice";

const variant = {
    hidden: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.4,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.4,
        }
    },
}

const getWindowType = (width) => {
    if (width <= 800) return "mobile";
    return "desktop";
}

const Advice = () => {
    const [idCount, setIdCount] = useState(" ");
    const [advice, setAdvice] = useState("");
    let windowType = getWindowType(window.innerWidth);

    const pattern = `./pattern-divider-${windowType}.svg`;

    const handleApiCall = async () => {
        try {
            const response = await axios.get(API_URL);
            setIdCount(response.data.slip.id);
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleApiCall();
    }, [])

    const handleClick = () => {
        handleApiCall();
    }

    return (
        <div className="advice">
            <div className="advice-content">
                <AnimatePresence mode="sync">
                    <motion.p
                        key={idCount}
                        className="advice-id"
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >Advice #{idCount}
                    </motion.p>
                    <motion.div
                        key={advice}
                        className="div-advice-text"
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <h1 className="advice-text">{advice}</h1>
                    </motion.div>
                </AnimatePresence>
            </div>
            <img className="divider" src={pattern} alt="divider" />
            <div className="div-dice-icon" onClick={handleClick}>
                <img className="dice-icon" src="./icon-dice.svg" alt="icon dice" />
            </div>
        </div>
    );
}

export default Advice;