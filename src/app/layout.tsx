import './globals.css'


export const metadata = {
  title: 'Yotfil - Portafolio',
  description: 'this is my web',
  keywords: 'portfolio, web development, projects, technologies, contact, software development',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
