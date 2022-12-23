import { baseUrl } from "../../pages/api";
import style from "../../sass/navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link target={"_blank"} href={`${baseUrl}/chat`}>
        Chat
      </Link>
      <button onClick={() => localStorage.clear()}>LogOut</button>
    </div>
  );
};

export default Navbar;
