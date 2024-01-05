export default function DesktopNav() {
  return (
    <div className="navbar sticky top-0 z-50 border-b-[1px] border-zinc-800 bg-primaryLight dark:bg-primaryDark">
      <div className="navbar-start">
        <a className="navbar-item text-3xl font-semibold text-black dark:text-white px-0">
          Cust<span className="text-yellow-500">Ex</span>
        </a>
      </div>
      <div className="navbar-center">
        <div className="form-group">
          <div className="form-control relative w-full">
            <input
              className="input input-rounded max-w-full search-background text-white"
              placeholder="What do you wish to improve today?"
            />

            <span className="md:inline-flex absolute hidden inset-y-0 right-4 text-content3 items-center">
              <span className="px-2">|</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-content3"
                fill="none"
                viewBox="0 0 50 50"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <button className="navbar-item bg-mutedDark	hover:bg-gray-100  py-2 px-5 rounded inline-flex font-medium items-center">
          <svg
            className="fill-current h-4 w-4  mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            />
          </svg>
          <span>Upload</span>
        </button>
        <button className="navbar-item bg-mutedDark	hover:bg-gray-100  py-2 px-5 rounded font-medium">
          Home
        </button>
      </div>
    </div>
  );
}
