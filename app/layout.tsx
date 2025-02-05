import '../global.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from './components/analytics';
import ActiveSectionContextProvider from './context/active-section-context';

export const metadata: Metadata = {
  title: {
    default: 'Kchoe Portfolio',
    template: '%s | Kchoe Portfolio',
  },
  description: 'Software engineer using React and Typescript',
  openGraph: {
    title: 'Kchoe Portfolio',
    description: 'Software engineer using React and Typescript',
    url: '', //fill later
    siteName: 'Kchoe Portfolio',
    images: [
      {
        url: 'localhost:3000/favicon.ico', //fill later
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Analytics />
      </head>
      <ActiveSectionContextProvider>
        <body
          className={`bg-black ${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined} no-scrollbar`}
        >
          {children}
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
