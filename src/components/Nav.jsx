import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
  return (

    <header className="padding-x py-8 absolute z-10 w-full" >

        <nav className="flex justify-between items-center max-container">

            <a href = "/">

                <img src={headerLogo} 
                alt="Logo" 
                width={130}
                height={29}
                 />

            </a>





            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((iteam) => (
                    <li key={iteam.label} className="group relative">
                        <a
                            href={iteam.href}
                            className="font-montserrat leading-normal 
                            text-lg text-slate-gray px-2 py-1 relative"
                        >
                            {iteam.label}
                            {/* Hover animation */}
                            <span
                            className="absolute left-0 bottom-0 h-[2px] w-0 bg-coral-red
                            group-hover:w-full transition-all duration-300"
                            ></span>
                        </a>
                    </li>
                ))}
            </ul>







            <div className="hidden max-lg:block">
                <img 
                    src = {hamburger} 
                    alt="hamburger"
                    width={25}
                    height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav