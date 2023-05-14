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
      <body className='overflow-hidden h-screen'>
        <div className='flex flex-row w-full h-full p-0'>
          <SideNavbar />
          <div className='w-full h-full bg-white'>
            <h1>Hello World</h1>
          </div>
        </div>
      </body>
    </html>
  )
}
