import React, { useState } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'


const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBoxes = boxObj => {
        setBoxes(boxes => [
            ...boxes,
            boxObj
        ])
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(b => b.id !== id))
    }

    const boxComps = boxes.map(b => (
        <Box 
            id={b.id}
            color={b.formData.color || "grey"} 
            height={b.formData.height || 5}
            width={b.formData.width || 5}
            removeBox={removeBox}
        />
    ))

    

    return(
        <div>
            <h1>Create a Box!</h1>
            <NewBoxForm addBoxes={addBoxes} />
            <div className="BoxList">
                {boxComps}
            </div>
        </div>
    )
}

export default BoxList