import { Link } from "react-router-dom";
import { sidebarLinks } from "../../lib/links";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const DesktopSidebar = ({ isOpen, setIsOpen, clicked, setClicked }) => {
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
    <section className="w-[250px] h-screen bg-ligfht border-r border-gray hidden md:block">
      <motion.div
        className="fixed w-[250px] md:relative left-0 right-0 top-20 md:top-0 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="">
          {sidebarLinks.map((val, i) => {
            const Icon = val.icon;
            const isClicked = clicked === i;
            const hasSubMenu = val.subMenu?.length;
            return (
              <div className="" key={i}>
                {hasSubMenu ? (
                  <li>
                    <span
                      className="flex justify-between gap-2 items-center text-sm md:text-base py-3 px-5 hover:bg-primary/50 rounded-e-full"
                      onClick={() => setClicked(isClicked ? null : i)}
                    >
                      <Icon className="md:w-4 w-3.5" />
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
                      className="flex justify- gap-2 items-center text-sm md:text-base py-3 px-5 hover:bg-primary/50 rounded-e-full"
                    >
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default DesktopSidebar;
