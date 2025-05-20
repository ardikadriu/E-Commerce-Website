"use client";
import { SetStateAction, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import Image from "next/image";
import Qrcode from "@/public/QR code.png";

const Footer = ({ onSend }: { onSend?: (email: string) => void }) => {
  const [email, setEmail] = useState("");
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSend = () => {
    if (email.trim()) {
      if (onSend) {
        onSend(email);
      } else {
        console.log("Sending email:", email);
      }
      setEmail("");
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <div className="flex justify-center bg-black text-white ">
      <div className="w-[80%] py-20 flex justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2">Exclusive</h3>
          <p className="mb-1">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>

          <div className="border border-white w-[217px] rounded-md flex items-center">
            <input
              value={email}
              onChange={handleChange}
              type="email"
              className="outline-none pl-2 py-2"
              placeholder="Enter your email"
            />{" "}
            <AiOutlineSend
              size={24}
              className="hover:cursor-pointer"
              onClick={handleSend}
            />{" "}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <p className="text-sm mb-2">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-2">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3 className="font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Download App</h3>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>{" "}
          <div className="flex gap-2 mb-2">
            <Image
              src={Qrcode}
              className="w-20 "
              alt="qr code
            "
            />
            <div className="flex flex-col gap-2 ">
              <div className="flex border items-center px-1 ">
                {" "}
                <FaGooglePlay size={35} />
                <div>
                  <p className="text-[11px]">Get it on</p>
                  <h2>Google Play</h2>
                </div>
              </div>
              <div className="flex border items-center px-1 ">
                <FaApple size={30} />
                <div>
                  <p className="text-[11px]">Download on the </p>
                  <h2>Play Store</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <FaFacebookF size={24} className="hover:cursor-pointer" />
            <FaTwitter size={24} className="hover:cursor-pointer" />
            <FaInstagram size={24} className="hover:cursor-pointer" />
            <FaLinkedinIn size={24} className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
