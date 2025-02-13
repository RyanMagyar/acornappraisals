import { phone, email, pin } from "../assets";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-color-1">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          <a
            href="https://www.google.com/maps?q=9169+Baywood+Dr,+Plymouth,+MI+48170"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <img src={pin} alt="Pin Icon" className="w-5 h-5" />
            Plymouth, MI 48170
          </a>
          <a
            href="tel:+17344537979"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <img src={phone} alt="Phone Icon" className="w-5 h-5" />
            Office: (734) 453-7979
          </a>
          <a
            href="tel:+17347177851"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <img src={phone} alt="Phone Icon" className="w-5 h-5" />
            Cell: (734) 717 7851
          </a>

          <a
            href="mailto:AcornAppraisal@Outlook.com"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <img src={email} alt="Email Icon" className="w-5 h-5" />
            Email: AcornAppraisal@Outlook.com
          </a>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
