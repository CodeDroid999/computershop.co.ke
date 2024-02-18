import Image from "next/image";
import { UserAuth } from "context/AuthContext";
import { ThemeToggle } from "./theme-toggle";
import { MainNav } from "./main-nav";
import router from "next/router";
import Avatar from "../Avatar";

const Navbar = async () => {
  const { userId } = UserAuth();

  if (!userId) {
    router.push('/auth/sign-in');
  }


  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex">
          <Image src="https://i.postimg.cc/50St5mJ3/computershop-logo.png" width="100" height="100" alt=""> </Image></div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
