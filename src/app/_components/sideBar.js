import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="sidebar fixed left-0 sidebar-mobile sm:top-[60.75px] pb-12 h-full w-60 max-sm:fixed max-sm:-translate-x-full text-black dark:text-white bg-primaryLight dark:bg-primaryDark">
      <section className="sidebar-content overflow-hidden hover:overflow-y-auto">
        <nav className="menu rounded-md max-w-56">
          <section className="menu-section">
            <ul className="menu-items">
              <Link href="/">
                <li className="menu-item text-black dark:text-yellow-500">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="-3 2 21 17"
                    version="1.1"
                    className="h-6 w-6 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      strokeWidth="1"
                      fill="currentColor"
                      stroke="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-341.000000, -720.000000)"
                        fill="currentColor"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path d="M299.875,576.21213 C299.875,576.76413 299.399,577.00013 298.8125,577.00013 L297.75,577.00013 C297.1635,577.00013 296.6875,576.76413 296.6875,576.21213 L296.6875,575.21213 C296.6875,574.10713 295.736562,573.00013 294.5625,573.00013 L292.4375,573.00013 C291.263438,573.00013 290.3125,574.10713 290.3125,575.21213 L290.3125,576.21213 C290.3125,576.76413 289.8365,577.00013 289.25,577.00013 L288.1875,577.00013 C287.601,577.00013 287.125,576.76413 287.125,576.21213 L287.125,568.14913 C287.125,568.01613 287.181312,567.88913 287.280125,567.79513 L292.738188,562.65913 C293.153625,562.26813 293.826188,562.26813 294.240563,562.65913 L299.719875,567.81513 C299.818688,567.90913 299.875,568.03613 299.875,568.16813 L299.875,576.21213 Z M302,567.62513 C302,567.36013 301.888438,567.10713 301.690812,566.91913 L294.998125,560.58913 C294.169375,559.80613 292.823188,559.80313 291.99125,560.58313 L285.312375,566.84813 C285.112625,567.03613 285,567.29013 285,567.55613 L285,577.21213 C285,578.31713 285.950938,579.00013 287.125,579.00013 L290.3125,579.00013 C291.486562,579.00013 292.4375,578.31713 292.4375,577.21213 L292.4375,576.21213 C292.4375,575.66013 292.9135,575.21213 293.5,575.21213 C294.0865,575.21213 294.5625,575.66013 294.5625,576.21213 L294.5625,577.21213 C294.5625,578.31713 295.513438,579.00013 296.6875,579.00013 L299.875,579.00013 C301.049062,579.00013 302,578.31713 302,577.21213 L302,567.62513 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="text-lg font-bold">For You</span>
                </li>
              </Link>
              <Link href="/trending">
                <li className="menu-item text-black dark:text-white">
                  <svg
                    width="23px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-lg font-bold">Trending</span>
                </li>
              </Link>
              <Link href="/following">
                <li className="menu-item text-black dark:text-white">
                  <svg
                    fill="currentColor"
                    className="h-6 w-6 opacity-75"
                    width="30px"
                    height="30px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 328 375"
                  >
                    <g>
                      <path
                        d="M52.25,64.001c0,34.601,28.149,62.749,62.75,62.749c34.602,0,62.751-28.148,62.751-62.749
		                  S149.602,1.25,115,1.25C80.399,1.25,52.25,29.4,52.25,64.001z"
                      />
                      <path
                        d="M217.394,262.357c2.929,2.928,6.768,4.393,10.606,4.393c3.839,0,7.678-1.465,10.607-4.394
                      c5.857-5.858,5.857-15.356-0.001-21.214l-19.393-19.391l19.395-19.396c5.857-5.858,5.857-15.356-0.001-21.214
                      c-5.858-5.857-15.356-5.856-21.214,0.001l-30,30.002c-2.813,2.814-4.393,6.629-4.393,10.607c0,3.979,1.58,7.794,4.394,10.607
                      L217.394,262.357z"
                      />
                      <path
                        d="M15,286.75h125.596c19.246,24.348,49.031,40,82.404,40c57.896,0,105-47.103,105-105
                      c0-57.896-47.104-105-105-105c-34.488,0-65.145,16.716-84.297,42.47c-7.764-1.628-15.695-2.47-23.703-2.47
                      c-63.411,0-115,51.589-115,115C0,280.034,6.716,286.75,15,286.75z M223,146.75c41.355,0,75,33.645,75,75s-33.645,75-75,75
                      s-75-33.645-75-75S181.644,146.75,223,146.75z"
                      />
                    </g>
                  </svg>
                  <span className="text-lg font-bold">Following</span>
                </li>
              </Link>
              <Link href="/explore">
                <li className="menu-item text-black dark:text-white">
                  <svg
                    fill="currentColor"
                    className="h-6 w-6 opacity-75"
                    width="30px"
                    height="30px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.7,14.7,28,28,14.7,34.7a1.1,1.1,0,0,1-1.4-1.4L20,20l13.3-6.7A1.1,1.1,0,0,1,34.7,14.7ZM24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z" />
                        <path d="M24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z" />
                      </g>
                    </g>
                  </svg>
                  <span className="text-lg font-bold">Explore</span>
                </li>
              </Link>
              <Link href="/categories">
                <li>
                  <label className="menu-item justify-between">
                    <div className="flex gap-2 text-black dark:text-white">
                      <svg
                        fill="currentColor"
                        className="h-6 w-5 opacity-75"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -4 51 50"
                      >
                        <path d="M 5 5 C 2.242188 5 0 7.242188 0 10 L 0 39 C 0 41.757813 2.242188 44 5 44 L 21 44 C 22.652344 44 24 45.347656 24 47 L 24 10 C 24 7.242188 21.757813 5 19 5 Z M 31 5 C 28.242188 5 26 7.242188 26 10 L 26 47 C 26 45.347656 27.347656 44 29 44 L 45 44 C 47.757813 44 50 41.757813 50 39 L 50 10 C 50 7.242188 47.757813 5 45 5 Z" />
                      </svg>
                      <span className="text-lg font-bold">Categories</span>
                    </div>
                  </label>
                </li>
              </Link>
              <Link href="/profile">
                <li>
                  <label className="menu-item justify-between">
                    <div className="flex gap-2 text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-lg font-bold">Profile</span>
                    </div>
                  </label>
                </li>
              </Link>
              <Link href="/login">
                <li className="menu-item text-black dark:text-mutedDarkFont flex flex-col items-center justify-center mt-6">
                  <div className="text-[15px] font-medium leading-snug">
                    Log in to create or like CustExes, Alternatives, Review
                    videos, and follow creators
                  </div>
                  <button className="bg-mutedDark	hover:bg-[#353124] hover:opacity-95 py-2 px-5 rounded font-medium w-full border border-yellow-500 text-yellow-500 mt-3">
                    Login
                  </button>
                </li>
              </Link>
            </ul>
          </section>
          <div className="divider pl-4 mb-1"></div>
          <section className="menu-section">
            <ul className="menu-items inline flex-row inline-flex flex-wrap pl-4">
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs hover:underline">
                  What is CustEx?
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs hover:underline">
                  FAQ's
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs hover:underline">
                  News
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs hover:underline">
                  Terms
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </section>
          <section className="menu-section">
            <ul className="menu-items inline flex-row inline-flex flex-wrap pl-4">
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs mr-2 hover:underline">
                  Community Guidelines
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs mr-2 hover:underline">
                  Personal Creators {"the 99%"} Benefits
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs mr-2 hover:underline">
                  Organization {"the 1%"} Benefits
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs mr-2 hover:underline">
                  Privacy
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/about" className="text-xs mr-2 hover:underline">
                  How We Pick Topics
                </Link>
              </li>
            </ul>
          </section>
          <div className="divider pl-4 mt-1 mb-1"></div>
          <section className="menu-section">
            <ul className="menu-items inline flex-row inline-flex flex-wrap pl-4">
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li className="text-black dark:text-mutedDarkFont font-medium inline flex inline-flex">
                <Link href="/social" className="text-xs mr-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <div className="divider pl-4"></div>
          </section>
        </nav>
      </section>
    </aside>
  );
}
