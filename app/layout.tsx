import './globals.css'
import Link from 'next/link'
import SideNavbar from './components/SideNavBar'
import LoginPage from './login/page'


export const metadata = {
  title: 'Bastec',
  description: 'Gestion de eventos deportivos',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="es">
      <head>
      <title>Bastec</title>
      </head>

      <body>
        <header>
          <nav>
           
          </nav>
        </header>
          {/*<SideNavbar />*/}

          

        {children}
        </body>
    </html>
  )
}
