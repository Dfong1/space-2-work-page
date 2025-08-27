"use client";

import { Fragment, useCallback, useState } from "react"; // GLOBAL CUSTOM COMPONENTS

import Sticky from "@/components/sticky";
import { Navbar } from "@/components/navbar";
import { Footer1 } from "@/components/footer";
import Header from "@/components/header/header";

import { MobileNavigationBar } from "@/components/mobile-navigation";

/**
 *  USED IN:
 *  1. MARKET-1, MARKET-2, GADGET, FASHION-1, FASHION-2, FASHION-3, FURNITURE, GROCERY-3, GIFT
 *  2. PRODUCT DETAILS, PRODUCT-SEARCH, ORDER-CONFIRMATION
 *  5. SHOPS, SHOP-DETAILS
 */

export default function MainLayout({ children, categories = [], products =[], fullcategories=[] }) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  const [dialogSoonOpen, setDialogSoonOpen] = useState(false);

  return (
    <Fragment>
      {/* TOP BAR SECTION */}
      {/* <Topbar /> */}
      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header
          categories={categories}
          setDialogSoonOpen={setDialogSoonOpen}
          isFixed={isFixed}
          midSlot={<></>}
          products={products}
          fullcategories={fullcategories}
        />
      </Sticky>
      {/* NAVIGATION BAR */}
      <Navbar elevation={0} border={1} categories={categories} />
      {/* BODY CONTENT */}
      {children}
      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar setDialogSoonOpen={setDialogSoonOpen} />
      {/* FOOTER */}
      <Footer1 />
    </Fragment>
  );
}
