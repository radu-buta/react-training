import { Link } from "react-router-dom";

export default function NavbarLink({ to, label }) {
  return (
    <Link to={to} style={{ marginInline: 8 }}>
      {label}
    </Link>
  );
}
