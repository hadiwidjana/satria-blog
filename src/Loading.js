import React, {useEffect, useState} from "react";
import useMeasure from "react-use-measure";
import {animated, useSpring} from "@react-spring/web";
import styles from "./styles.module.css";
import {Box} from "@mui/material";

export default function Loading({}) {
    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(false)
    useEffect(() => {
        setOpen(true)
        console.log(close)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [close])
    const [ref, {width}] = useMeasure()
    const props = useSpring({
        width: open ? width : 0,
        config: {
            friction: 50,
            precision: 0.1,
        },
        text: open ? 100 : 0,
        onRest: () => {
            setClose(true);
        },

    })
    const props2 = useSpring({
        from: {opacity: 1},
        to: {opacity: close ? 0 : 1},
    })
    return (
        <animated.div className={styles.bg} style={props2}>
            <div className={styles.container}>
                <div ref={ref} className={styles.main}>
                    <animated.div className={styles.fill} style={props}/>
                    <animated.div className={styles.content}>
                        {props.text.to(x => {
                            return x.toFixed(0) + '%'
                        })}
                    </animated.div>
                </div>
            </div>
        </animated.div>
    )
}