import MegaMenu1 from "components/categories/mega-menu/mega-menu-1";
import MegaMenu2 from "components/categories/mega-menu/mega-menu-2";
import Car from "icons/Car";
import Man from "icons/Man";
import Gift from "icons/Gift";
import Food from "icons/Food";
import Pets from "icons/Pets";
import Dress from "icons/Dress";
import Woman from "icons/Woman";
import Laptop from "icons/Laptop";
import MakeUp from "icons/MakeUp";
import BabyBoy from "icons/BabyBoy";
import BabyGirl from "icons/BabyGirl";
import PlantPot from "icons/PlantPot";
import MotorBike from "icons/MotorBike";
import TeddyBear from "icons/TeddyBear";
import Microphone from "icons/Microphone";
export const categoryMenus = [
  {
    title: "Gifts",
    href: "#",
    component: MegaMenu2.name,
    children: [
      {
        title: "Fashion",
        href: "/products/search/fashion",
      },
    ],
  },
];
