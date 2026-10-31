import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

import { CONTACT_INFO } from '../constants'

const Contact = () => {
    return (
        <section className='max-w-7xl mx-auto border-t-2 border-neutral-400'>
            <div className='my-20'>
                <h2 className='uppercase mb-12 text-center text-xl lg:text-3xl tracking-tight'>contact us</h2>
                <p className='max-w-2xl text-lg text-center mx-auto mb-12'>
                    {CONTACT_INFO.text}
                </p>
                <div className="flex flex-col lg:flex-row justify-around mx-4">
                    <div className="flex mb-8 lg:mb-0">
                        <FaPhoneAlt className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.phone.label}
                            </p>
                            <p className="text-neutral-600">
                                {CONTACT_INFO.phone.value}
                            </p>
                        </div>

                    </div>
                    <div className="flex mb-8 lg:mb-0">
                        <MdEmail className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.email.label}
                            </p>
                            <p className="text-neutral-600">
                                {CONTACT_INFO.email.value}
                            </p>
                        </div>

                    </div>
                    <div className="flex mb-8 lg:mb-0">
                        <MdOutlineLocationOn className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.address.label}
                            </p>
                            <p className="text-neutral-600">
                                {CONTACT_INFO.address.value}
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Contact