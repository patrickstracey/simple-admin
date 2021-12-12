import { Link } from "react-router-dom";

const HeaderBar: React.FC = () => {
  return (
    <header>
      <nav className="nav-items">
        <Link to="/acls">ACLs</Link>
        <Link to="/bills">Bills</Link>
        <Link to="/chambers">Chambers</Link>
        <Link to="/classrooms">Classrooms</Link>
        <Link to="/discussions">Discussions</Link>
        <Link to="/flows">Flows</Link>
        <Link to="/parties">Parties</Link>
        <Link to="/presets">Presets</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
