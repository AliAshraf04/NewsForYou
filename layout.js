import './globals.css';
 
export const metadata = {
  title: 'News For You',
  description: 'Enjoy the news.',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}