import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <section className='max-w-7xl mx-auto '>
    <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
        <div className='flex space-x-6 mb-2'>
            <a href="https://www.facebook.com"><FaFacebookF/>
            </a>
            <a href="https://www.facebook.com">
            <FaInstagram/>
            </a>
            <a href="https://www.facebook.com"><FaTwitter/>
            </a>
        </div>
        
        <p className='text-sm'>
            &copy; 2026 Abhay. All Rights Reserved
        </p>
    </div>
   </section>
  )
}

export default Footer