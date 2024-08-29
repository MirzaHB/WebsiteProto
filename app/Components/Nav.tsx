import { TabGroup, TabList, Button } from "@headlessui/react";
import { NavLink } from "@remix-run/react";
export default function Nav() {
  return (
    <div className="flex justify-center mt-4">
      <TabGroup className="w-full max-w-2xl bg-red-100 rounded-full p-6 shadow-md">
        <TabList className="flex justify-around">
          <NavLink to="/About">
            <Button>About Me</Button>
          </NavLink>
          <NavLink to="/Projects">
            <Button>Projects</Button>
          </NavLink>
          <NavLink to="/Experience">
            <Button>Experience</Button>
          </NavLink>
        </TabList>
      </TabGroup>
    </div>
  );
}
