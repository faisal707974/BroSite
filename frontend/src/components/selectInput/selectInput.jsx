import React from "react";
import { Form } from "react-bootstrap";
import './selectInput.css'

export default function Select({ register, rules, errors, required, options, name, onClick }) {
    return (
        <>
            <div className='form-floating'>
                <Form.Select className={`selectInput ${errors[{name}] && 'error-style'}`} name={name} aria-label="Default select example" id={name} {...register(name, { ...rules })} onChange={onClick} >
                    <option hidden defaultValue={''}></option>
                    {options.map((option,index) => {
                        return (
                            <option key={index} value={option}>{option}</option>
                        )
                    })}
                </Form.Select>
                {errors[name] && errors[name].type === 'required' && <p className="validation-error">Required field</p>}
                <Form.Label htmlFor={name}>{name}
                    {required && <span className="reqStar">&nbsp;*</span>}
                </Form.Label>
            </div>
        </>
    )
}