import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;