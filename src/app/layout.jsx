import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css';
import BootstrapClientInit from "@/components/bootsrap";


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <BootstrapClientInit/>
        {children}
        </body>
    </html>
  );
}
