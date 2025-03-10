import { useSelector } from "react-redux";

const Footer = () => {
  const { user } = useSelector((state) => state.userInfo);
  const userInfo = user.userInfo;

  return (
    <section
      className={`${
        userInfo.role !== "User" ? "" : "mt-4"
      }  py-4 px-6 border-t border-[#f0f0f0] flex flex-col md:flex-row gap-1 justify-between items-center`}
    >
      <p className="text-xs font-inter font-medium text-primary">
        Swift Current
      </p>
      <p className="text-xs font-inter font-medium text-primary">
        Copyright &copy;2025 All rights reserverd | swift current
      </p>
    </section>
  );
};

export default Footer;
