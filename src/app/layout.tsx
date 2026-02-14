import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Service Provider Management',
  description: 'Create and manage service providers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
