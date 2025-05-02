import Ipohne14 from "@/public/Iphone14.png";
import Samsung from "@/public/SAMSUNG.jpg";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";

export const images = [
  {
    icona: <FaApple size={45} />,
    src: Ipohne14,
    alt: "ipohne",
    width: 300,
    height: 200,
    name: "Ipohne 14 Series",
    description: "Up to 10% off Voucher",
  },
  {
    icona: <SiSamsung size={45} />,
    src: Samsung,
    alt: "samsung",
    name: "Samsung Galaxy S9",
    description: "Up to 20% off Voucher",
  },
];
