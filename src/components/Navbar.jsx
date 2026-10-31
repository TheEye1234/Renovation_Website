import { useState } from "react"
import logo from '/src/assets/logo.webp'
import { X, Menu } from 'lucide-react'
const Navbar = () => {
  const [isopen, setIsopen] = useState(false)
  const toggleMenu = () => {
    setIsopen(!isopen)
  }
  const LINKS = [{ name: "Home", link: "#home" }, { name: "About us", link: "#home" }, { name: "Price", link: "#home" }, { name: "Contact us", link: "#home" }, { name: "order", link: "#home" }

  ]
  return (
    <nav className="border-b-2 border-neutral-200">
      <div className='max-w-6xl mx-auto flex justify-between items-center py-8'>
        <div className="pl-4">
          <a href="#">
            <img src={logo} alt="" width={150} height={15} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isopen ? "close menu" : "open menu"} className="text-2xl pr-2 focus:outline-none ">
            {isopen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((items, index) => (
            <a href={items.link} key={index} className="uppercase text-sm font-medium hover:underline hover:text-purple-900">{items.name}</a>
          ))}
        </div>
      </div>
      <div className={`${isopen?"block":"hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-2 border-neutral-300`}>
        {LINKS.map((items, index) => (
            <a href={items.link} key={index} className="uppercase text-lg font-medium hover:underline hover:text-purple-900 block py-2 tracking-wide">{items.name}</a>
          ))}
      </div>
    </nav>
  )
}

export default Navbar