import VideoCard from "./_components/videoCard";

export default function Home() {
  return (
    <div className="h-[700px] snap-mandatory snap-y overflow-auto md:flex md:flex-col md:items-center mt-3">
      <div>
        {Array(20)
          .fill(5)
          .map((el, _i) => (
            <div className="md:ml-[-72px]">
              <div className="snap-center flex items-start">
                <div className="avatar md:avatar-lg hidden sm:block mt-3">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col grow ml-3 w-[624px]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex space-x-2 sm:space-x-0 items-center">
                      <div className="sm:avatar sm:hidden avatar-sm">
                        <img
                          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          alt="avatar"
                        />
                      </div>
                      <div className="text-lg mar-r dark:text-white">
                        John Doe
                      </div>
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-yellow-700 dark:text-white h-6">
                        {
                          [
                            "Celibrity",
                            "Ukraine Issue",
                            "Gun control",
                            "Poverty",
                          ][Math.floor(Math.random() * 3)]
                        }
                      </span>
                    </div>
                    <div>
                      <button className="hidden sm:block bg-mutedDark	hover:bg-[#353124] hover:opacity-95 py-1 px-5 rounded font-medium border border-yellow-500 text-yellow-500">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="md:max-w-[485px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                    <div
                      key={_i}
                      className="text-black dark:text-white rounded-lg"
                    >
                      <VideoCard />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        <div>End of feed</div>
        test
      </div>
    </div>
  );
}
