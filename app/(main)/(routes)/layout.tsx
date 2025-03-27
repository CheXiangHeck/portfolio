import { NavigationTop } from "@/components/(navigation)/navigation-top/navigation-top";
import { ModeToggle } from "@/components/Theme Changer/ThemeButton";
import { Footer } from "@/components/footer/footer";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex flex-col items-center overflow-x-hidden scrollbarhidden">
      <div className=" fixed h-[50px] w-full z-10 header-main">
        <NavigationTop />
      </div>
      <main className="w-full">{children}</main>
      <div className="w-full footer-main">
        <Footer />
      </div>
      <div className="absolute bottom-0 right-0 dark:bg-transparent bg-zinc-200 m-4 rounded-md w-[50px] h-[50px] flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Main;
