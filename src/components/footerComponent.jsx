function Footer() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <footer class=" w-full flex items-center justify-center bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] ">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="w-10 h-10 rounded-full bg-yellow-500"
              alt="logo"
              src="images/logo1.png"
            />
            <span class="ml-3 text-xl font-bold text-white">
              Armughan's Portfolio
            </span>
          </a>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start gap-3">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/armughan-a86147363/",
                  "_blank"
                )
              }
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 512 512"
                strokeWidth={0}
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Linkedin
              </span>
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/armughan418/", "_blank")
              }
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#333] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#555]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .296c-6.63 0-12 5.372-12 12 0 5.304 3.438 9.801 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.764-1.605-2.665-.303-5.466-1.34-5.466-5.961 0-1.316.47-2.395 1.237-3.24-.135-.303-.54-1.524.105-3.177 0 0 1.005-.322 3.3 1.24a11.463 11.463 0 0 1 3-.405c1.02.005 2.04.137 3 .405 2.295-1.562 3.3-1.24 3.3-1.24.645 1.653.24 2.874.12 3.177.765.845 1.23 1.924 1.23 3.24 0 4.635-2.805 5.655-5.475 5.961.42.36.81 1.08.81 2.19 0 1.575-.015 2.85-.015 3.24 0 .315.18.69.795.57C20.565 22.092 24 17.596 24 12.296c0-6.628-5.37-12-12-12z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                GitHub
              </span>
            </button>

            <a
              href="https://wa.me/+923418609973"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-green-600 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-green-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 2.507.733 4.849 2 6.856l-1.3 4.738 4.866-1.278c1.936.97 4.095 1.484 6.434 1.484 6.63 0 12-5.373 12-12S18.63.297 12 .297zm5.675 15.117c-.24.68-1.404 1.3-1.926 1.367-.493.063-1.12.088-3.708-.788-3.12-1.055-5.14-4.48-5.29-4.695-.15-.215-1.26-1.68-1.26-3.2 0-1.515.793-2.26 1.073-2.58.28-.32.61-.4.81-.4.21 0 .42 0 .6.01.19.02.45-.07.71.53.26.6.89 2.09.97 2.24.08.15.14.33.03.53-.11.2-.17.32-.34.5-.17.18-.34.4-.49.53-.16.13-.33.28-.14.57.19.29.84 1.4 1.81 2.26 1.24 1.1 2.28 1.44 2.59 1.6.33.15.52.13.71-.07.19-.2.81-.94 1.03-1.27.22-.33.43-.27.72-.16.28.1 1.78.84 2.08.99.3.15.5.22.57.35.08.13.08.75-.15 1.43z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                WhatsApp
              </span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
