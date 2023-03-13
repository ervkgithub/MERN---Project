/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  return (
    <footer>
    <div class="flex justify-center  ">
      <nav class="self-center w-full">
        <div class="flex flex-col lg:flex-row justify-around items-center ">
          <h1 class="uppercase pl-5 py-4 text-lg font-sans font-bold">
            Footer Logo
          </h1>
          <ul class="hidden lg:flex items-center text-[18px] font-semibold pl-32">
            <li class="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="#">Home</a>
            </li>
            <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="#">About</a>
            </li>
            <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="#">Clients</a>
            </li>
            <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="#">Projects</a>
            </li>
          </ul>
          <div class=" text-center text-base pr-5  inline-flex">
            {" "}
            <a
              href="#"
              class="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
            >
              <i class="fa fa-twitter"></i>
            </a>{" "}
            <a
              href="#"
              class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i class="fa fa-instagram"></i>
            </a>{" "}
            <a
              href="#"
              class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i class="fa fa-facebook"></i>
            </a>{" "}
            <a
              href="#"
              class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i class="fa fa-google"></i>
            </a>{" "}
            <a
              href="#"
              class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i class="fa fa-linkedin"></i>
            </a>{" "}
          </div>
        </div>
      </nav>
    </div>
  </footer>
  )
}

export default Footer