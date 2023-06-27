import './globals.css'

export const metadata = {
  title: 'Age Calulator App',
  description: 'Made Wth Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
