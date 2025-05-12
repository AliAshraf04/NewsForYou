import logo from '@/assets/logo.jpg';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="News For You logo" />
      <h1>Stay Informed with News For You</h1>
      <p>
        Welcome to <strong>News For You</strong> — your go-to source for timely, concise, and impartial news.
      </p>

      <p>
        Our mission is simple: deliver essential news in a clear, accessible format. No fluff, no bias — just the facts that matter most.
      </p>

      <p>
        Powered by a passionate team of journalists, we’re committed to keeping you in the loop with fair, accurate reporting on the latest headlines and events.
      </p>

      <p>
        <Link href="/news">Explore the latest updates</Link>
      </p>
    </div>
  );
}
