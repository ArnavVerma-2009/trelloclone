import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Taskify',
  description: "Align your ideas using Taskify and increase your productivity",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      afterSignInUrl="/"
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" />
        </head>
        <body className={cn(inter.className, "bg-white dark:bg-neutral-900")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            storageKey="032iod98"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
