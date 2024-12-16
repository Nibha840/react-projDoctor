import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className= 'text-center text-2x1 pt-10 text-gray-500'>
                <p> ABOUT <span className='text-gray-700 font-medium'>US</span> </p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Need's Conveniently And Efficiently At Prescripto. We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.</p>
                    <p>Prescripto is Committed To Excellence in Healthcore Technology. We Continuously Strive To Entece Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superiar Servic Whether You're Booking Your First Appointment Or Managing Ongoing Care: Prescripto is Here To Support Yo Every Step Of The Way</p>
                    <b>Our Vision</b>
                    <p>Our Volos At Prescripto is to Create A Seamless Recethaine Experience For Every Laser We Are To Bridge The Gap Between Patients And Healthcare Provident, Making It Eater For You To Access The Core You lewed, Wh You Need It</p>

                </div>
            </div>
        </div>
        )
    }
export default About