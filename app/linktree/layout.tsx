import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Linktree — OS Code IIIT Dharwad",
  description:
    "Connect with OS Code IIIT Dharwad on Instagram, LinkedIn, WhatsApp, and Discord. Find all our social links in one place.",
  icons: {
    icon: "/oscode.ico",
  },
}

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
