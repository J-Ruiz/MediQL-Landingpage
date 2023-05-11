import './globals.css';

export const metadata = {
  title: 'MediQL',
  description: 'A GraphQL Visualizer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
