import Image from "next/image"; // CUSTOM COMPONENTS

import { H5 } from "@/components/Typography";
import FlexRowCenter from "@/components/flex-box/flex-row-center"; // IMPORT IMAGES

import logo from "../../../../public/images/logo2.jpg";
export default function LogoWithTitle() {
  return (
    <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      <Image src={logo} width={150} alt="bazaar" />
      <H5 fontWeight={700}>Bienvenido a Pop Óptica</H5>
    </FlexRowCenter>
  );
}
