import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserIcon,
  StarIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/stack.png";
import { Link } from 'react-scroll';
import { Users } from "lucide-react";

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function HeroSection16() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://stack-spot.vercel.app/";
  }

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className={`border-0 text-white sticky top-0 z-50 ${isScrolled ? "shadow-lg" : ""
          }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-lg flex gap-3 items-center justify-between font-bold"
          >
            <Link>
              <img src={Logo} alt="logo" className="h-8 w-8" />
            </Link>
            Stack Spot
          </Typography>
          <ul className="ml-10 hidden  lg:flex flex-row gap-10 ">
            <NavItem >
              <Link to="Home" smooth={true} duration={500}>
                <span className="hover:text-gray-500">Home</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="AboutUs" smooth={true} duration={500}>

                <span className="hover:text-gray-500">About Us</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="team" smooth={true} duration={500}>

                <span className="hover:text-gray-500">Team</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="Contact" smooth={true} duration={500}>

                <span className="hover:text-gray-500">Contact Us</span>
              </Link>
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text">
              <a href="https://stack-spot.vercel.app/login">Login</a>
            </Button>
            <Button variant="text" className="bg-black text-white">
              <a href="https://stack-spot.vercel.app/register">Sign Up</a>
            </Button>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem >
                <Link to="Home" smooth={true} duration={500} onClick={() => setOpen((prev) => !prev)}>
                  <span className="hover:text-gray-500">Home</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="AboutUs" smooth={true} duration={500} onClick={() => setOpen((prev) => !prev)}>

                  <span className="hover:text-gray-500">About Us</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="team" smooth={true} duration={500} onClick={() => setOpen((prev) => !prev)}>

                  <span className="hover:text-gray-500">Team</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="Contact" smooth={true} duration={500} onClick={() => setOpen((prev) => !prev)}>

                  <span className="hover:text-gray-500">Contact Us</span>
                </Link>
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">
                <a href="https://stack-spot.vercel.app/login">Login</a>
              </Button>
              <Button variant="text" className="bg-black hover:bg-gray-700 text-white">
                <a href="https://stack-spot.vercel.app/register">Sign Up</a>
              </Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <header className="bg-gradient-to-b from-black to-gray-900 via-black h-[90vh] p-8" id="Home">
        <div className="grid mt-16 w-full">
          <div className="container mx-auto px-4 text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug text-white !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Explore diverse topics,{" "}
              <span className="text-green-500 leading-snug ">engage</span>, and
              be <span className="leading-snug text-green-500">inspired.</span>
              Join us now!
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Dive into a world of captivating content, connect with like-minded
              individuals, and unleash your curiosity today!
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <div onClick={handleRedirect}>
                  <Button color="white" className="w-full px-4 md:w-[12rem]">
                    Join us now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;
