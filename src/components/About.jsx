import aboutimg from '/src/assets/about.webp'

const About = () => {
  return (
    <section className='mx-w-7xl mx-auto border-b-2 border-neutral-300 mt-20'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>
            About us
        </h2>
        <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20 '>
            <div className='mb-8 lg:mb-0 '>
                <img src={aboutimg} className='h-auto w-full ' />
            </div>
            <p className='text-lg lg:text-3xl font-medium tracking-tight text-center max-w-5xl mx-auto mt-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis nemo temporibus ipsam? Ullam vero architecto repudiandae iste cumque odit in odio provident nisi itaque numquam nemo, qui totam, a blanditiis doloribus autem animi. Laborum earum nostrum atque suscipit aperiam reprehenderit, eos facere dignissimos nihil culpa adipisci quibusdam veritatis repellat impedit! Voluptatibus impedit nostrum eligendi!
            </p>
        </div>
    </section>
  )
}

export default About