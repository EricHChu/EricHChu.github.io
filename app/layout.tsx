import type { Metadata } from 'next';
import "./globals.css";
import localFont from 'next/font/local'

/*const pN = localFont({
  src: [
    {
      path: '/fonts/proximanova_black.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/proximanova_blackit.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './ProximaNova/proximanova_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './ProximaNova/proximanova_boldit.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})*/

export const metadata: Metadata = {
  title: 'Eric Chu',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='font-proxima'>
      <head>
        <link rel='icon' href='./favicon.ico' sizes='any' />
      </head>
      <body>{children}</body>
    </html>
  );
}
