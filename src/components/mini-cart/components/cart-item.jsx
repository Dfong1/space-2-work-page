import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "@/components/flex-box";
import { H6, Tiny } from "@/components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "@/helpers"; // CUSTOM DATA MODEL
import { Skeleton } from "@mui/material";

// ==============================================================
export default function MiniCartItem({ item, handleCartAmountChange, sinStock, isLoading, noActivo }) {

  const isNoStock = sinStock?.id === item.id;
  const isNoActive = noActivo?.id === item.id;

  console.log(isNoActive)
  return (
    <FlexBox
      py={2}
      px={2.5}
      key={item.id}
      alignItems="center"
      border={"1px solid"}
      borderColor={ isNoStock ? "red" : isNoActive ? "red" : "divider" }

    >
      <FlexBox alignItems="center" flexDirection="column">
        <Button
          size="small"
          color="primary"
          variant="outlined"
          disabled={isNoStock || isNoActive}
          onClick={handleCartAmountChange(item.qty + 1, item)}
          sx={{
            height: 28,
            width: 28,
            borderRadius: 50,
          }}
        >
          <Add fontSize="small" />
        </Button>

        <H6 my="3px">{item.qty}</H6>

        <Button
          size="small"
          color="primary"
          variant="outlined"
          disabled={item.qty === 1}
          onClick={handleCartAmountChange(item.qty - 1, item)}
          sx={{
            height: 28,
            width: 28,
            borderRadius: 50,
          }}
        >
          <Remove fontSize="small" />
        </Button>
      </FlexBox>

      { isLoading ? (<Skeleton variant="circular" width={75} height={75} />) : (<Link href={`/products/${item.slug}`}>
        <Avatar
          alt={item.name}
          src={item.imgUrl}
          sx={{
            mx: 1,
            width: 75,
            height: 75,
          }}
        />
      </Link>)}

      <Box
        flex="1"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
      >
        { isLoading ? (<Skeleton variant="text" width="100%" height={25} />) :  
        (<Link href={`/products/${item.slug}`}>
          <H6 ellipsis className="title">
            {item.name}
          </H6>
        </Link>)}
        { isLoading ? (<Skeleton variant="text" width="10%" height={25} />) : 
        (<Tiny color="grey.600">
          {item.type === "simple" ? "" : item.variantName}
        </Tiny>)}
        { !isLoading && <br />}
        { isLoading ? (<Skeleton variant="text" width="80%" height={25} />) : 
        (<Tiny color="grey.600">
          {currency(item.price)} x {item.qty}
        </Tiny>)}

        { isLoading ? (<Skeleton variant="text" width="100%" height={25} />) : 
        (<H6 color="primary.main" mt={0.5}>
          {currency(item.qty * item.price)}
        </H6>)}

        { isNoStock && (<Tiny color="red">Este producto no tiene stock</Tiny>)}
        { isNoActive && (<Tiny color="red">Este producto no está disponible</Tiny>)}
      </Box>

      <IconButton
        size="small"
        onClick={handleCartAmountChange(0, item)}
        sx={{
          marginLeft: 2.5,
        }}
      >
        <Close fontSize="small" color={ isNoStock ? "primary" : isNoActive ? "primary" : "action" } />
      </IconButton>
    </FlexBox>
  );
}
