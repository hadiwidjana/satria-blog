import {useEffect, useState} from "react";

export default function Typewriter({srcString}) {

    const [{content,carriage}, setContent] = useState({content:'',carriage:0})

    const cursorStyle = {

    }

    useEffect(() => {
        if(carriage == srcString.length) return
        const delay = setTimeout(() => {
            setContent({content:content+srcString[carriage], carriage: carriage+1})
            clearTimeout(delay)
        }, 0|(Math.random()*200+50))
    }, [content])

    return <span>{content}<span className="cursor">|</span></span>

}