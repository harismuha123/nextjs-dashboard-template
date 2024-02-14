import '@/app/ui/global.css';
import { sourceSansPro } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} antialiased`}>{children}</body>
    </html>
  );
}
