import { Link } from "react-router-dom";
import { sidebarLinks } from "../../lib/links";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  return (
    <section className="w-[200px] h-screen bg-ligfht border-r border-gray">
      <div className="">
        <ul className="">
          {sidebarLinks.map((val, i) => {
            const Icon = val.icon
            const isClicked = clicked === i;
            const hasSubMenu = val.subMenu?.length;
            return (
              <div className="" key={i}>
                {hasSubMenu ? (
                  <li>
                    <span
                      className="flex justify-between gap-2 items-center p-2 pl-4 hover:bg-primary/50 rounded-e-full"
                      onClick={() => setClicked(isClicked ? null : i)}
                    >
                      <Icon className="w-5" />
                      {val.name}
                      {hasSubMenu && (
                        <ChevronDown
                          className={`ml-auto ${isClicked && "rotate-180"} `}
                        />
                      )}
                    </span>
                    {hasSubMenu && (
                      <motion.ul
                        initial="exit"
                        animate={isClicked ? "enter" : "exit"}
                        variants={subMenuDrawer}
                        className="pl-5 bg-gray"
                      >
                        {val.subMenu?.map(({ name, link }) => (
                          <Link
                            to={link}
                            key={name}
                            className="p-2 block hover:bg-white/5 rounded-e-full list-disc cursor-pointer"
                          >
                            {name}
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ) : (
                  <li>
                    <Link
                      to={val.link}
                      className="flex justify- gap-2 items-center p-2  pl-4 hover:bg-primary/50 rounded-e-full"
                    >
                      <Icon className="w-5" />
                      {val.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
