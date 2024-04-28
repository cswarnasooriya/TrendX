import { useState } from "react"
import { FiShoppingBag } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () =>{
        setDropdown(!dropdown);

    }

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:relative fixed z-20">
        <div className="container mx-auto lg;px-6">
            <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-x-2">
                        <h2 className="font-semibold text-3xl text-blue-800">
                            TREND..X
                        </h2>
                    </div>
                </div>
                <ul className=" flex-1 flex justify-center items-center xl:gap-12 gap-x-6 max-lg:hidden">
                    <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary">Blog</a>
                    <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary">Shop</a>
                    <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary">Contact</a>
                    <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-secondary">Products</a>
                    
                </ul>
                <div className="flex max-lg:hidden gap-x-4">
                    <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary">
                      <FiShoppingBag size={18}/>
                    </button>

                    <button className="bg-secondary rounded-[10px] p-2 border-none text-white cursor-pointer hover:bg-white hover:text-secondary">
                        <FaUser size={18}/>
                    </button>
                </div>

                {dropdown ? (
                    <div onClick={showDropdown}>
                        <IoMdCloseCircleOutline />
                    </div>
                ): (
                    <div onClick={showDropdown}>
                        <IoMenu />
                    </div>
                )}
            </div>

            {dropdown ? (
                <div onClick={showDropdown} className="lg:hidden w-full h-[100vh] fixed top-24 bg-white ease-in-out duration-100">
                    <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                        <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">Blog</a>
                            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">Shop</a>
                            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">Contact</a>
                            <a href="#" className="leading-normal no-underline text-black font-bold text-lg hover:text-primary">Products</a>
                        </ul>

                        <div className="">
                                           <button >
                                <FiShoppingBag size={18}/>
                            </button>

                            <button>
                                <FaUser size={18}/>
                            </button>
                        </div>
                    </div>
                </div>
            ): null}
        </div>
      
    </nav>
  )
}

export default Navbar
