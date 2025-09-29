import React from "react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b bg-gray-800 to-gray-900  min-h-screen ">
      <nav className="bg-slate-800 p-8 text-white flex items-center justify-between shadow-xl sticky top-0 z-50 ">
        <h1 className="text-3xl font-bold">Tugas 2</h1>
        <ul className="flex gap-8 text-lg mr-20">
          <li className="hover:text-blue-300 cursor-pointer transition hover:bg-">
            Home
          </li>
          <li className="hover:text-blue-300 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-blue-300 cursor-pointer transition">
            Skills
          </li>
          <li className="hover:text-blue-300 cursor-pointer transition">
            Portfolio
          </li>
          <li className="hover:text-blue-300 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </nav>
        <div></div>
      <div className="grid grid-cols-2 items-center text-white px-20 h-[calc(100vh-80px)]">
        <div>
          <h2 className="text-4xl font-bold">Hello, It's Me</h2>
          <h1 className="text-6xl font-bold text-cyan-300 mt-2">
            Daniel Abraham Tangkelayuk
          </h1>
          <h3 className="text-4xl mt-2 text-cyan-400 text-shadow-cyan-800">And I am an Okta Student</h3>
          <p className="text-4xl mt-4 text-gray-300">I am from my mother </p>
          <button
            className="mt-6 px-6 py-3 h-15  hover:cursor-pointer bg-gradient-to-b bg-cyan-300 to-cyan-400 text-bold shadow-[0_0_40px_5px_rgba(0,255,255,0.8)]
 text-white rounded-full  hover:bg-cyan-300 hover:shadow-[0_0_50px_10px_rgba(0,255,255,0.8)] transition hover:-translate-y-1   "
          >
            {" "}
            More About Me
          </button>
          <div className="flex mt-6">
            {/*  Instagram logo */}
            <div className="h-10 w-10 mt-4  border-2 border-cyan-400 p-2 hover:cursor-pointer  rounded-full flex items-center justify-center ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0fd2ab"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#45e8b2"
                  ></path>{" "}
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#45e8b2"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#45e8b2"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* whatsapp logo */}
            <div className="h-10 w-10 mt-4  border-2 border-cyan-400 p-2 hover:cursor-pointer  rounded-full flex items-center justify-center ml-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                    fill="#33e3e6"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                    fill="#33e3e6"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* tiktok logo */}
            <div className="h-10 w-10 mt-4  border-2 border-cyan-400 p-2 hover:cursor-pointer  rounded-full flex items-center justify-center ml-4">
              <svg
                fill="#3de9f5"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3de9f5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>tiktok</title>{" "}
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
                </g>
              </svg>
            </div>
            <div className="h-10 w-10 mt-4  border-2 border-cyan-400 p-2 hover:cursor-pointer  rounded-full flex items-center justify-center ml-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                    fill="#2dfbed"
                  ></path>{" "}
                  <path
                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                    fill="#2dfbed"
                  ></path>{" "}
                  <path
                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                    fill="#2dfbed"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                    fill="#2dfbed"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="relative w-120 h-120 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_40px_5px_rgba(0,255,255,0.8)] ">
            <img
              src="adney1.jpg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* bagian ke 2 */}
      <div id="about" className="grid grid-cols-2 gap-10 text-white p-35">
        <div className="flex justify-center m-top">
          <div
            className="relative w-120 h-120 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_60px_20px_rgba(255,255,255,0.7)]
] "
          >
            <img
              src="adney1.jpg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300  text-3xl leading-relaxed">
            Saya adalah salah satu murid di smk telkom makassar dan saya berada
            di kelas 11 Frontend untuk jurusan RPL. Saya sangat tertarik dengan
            dunia pemrograman, terutama dalam pengembangan web. Saya suka
            belajar teknologi baru dan selalu berusaha untuk meningkatkan
            keterampilan saya.
            <br />
            <br />
            selain coding saya juga suka bermain game, menonton film, dan . Saya
            percaya bahwa keseimbangan antara belajar dan hiburan sangat penting
            untuk menjaga semangat dan kreativitas.
          </p>
        </div>
      </div>
      {/* bagian ke 2 selesai */}
      {/* bagian ke 3 selesai */}
      <div className=" text-white flex items-center h-screen ">
        <div className="p-">
          <div className=" flex justify-center text-7xl p-30 font-bold text-cyan-300 ">
            My Skill
          </div>
          <div className="grid grid-cols-3  w-full text-2xl   ">
            {/* widget 1 */}
            <h1 className="p-10 m-10 h-150  bg-slate-800 rounded-2xl border-cyan-400 border-7 shadow-[0_0_40px_5px_rgba(0,255,255,0.7)] hover:-translate-y-3 transition-all duration-300 ease-in-out">
              <div className="h-20 w-20 m-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16 18L22 12L16 6M8 6L2 12L8 18"
                      stroke="#16ffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h1 className=" text-3xl">UI/UX DESIGN</h1>
              <p className="p-5">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button
                className="mt-6 px-6 py-3 h-15 w-full hover:cursor-pointer bg-gradient-to-b bg-cyan-300 to-cyan-400 text-bold shadow-[0_0_40px_5px_rgba(0,255,255,0.8)]
 text-white rounded-2xl  hover:bg-cyan-300 hover:shadow-[0_0_50px_10px_rgba(0,255,255,0.8)] transition hover:-translate-y-1  "
              >
                Contact me
              </button>
            </h1>{" "}
            {/* widget 2 */}
            <h1 className="p-10 m-10 h-150  bg-slate-800 rounded-2xl border-cyan-400 border-7 shadow-[0_0_40px_5px_rgba(0,255,255,0.7)] hover:-translate-y-3 transition-all duration-300 ease-in-out  ">
              <div className="h-20 w-20 m-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 3V14.8C6 15.9201 6 16.4802 6.21799 16.908C6.40973 17.2843 6.71569 17.5903 7.09202 17.782C7.51984 18 8.0799 18 9.2 18H15M21 18H18M18 21V9.2C18 8.0799 18 7.51984 17.782 7.09202C17.5903 6.71569 17.2843 6.40973 16.908 6.21799C16.4802 6 15.9201 6 14.8 6H9M3 6H6"
                      stroke="#16ffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h1 className=" text-3xl">Graphic DESIGN</h1>
              <p className="p-5">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button
                className="mt-6 px-6 py-3 h-15 w-full  hover:cursor-pointer bg-gradient-to-b bg-cyan-300 to-cyan-400 text-bold shadow-[0_0_40px_5px_rgba(0,255,255,0.8)]
 text-white rounded-2xl  hover:bg-cyan-300 hover:shadow-[0_0_50px_10px_rgba(0,255,255,0.8)] transition hover:-translate-y-1  "
              >
                Contact me
              </button>
            </h1>
            {/* widget 3 */}
            <h1 className="p-10 m-10 h-150  bg-slate-800 rounded-2xl border-cyan-400 border-7 shadow-[0_0_40px_5px_rgba(0,255,255,0.7)]  hover:-translate-y-3 transition-all duration-300 ease-in-out  ">
              <div className="h-20 w-20 m-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z"
                      fill="#16ffff"
                    ></path>{" "}
                    <path
                      d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z"
                      fill="#16ffff"
                    ></path>{" "}
                    <path
                      d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z"
                      fill="#16ffff"
                    ></path>{" "}
                    <path
                      d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z"
                      fill="#16ffff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h1 className=" text-3xl">Frontend Dev</h1>
              <p className="p-5">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button
                className="mt-6 px-6 py-3 h-15  w-full hover:cursor-pointer bg-gradient-to-b bg-cyan-300 to-cyan-400 text-bold shadow-[0_0_40px_5px_rgba(0,255,255,0.8)]
 text-white rounded-2xl  hover:bg-cyan-300 hover:shadow-[0_0_50px_10px_rgba(0,255,255,0.8)] transition hover:-translate-y-1  "
              >
                Contact me
              </button>
            </h1>
          </div>
        </div>  
      </div>
      {/* bagian ke 3 selesai */}
      <div className="h-screen">
        <div>
          <h1 className=" flex justify-center text-7xl p-30 font-bold text-cyan-300 ">
            my skill
          </h1>
        </div>
        {/* progressbar 1 */}
        <div className=" grid grid-cols-2  text-white p-20">
          <div className="space-y-8">
            {/* HTML */}
            <div>
              <div className="flex items-center mb-2">
                <img  
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold text-lg">HTML</span>
              </div>
              <div className="flex items-center">
                <div className="w-100 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    90%
                  </span>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold text-lg">CSS</span>
              </div>
              <div className="flex items-center">
                <div className="w-100 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    60%
                  </span>
                </div>
              </div>
            </div>
            {/* Javascript */}
            <div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JS"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold text-lg">Javascript</span>
              </div>
              <div className="flex items-center">
                <div className="w-100 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    45%
                  </span>
                </div>
              </div>
            </div>
            {/* Python */}
            <div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold text-lg">Python</span>
              </div>
              <div className="flex items-center">
                <div className="w-100 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    50%
                  </span>
                </div>
              </div>
            </div>
            {/* React */}
            <div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold text-lg">React</span>
              </div>
              <div className="flex items-center">
                <div className="w-100 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
