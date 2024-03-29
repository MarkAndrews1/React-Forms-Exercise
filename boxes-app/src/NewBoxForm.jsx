import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({addBoxes}) => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const {color, height, width} = formData

    const handleChange = e => {
        const {name, value} = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        addBoxes({id: uuid(), formData})
        setFormData(INITIAL_STATE)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">Please enter a color: </label>

                    <input 
                        id="color"
                        type="text"
                        name="color"
                        placeholder="Color" 
                        value={color}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label htmlFor="height">Please enter a height: </label>
                    <input 
                        id="height"
                        type="text"
                        name="height"
                        placeholder="Height" 
                        value={height}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="width">Please enter a width: </label>
                    <input 
                        id="width"
                        type="text"
                        name="width"
                        placeholder="Width" 
                        value={width}
                        onChange={handleChange}
                    />
                </div>
                <button>Make box!</button>
            </form>
        </div>

    )
}

export default NewBoxForm