import { Nunito_Sans } from "next/font/google";

export const montserrat = Nunito_Sans({
  subsets: ["latin"],
}); // THEME PROVIDER


import { AuthProvider } from "@/contexts/AuthContext";
import CartProvider from "@/contexts/CartContext";
import SettingsProvider from "@/contexts/SettingContext";
import ThemeProvider from "@/theme/theme-provider";
import MainLayout from "@/components/layouts/main_layout/layout";

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <head>

      </head>
      <body>
        <MainLayout>
          <AuthProvider>
            <CartProvider>
              <SettingsProvider>
                <ThemeProvider>
                  {children}
                </ThemeProvider>
              </SettingsProvider>
            </CartProvider>
          </AuthProvider>
        </MainLayout>
      </body>
    </html>
  );
}
