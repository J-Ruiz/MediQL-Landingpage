import "./globals.css";
import { GlobalContextProvider } from "../Context/store";

export const metadata = {
  title: "MediQL",
  description: "A GraphQL Visualizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </body>
      </html>
    </>
  );
}
