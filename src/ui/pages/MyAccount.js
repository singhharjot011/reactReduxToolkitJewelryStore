import { Link } from "react-router-dom";
import Checkmark from "../icons/Checkmark";
import ChatIcon from "../icons/ChatIcon";
import AppointmentIcon from "../icons/AppointmentIcon";
import SupportIcon from "../icons/SupportIcon";
import GiftIcon from "../icons/GiftIcon";

function MyAccount() {
  return (
    <>
      <section id="my-account" className="flex flex-col gap-y-4 px-10">
        <h2 className="p-4 text-center text-2xl md:text-4xl">My Account</h2>
        <div className="flex w-full flex-col gap-2 bg-biege p-4 md:flex-row">
          <div className="flex  bg-white p-3 md:w-1/2">
            <form
              className="flex flex-col items-center justify-center space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-xl md:text-3xl">Login</h2>
              <p className="w-2/3 text-center text-lg md:text-xl">
                Sign-in to view your recent purchases or wishlist and manager
                your personal details.
              </p>

              <div className="flex w-full flex-col items-center space-y-5 text-sm md:text-lg">
                <div className="flex space-x-2 md:w-2/3">
                  <label htmlFor="email-address" className="w-1/5">
                    Email
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    className="w-2/3 rounded-lg border px-2 focus:outline-1 focus:outline-stone-400 active:outline-stone-600"
                    rows="2"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="flex space-x-2 md:w-2/3">
                  <label htmlFor="password" className="w-1/5">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-2/3 rounded-lg border px-2 focus:outline-1 focus:outline-stone-400 active:outline-stone-600"
                    rows="2"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <Link className="text-xs text-stone-500 underline">
                  Forgot your password?
                </Link>
                <div className="flex w-full flex-col items-center justify-center space-y-4">
                  <Link
                    to="/"
                    className=" bg-black p-2 text-center text-xl text-biege transition-colors duration-500 hover:bg-biege hover:text-black md:w-1/4"
                  >
                    <span>Register</span>
                  </Link>
                </div>
              </div>
            </form>
            <div></div>
          </div>
          <div className="flex items-center justify-center bg-white p-3 md:w-1/2">
            <div className="flex flex-col items-center justify-evenly space-y-2">
              <h2 className="text-xl md:text-3xl">
                Join the React Jewels Team
              </h2>
              <p className=" text-center text-lg md:text-xl">
                Be in the know with the React Jewels
              </p>

              <div className="flex w-full flex-col items-center space-y-5">
                <h4 className="text-base md:text-lg">Create an account to:</h4>
                <span className="flex text-xs md:text-sm">
                  <Checkmark height="20px" />
                  Benefits of exclusive members
                </span>
                <span className="flex text-xs md:text-sm">
                  <Checkmark height="20px" />
                  Stay up to date of trends and new collections
                </span>
                <span className="flex text-xs md:text-sm">
                  <Checkmark height="20px" />
                  Receive invites to VIP events
                </span>
                <div className="flex w-full flex-col items-center justify-center space-y-4">
                  <Link
                    to="/"
                    className=" w-max  bg-biege p-2 text-center  text-xl text-black transition-colors duration-500 hover:bg-black hover:text-biege"
                  >
                    <span>Join the Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 ">
          <h3 className="p-3 text-4xl">Services</h3>
          <div className="flex w-full flex-col justify-evenly gap-10 md:flex-row">
            <div className="flex flex-col space-y-3 text-center">
              <ChatIcon height={"50px"} />
              <h3 className="text-lg uppercase md:text-xl">
                Customer Service Chat
              </h3>
              <p className="text-xs md:text-base">Need help?</p>
              <p className="text-xs md:text-base">
                Reach us at 905-999-xxxx, we're here to serve you 24*7
              </p>
            </div>
            <div className="flex flex-col space-y-3 text-center">
              <AppointmentIcon height={"50px"} />
              <h3 className="text-lg uppercase md:text-xl">
                Book in store Appointment
              </h3>
              <p className="text-xs md:text-base">
                Book personalised consultation with our expert salesperson
              </p>
            </div>
            <div className="flex flex-col space-y-3 text-center">
              <SupportIcon height={"50px"} />
              <h3 className="text-lg uppercase md:text-xl">Customer Service</h3>

              <p className="text-xs md:text-base">
                Explore answers to FAQ, or connect with our support line.
              </p>
            </div>
            <div className="flex flex-col space-y-3 text-center">
              <GiftIcon height={"50px"} />
              <h3 className="text-lg uppercase md:text-xl">Gift Service</h3>
              <p className="text-xs md:text-base">
                Add your personalised touch
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
