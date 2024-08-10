import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="absolute z-10 w-full">
        <div className="flex p-4 text-zinc-50">
          <p>Mon – Sun: 9.00 am – 8.00pm</p>
          <p className="ml-auto border-r-2 ">info@igual.com</p>
          <p>4b, Walse Street , USA</p>
        </div>

        <ul className="w-full flex justify-around items-center border-y-2 border-secondary p-4">
          <li className="border-r-2">
            <Image src={logo} alt="logo" className="size-10" />
          </li>
          <li className="cursor-pointer text-zinc-50">Home</li>
          <li className="cursor-pointer text-zinc-50">About Us</li>
          <li className="cursor-pointer text-zinc-50">Features</li>
          <li>
            <button className="flex justify-center items-center border-2 border-secondary">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus size-7"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#b9967e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="bg-secondary text-zinc-50">Contact Us</div>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
