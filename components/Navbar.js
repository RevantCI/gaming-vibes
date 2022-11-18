import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" alt="rupee" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
            {user && <li>{user.email}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Log Out
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" alt="banner" width={966} height={276} />
      </div>
    </div>
  );
}
