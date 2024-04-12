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

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className={`border-0 sticky top-0 z-50 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-lg flex gap-3 items-center justify-between font-bold"
          >
            <img src={Logo} alt="logo" className="h-8 w-8" />
            Stack Spot
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>
              <HomeIcon className="h-5 w-5" />
              Home
            </NavItem>
            <NavItem>
              <UserIcon className="h-5 w-5" />
              About Us
            </NavItem>
            <NavItem>
              <StarIcon className="h-5 w-5" />
              Testimonial
            </NavItem>
            <NavItem>
              <EnvelopeIcon className="h-5 w-5" />
              Contact Us
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text">Log in</Button>
            <Button color="gray">Sign Up</Button>
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
              <NavItem>
                <HomeIcon className="h-5 w-5" />
                Home
              </NavItem>
              <NavItem>
                <UserIcon className="h-5 w-5" />
                About Us
              </NavItem>
              <NavItem>
                <StarIcon className="h-5 w-5" />
                Testimonial
              </NavItem>
              <NavItem>
                <EnvelopeIcon className="h-5 w-5" />
                Contact Us
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <Button color="gray">Sign Up</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <header className="bg-white p-8 ">
        <div className="grid mt-16  w-full mb-20 ">
          <div className="container mx-auto px-4 text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
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
                <Input color="gray" label="Enter your email" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  Sign Up now!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;
