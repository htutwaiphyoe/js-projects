import { footerLinks } from "@/data/constant";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__rights">
          <Logo />
          <p className="text-base text-gray-500">
            Carhub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              {item.links.map((link) => (
                <Link href={link.url} key={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights">
        <p>@2023 CarHub.</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
