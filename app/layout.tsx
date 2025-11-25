import "./../styles/global.css";

export const metadata = {
  title: "AIVE Fiscal Sponsor",
  description: "Public Benefit Intelligence & Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
