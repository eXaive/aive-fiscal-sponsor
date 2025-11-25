export const metadata = {
  title: "AIVE — Public Benefit Intelligence",
  description: "Public-benefit fiscal sponsorship landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
