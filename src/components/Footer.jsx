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
          <p className="flex items-center gap-2">
            <img src={pin} alt="Pin Icon" className="w-5 h-5" />
            Plymouth, MI 48170
          </p>
          <p className="flex items-center gap-2">
            <img src={phone} alt="Phone Icon" className="w-5 h-5" />
            Office: (734) 453-7979
          </p>
          <p className="flex items-center gap-2">
            <img src={phone} alt="Phone Icon" className="w-5 h-5" />
            Cell: (734) 717 7851
          </p>
          <p className="flex items-center gap-2">
            <img src={email} alt="Email Icon" className="w-5 h-5" />
            Email: AcornAppraisal@Outlook.com
          </p>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
