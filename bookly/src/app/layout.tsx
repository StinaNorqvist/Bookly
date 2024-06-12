import Link from "next/link";

const navLinks = [
  { name: "Books", href: "/books" },
  { name: "About", href: "/about" },
  { name: "Profile", href: "/profile" },
];

export const metadata = {
  title: "Bookly",
  description: "Explore your next adventure and structure your reads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {navLinks.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}

        {children}
      </body>
    </html>
  );
}
