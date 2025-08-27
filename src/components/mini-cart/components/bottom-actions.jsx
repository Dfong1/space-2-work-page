import Box from "@mui/material/Box";
import Button from "@mui/lab/LoadingButton"; // ==============================================================
import { useAuth } from "@/hooks/auth/useAuth";

// ==============================================================
export default function BottomActions({ total, handleNavigate, sinStock, noActivo, isLoading }) {
  const { user } = useAuth();
  const button_label =
    user?.rol === "distributor" ? "Crear pedido" : "Proceder al pago"
  return (
    <Box p={2.5}>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        disabled={sinStock.length > 0 || noActivo.length > 0}
        loading={isLoading}
        sx={{
          mb: "0.75rem",
          height: "40px",
        }}
        onClick={handleNavigate("/checkout")}
      >
        {button_label} ({total})
      </Button>

      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{
          height: 40,
        }}
        onClick={handleNavigate("/cart")}
      >
        Ver carrito
      </Button>
    </Box>
  );
}
