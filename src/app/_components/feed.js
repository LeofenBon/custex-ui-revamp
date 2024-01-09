import VideoCard from "./videoCard";

export default function Feed() {
  return (
    <div className="my-4 grid grid-cols-2 gap-4 h-lvh">
      <VideoCard />
      {Array(5)
        .fill(5)
        .map((el, _i) => (
          <div
            key={_i}
            className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1 text-black dark:text-white bg-primaryLight dark:bg-primaryDark"
          >
            +
          </div>
        ))}
    </div>
  );
}
