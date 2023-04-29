import { easeOut } from "framer-motion";

export default function fadeIn(direction) {
    return {
        hidden: {
            opacity: 0,
            x: direction === 'left'?'150px':'right'? '-150px': undefined
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: 'tween',
                ease: easeOut
            }
        }
    }
}