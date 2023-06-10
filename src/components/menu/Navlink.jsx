const Navlink = ({ text }) => {
  return (
    <a href="#" className="text-base font-semibold mt-[6px]">
      <span className="peer">{text}</span>
      <span className="block h-1 w-full scale-x-0 peer-hover:bg-white peer-hover:scale-x-50 transition-all duration-500"></span>
    </a>
  );
};

export default Navlink;
