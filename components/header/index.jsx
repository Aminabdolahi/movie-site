import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-purple-950 h-[10vh] flex justify-center p-8 items-center">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex justify-start items-center gap-8 ">
            <li>
                <Link href={"/"} className="bg-orange-500 text-white transition-all duration-500 hover:scale-110 flex justify-center items-center w-20 h-10 hover:text-white text-[36px] rounded-md">خانه</Link>
            </li>
            <li>
                <Link href={"/movies"} className="bg-orange-500 text-white transition-all duration-500 hover:scale-110 flex justify-center items-center w-20 h-10 hover:text-white text-[36px] rounded-md">فیلم ها</Link>
            </li>
           
          </ul>
        </nav>
        <Link href={"/"} className="text-white text-[40px] ">Cinema </Link>
      </div>
    </header>
  );
};

export default Header;
