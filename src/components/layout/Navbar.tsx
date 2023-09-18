import { Button } from "antd";

import { MobileSidebar } from ".";
import { MenuIcon } from "../icons";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <Button type="primary">Mateo Renterria Lujan</Button>
      </div>
    </div>
  );
};

// import withTheme from "@/theme";
// const NavbarWithTheme = () => {
//   return withTheme(<Navbar />);
// };

export default Navbar;
