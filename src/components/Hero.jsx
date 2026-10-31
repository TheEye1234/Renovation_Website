import {HERO_CONTENT} from '../constants'

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto border-b-2 border-neutral-300'>
        <div className='flex flex-col items-center my-20'>
            <h1 className='text-6xl uppercase font-bold lg:text-[10rem] p-2'>
                {HERO_CONTENT.title}
            </h1>
            <p className='lg:mt-6 text-sm mb-4 font-medium tracking-tighter'>
                {HERO_CONTENT.subtitle}
            </p>
            <img src={HERO_CONTENT.image} className='object-cover rounded-2xl p-2 w-full h-[65vh]' />
        </div>
    </section>
  )
}

export default Hero