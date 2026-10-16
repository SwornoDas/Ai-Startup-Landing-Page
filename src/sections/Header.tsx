import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
            <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="border py-2 px-3 rounder-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">Join waitlist</button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
