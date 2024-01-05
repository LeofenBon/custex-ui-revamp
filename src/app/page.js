import Feed from "./components/feed";
import DesktopNav from "./components/navbars/desktopNav";
import SideBar from "./components/sideBar";

export default function Home() {
  return (
    <>
      <DesktopNav />
      <div className="flex flex-row sm:gap-10">
        <div className="relative sm:w-full sm:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            className="sidebar-state"
          />
          <label
            htmlFor="sidebar-mobile-fixed"
            className="sidebar-overlay"
          ></label>
          <SideBar />
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="btn-primary btn sm:hidden"
            >
              Open Sidebar
            </label>
          </div>
          <Feed />
        </div>
      </div>
    </>
  );
}
