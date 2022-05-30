import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Register.css'
// import Logo from '../../components/General/Logo/Logo'
import Logo from '../../components/General/Logo/Logo'
import Input from '../../components/RegistrationInput/RegistrationInput'
import Photo from '../../components/profilePhoto/profilePhoto'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import Select from '../../components/selectInput/selectInput'
import RegComplete from '../../components/registrationThanks/registrationThanks'
import { useDispatch, useSelector } from 'react-redux'
import { registeration } from '../../redux/actions/registerAction'
import default_image from '../../assets/images/11.jpg'
import axios from 'axios'


export default function () {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });

    const dispatch = useDispatch()
    const { loading, error, userInfo } = useSelector((state) => (state.Register))

    const [modal, setModal] = useState(false)
    function toggleModal() {
        setModal(!modal)
    }

    const [imgSrc, setImgSrc] = useState(default_image)
    const [croppedPhoto, setCroppedPhoto] = useState()
    const [password_match, setPassword_match] = useState()

    const onSubmit = async (data) => {
        if (data.password === data.confirm_password) {
            setPassword_match()
            data.photo = croppedPhoto
            dispatch(registeration(data, toggleModal))
        } else {
            setPassword_match('error')
        }
    }

    const [Brocamps, setBrocamps] = useState([])
    const [Batches, setBatches] = useState([])
    useEffect(() => {
        async function getBatchDetails() {
            const response = await axios.get('http://localhost:3001/manager/schedules')
            return new Promise((resolve) => resolve(response.data))
        }
        getBatchDetails().then((res) => {
            let map = res.map(obj => obj.BroCamp)
            let filter = map.filter((value, index, array) => {
                return array.indexOf(value) === index
            })
            setBrocamps(filter)

            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

            const dates = res.reduce((acc, curr) => {
                let d = curr.Date
                let newDate = d.Year+ "-" +months[d.Month-1]+ "-" +d.Day
                if (acc[curr.BroCamp]) {
                    acc[curr.BroCamp].push(newDate).toString()
                } else {
                    acc[curr.BroCamp] = [newDate]
                }
                return acc
            }, {})
            setBatches(dates)
        })
    }, [])

    const [selected, setSelected] = useState()
    function handleSelect(e) {
        let date = new Date()
        setSelected(Batches[e.target.value])
    }

    return (
        <>
            <RegComplete modal={modal} error={error} userInfo={userInfo} />
            <div className='Register'>
                <div className="header d-flex justify-content-center aign-items-center">
                    <div className="col logo">
                        <Logo broColor1={'black'} broColor2={'white'}></Logo>
                    </div>
                </div>
                <div className="form-div row w-75  mx-auto d-flex justify-content-center align-items-center">
                    <div className='mt-4 ms-4'>
                        <h3 className=''>REGISTRATION</h3>
                    </div>
                    <Form action="" onSubmit={handleSubmit(onSubmit)} >
                        <div className='profilePic'>
                            <Photo imgSrc={imgSrc} setImgSrc={setImgSrc} setCroppedPhoto={setCroppedPhoto} />
                        </div>
                        <div className="row registration-form mx-auto my-3 mb-5">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <Input type='text' name='fullName' label='Name' required
                                            register={register} errors={errors} rules={{ required: true, pattern: /^[a-zA-Z]+\s[a-zA-Z]+$/ }} />
                                    </div>
                                    <div className="col"></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type={'date'} name={'dob'} label='Date of Birth' required value='2022-12-06'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                    <div className="col">
                                        <Select name={'Gender'} required value='Female'
                                            register={register} errors={errors} rules={{ required: true }} options={['Male', 'Female']} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input as={'textarea'} type={'text'} name={'address'} label='Address' required value='address'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type={'text'} name={'country'} label='Country' required value='country'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                    <div className="col">
                                        <Input type={'text'} name={'state'} label='State' required value='state'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                    <div className="col">
                                        <Input type={'text'} name={'district'} label='District' required value='district'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type={'text'} name={'Email'} label='Email' required value='alskjd@asdlkf.com'
                                            register={register} errors={errors} rules={{ required: true, pattern: /^[a-z]+@[a-z]+\.com$/ }} />
                                    </div>
                                    <div className="col">
                                        <Input type={'text'} name={'whatsapp'} label='WhatsApp' required value='whatsapp'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Select name={'Employment Status'} required
                                            register={register} errors={errors} rules={{ required: true }} options={['Employed', 'Fresher', 'Student']} />
                                    </div>
                                    <div className="col">
                                        <Select name={'Qualification'} required
                                            register={register} errors={errors} rules={{ required: true }} options={['B.Tech / M.Tech', 'BCA / MCA', 'Bsc / Msc', 'Diploma', 'Other']} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type={'text'} name={'college'} label='Name of College' required value='college'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                    <div className="col">
                                        <Input type={'text'} name={'year of graduation'} label='graduation' required value='2344'
                                            register={register} errors={errors} rules={{ required: true, pattern: /^[0-9]{4}$/ }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {Brocamps ?
                                            <Select name={'BroCamp'} required onClick={handleSelect}
                                                register={register} errors={errors} rules={{ required: true }} options={Brocamps} />
                                            : null}
                                    </div>
                                    <div className="col">
                                        <Select name={'Batch'} required
                                            register={register} errors={errors} rules={{ required: true }} 
                                            options={
                                                selected ? 
                                                selected : []} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type={'password'} name={'password'} label='password' required
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                    <div className="col">
                                        <Input type={'password'} name={'confirm'} label='confirm_password' required confirm_password_error={password_match}
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <Input as={'textarea'} type={'text'} name={'you'} label='More personal' required value='you'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input as={'textarea'} type={'text'} name={'sps'} label='sps' required value='sps'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input as={'textarea'} type={'text'} name={'motivation'} label='Motivated by' required value='motivation'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input as={'textarea'} type={'text'} name={'know'} label='Know about SPS' required value='know'
                                            register={register} errors={errors} rules={{ required: true }} />
                                    </div>
                                </div>
                                <div className='position-relative'>
                                    <div className='d-inline'>
                                        <input name='agree' type="checkbox" {...register('agree', { required: 'required' })} />
                                        <p> I agree that I have read and understood all the FAQs</p>
                                    </div>
                                    {errors['agree'] && <span className='tooltiptext'>Check here</span>}
                                    <div className='submit-button'>
                                        <Button type='submit'>Register now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        </>
    )
}