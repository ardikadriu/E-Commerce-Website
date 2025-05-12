import NorthCoat from "@/public/Coat.png";
import GucciBag from "@/public/gucci-bag.png";
import CpuCooler from "@/public/CpuCooler.png";
import BookSelf from "@/public/BookShelf.png";
import TheRatting from "../components/TheRatting";

export const ThisMonthBest = [
  {
    src: NorthCoat,
    alt: "coat",
    name: "The north coat",
    price: "260$",
    discountprice: "$360",
    Rates: <TheRatting />,
  },
  {
    src: GucciBag,
    alt: "bag",
    name: "Gucci duffle bag",
    price: "960$",
    discountprice: "$1160",
    Rates: <TheRatting />,
  },
  {
    src: CpuCooler,
    alt: "coat",
    name: "RGB liquid CPU Cooler",
    price: "160$",
    discountprice: "$170",
    Rates: <TheRatting />,
  },
  {
    src: BookSelf,
    alt: "self",
    name: "Small BookSelf",
    price: "260$",
    discountprice: "$360",
    Rates: <TheRatting />,
  },
];
