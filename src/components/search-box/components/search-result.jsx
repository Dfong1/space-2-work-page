import Link from "next/link";
import MenuItem from "@mui/material/MenuItem"; // STYLED COMPONENT

import { SearchResultCard } from "../styles"; // ==============================================================

// ==============================================================
export default function SearchResult({ results }) {
  return (
    <SearchResultCard elevation={2}>
      {results.map((item, index) => (
        <Link href={`/products/${item?.slug}`} key={index}>
          <MenuItem key={item?.product_ecommerce_id}>{item?.name}</MenuItem>
        </Link>
      ))}
    </SearchResultCard>
  );
}
