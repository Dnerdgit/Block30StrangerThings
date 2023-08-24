import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        Stranger's Things
      </Link>
      <ul>
        <>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/posts">POSTS</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/logOut">LOG OUT</Link>
          </li>
        </>
      </ul>
    </nav>
  );
}
