import { useEffect } from "react"
import "./Button.css"

interface Props {
    label: string,
    parentMethod: () => void
}

export const Button = ({label, parentMethod}: Props) => {
    
    useEffect(() => {
        console.log("Label changed")
    }, [label])

    return (
        <button className="custom-button" onClick={parentMethod}>    
            {label}      
        </button>
    )
}