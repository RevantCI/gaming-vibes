import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" alt="rupee" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/guides">Guides</Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" alt="banner" width={966} height={276} />
      </div>
    </div>
  );
}