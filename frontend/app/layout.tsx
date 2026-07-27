import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CI/CD Demo",
  description: "Next.js frontend for the GitHub CI/CD demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
