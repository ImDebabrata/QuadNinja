import style from "../../sass/navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/signup">Chat</Link>
    </div>
  );
};

export default Navbar;
