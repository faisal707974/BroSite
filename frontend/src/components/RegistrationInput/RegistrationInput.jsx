import React from "react";
import { Form } from "react-bootstrap";
import './RegistrationInput.css'

export default function ({as, type, name, label, register, errors, rules, required, value, confirm_password_error }) {
    return (
        <>
            <div className="custom-input">
                <Form.Group className='form-floating'>
                    <Form.Control value={value} className={confirm_password_error && 'error-style' || errors[label] && 'error-style'} as={as} type={type} id={name} placeholder={name} {...register(label, { ...rules })} />
                    {errors[label] && errors[label].type === 'required' && <p className="validation-error">Required field</p>}
                    {errors[label] && errors[label].type === 'maxLength' && <p className="validation-error">{name} should be have maximum of {rules.maxLength} characters</p>}
                    {errors[label] && errors[label].type === 'min' && <p className="validation-error">{name} should be contain atleast {rules.min} characters</p>}
                    {errors[label] && errors[label].type === 'pattern' && <p className="validation-error">Invalid format</p>}
                    {confirm_password_error && <p className="validation-error">Password not matching</p>}
                    <Form.Label htmlFor={name}>{label}
                    {required && <span className="reqStar">&nbsp;*</span>}
                    </Form.Label>
                </Form.Group>
            </div>
        </>
    )
}