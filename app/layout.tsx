import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import AppLayout from "@sid/src/Components/Layout/AppLayout";
import customTheme from "@sid/src/utils/customTheme";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title:
    "Reliable Gas Stove Repair Services in Bangalore &amp; Hyderabad | Gas Stove Care",
  description:
    "Gas Stove Care provides expert repair services for all major brands, including Elica, Faber, and Glen. Book your service today for quick solutions to burner repairs and gas leaks. Trust us for quality service in Bangalore and Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={customTheme}>
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
