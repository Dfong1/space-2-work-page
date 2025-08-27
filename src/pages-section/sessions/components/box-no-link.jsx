import Link from "next/link";
import Box from "@mui/material/Box"; // ==============================================================

// ==============================================================
export default function BoxNoLink({
  onClick = () => {},
  title,
  disabled = true,
}) {
  return (
    <Box
      onClick={onClick}
      component="span"
      fontWeight={600}
      borderColor={disabled ? "grey" : "grey.900"}
      borderBottom="1px solid"
      style={{
        cursor: "pointer",
        pointerEvents: disabled ? "none" : "auto",
        color: disabled ? "grey" : "inherit",
      }}
    >
      {title}
    </Box>
  );
}
