import './globals.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import UrabanitoNavBar from '@/components/layout/UrabanitoNavBar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UrabanitoNavBar />
          {children}
          <footer className='bg-slate-500 mt-5 w-full bottom-1 flex'>
            <div className='flex items-center'>@Copyright</div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
