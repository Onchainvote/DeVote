import { Outlet, Link } from "react-router-dom";
import WalletComponents from "../componenents/walletcomp/WalletComponents";
import devote from '../assets/devotelogo.png';
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useAccount } from 'wagmi'
import { IoMenuOutline } from "react-icons/io5";
import { RiPassValidLine } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiTeamLine } from "react-icons/ri";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const { address } = useAccount();

  //function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  //Detect scrolling for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditional class for background blur and shadow on screen
  const headerClass = classNames("fixed top-0 left-0 w-full z-50 transition-all",
    {
      "bg-blue-200 shadow-lg backdrop-blur-lg": scrolled,
      "bg-blue-500": !scrolled,
    }
  );


  return (
    <>
      <nav className={headerClass}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img className='w-20' src={devote} alt="devotelogo" />
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              <button onClick={toggleMenu}>
                <IoMenuOutline />
              </button>
            </div>

            <div className="hidden sm:flex sm:flex-wrap sm:gap-10 sm:items-center text-xl">
              <Link className="flex items-center" to="/"><RiPassValidLine />&nbsp; Accreditation</Link>
              <Link className="flex items-center" to="/explore"><MdTravelExplore />&nbsp; Explore</Link>
              <Link className="flex items-center" to="/results"><BsClipboardData />&nbsp; Live data</Link>
              {
                address != null ? (
                    <Link className="flex items-center" to="/dashboard"><CgProfile />&nbsp; Dashboard</Link>
                ) : null
              }
              <Link className="flex items-center" to="/about"><RiTeamLine />&nbsp; About</Link>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <WalletComponents />
            </div>
          </div>
        </div>

        {
          isOpen && (
            <div className="sm:hidden flex justify-center gap-2 items-center">
              <Link to="/"><RiPassValidLine /> Accreditation</Link>
              <Link to="/explore"><MdTravelExplore /> Explore</Link>
              <Link to="/results"><BsClipboardData /> Live data</Link>
              {
                address != null ? (
                    <Link to="/dashboard"><CgProfile /> Dashboard</Link>
                ) : null
              }
              <Link to="/about"><RiTeamLine /> About</Link>
            </div>
          )
        }
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar