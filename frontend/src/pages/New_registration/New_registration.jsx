import React from 'react'
import Logo from '../../components/Logo/Logo'
import '../New_registration/New_registration.scss'
import img from '../../assets/images/13.png'
import Navbar from '../../components/Navbar/Navbar'

export default function New_registration() {
    return (
        <>
            <div className='New_registration'>
                <div className="layer1 row">
                    <Logo broColor1={'#7bcef3'} broColor2={'black'} />
                    <Navbar/>
                </div>
                <div className="layer2 row">
                    <div className="content col col-sm-5 col-12">
                        <div>

                            <p>
                                Hi,
                                <span>
                                    &nbsp; Muhammed Faisal,
                                </span>
                            </p>
                            <p>
                                welcome to
                                <span>
                                    &nbsp;BROTOTYPE&nbsp;
                                </span>
                                . Let’s design your career together.
                                We will help you getting ready for a bright future.
                            </p>
                            <br />
                            <div>
                                <p>Complete your payments</p>
                                <p>
                                    <ol>
                                        <li>&#8377; 10000 - Caution deposit</li>
                                        <li>&#8377; 4000 - Advance office rent</li>
                                    </ol>
                                    <button>Pay Now</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <img className='mx-auto d-block' src={img} alt="" />
                    </div>
                </div>
                <div className='layer3 row'>
                    <div className="col">
                        <h5>Attend Workshop on</h5>
                        <h2>02 May 2022</h2>
                    </div>
                    <div className="col">
                        <h5>BroCamp at</h5>
                        <h2>Kochi</h2>
                    </div>
                    <div className="col">
                        <h5>Workshop venue</h5>
                        <h2>Carnival Infopark</h2>
                        <h2>Kochi</h2>
                    </div>
                </div>
                <div className="layer4 row">
                    <h3 className=''>Get your entry pass here</h3>
                    <button>Download</button>
                </div>
                <hr />
                <div className="layer5 container">
                    <h4>Guidelines for enrolled candidates</h4>
                    <p>

                        We, the BROTOTYPE extend our hearty congratulations to you for your life changing decision to join our prestigious programme BROCAMP. Your enrolment has been confirmed for our batch starting Kochi. Please go through the following guidelines to make your preparations comfortable.
                    </p>
                    <ol>
                        <li>
                            The first segment of the programme is a 3 Days Workshop which will be conducted on the above mentioned venue and time.
                        </li>
                        <li>
                            Reach the venue in time. Outstation candidates who were staying in the hostel may reach the hostel by previous day evening, to ensure that they arrive at the venue on time the next day.
                        </li>
                        <li>
                            Follow the Covid protocol, including wearing a mask and carrying hand sanitizer
                        </li>
                        <li>
                            Being in formal attire is very important. Wear formal pants, tuck in your shirt and wear formal shoes.
                        </li>
                        <li>
                            After the 3 Days workshop, the rest of the programme will be conducted at the BROCAMP mentioned above. The location details are furnished below, and the outstation candidates have to arrange their accommodation near to this location.
                        </li>
                        <li>
                            Because our programme is more of a residential one, individuals staying at the hostel should bring the required luggage for a comfortable stay. Outstation candidates should avoid commuting frequently from their homes.
                        </li>
                        <li>
                            You are free to choose any options for your accommodation and try to make it as near as possible to our venue. It is solely your obligation to arrange your stay, and we provide no commitments in this regard. On your request, the publicly available information on the hostel owners may be shared.
                        </li>
                        <li>
                            We recommend you to go through the details regarding the various domains in software technologies, which will be helpful to identify your own field of interest. Getting well versed with the concepts in our 100K Coding Challenge Playlist (https://bit.ly/30gwQpK) , will be highly helpful during our programme.
                        </li>
                        <li>
                            All of you must carry the following things while you attend the workshop
                            <ul>
                                <li>
                                    Laptop and Charger
                                </li>
                                <li>
                                    Headset that can be connected to laptop
                                </li>
                                <li>
                                    A Notebook/Blank papers for writing & a Pen
                                </li>
                            </ul>
                        </li>
                        <li>
                            The co-working space rent is Rs. 4000/- month, and the first payment should be done during the registration on the first day of the workshop. Considering the pandemic scenario, contactless payment such as account transfer is preferred.
                        </li>
                        <li>
                            payments should be completed before the commencement of the program.
                        </li>
                        <li>
                            If you have any query, feel free to contact our team:
                            Shibith : 73065 69703
                            Anagha : 94005 90604
                            Mohd. Shibli: 79026 06117
                        </li>
                    </ol>

                </div>
            </div>
        </>
    )
}