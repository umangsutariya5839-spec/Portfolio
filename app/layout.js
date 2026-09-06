import "./globals.css";

export const metadata = {
  title: "Umang Sutarsandhiya — Computer Engineer",
  description:
    "Portfolio of Umang Sutarsandhiya, a 2026 computer engineering graduate from Gujarat Technological University working in web development and data analysis.",
  openGraph: {
    title: "Umang Sutarsandhiya — Computer Engineer",
    description: "Web development and data analysis. Projects, education and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
