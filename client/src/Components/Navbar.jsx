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
    <nav>
        <div>
            <div>
                <div>
                    <div>
                        <h2>
                            TRENDX
                        </h2>
                    </div>
                </div>
                <ul>
                    <a href="#">Blog</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                    <a href="#">Products</a>
                    
                </ul>
                <div>
                    <button>
                      <FiShoppingBag size={18}/>
                    </button>

                    <button>
                        <FaUser size={18}/>
                    </button>
                </div>

                {dropdown ? (
                    <div>
                        <IoMdCloseCircleOutline/>
                    </div>
                ): (
                    <div>
                        <IoMenu/>
                    </div>
                )}
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar
