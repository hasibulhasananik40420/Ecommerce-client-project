import Link from "next/link";
import categoryData from "./categoryData";

const Categoric = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: boolean;
}) => {
  return (
    <>
      <div
        className={`w-[270px] h-[93vh] !z-[999] shadow-sm absolute left-0 top-[53px] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul
          className={`transition-transform duration-500 ease-in-out ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          {categoryData.map((category, index) => (
            <li
              key={category.name}
              style={{
                transitionDelay: `${
                  isOpen
                    ? index * 0.001
                    : (categoryData.length - index - 1) * 0.001
                }s`,
              }}
            >
              <Link
                onClick={() => setIsOpen(false)}
                href={category.link}
                className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-orange-500"
              >
                <div className="flex items-center space-x-6">
                  <span>{category.icon}</span>
                  <span className="text-xs font-400">{category.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Categoric;
