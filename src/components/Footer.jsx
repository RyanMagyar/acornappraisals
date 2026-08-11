import { phone, email, pin } from "../app/public";
import Section from "./Section";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-color-1">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-5 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex gap-5 flex-wrap">
          <a
            href="https://www.google.com/maps?q=9169+Baywood+Dr,+Plymouth,+MI+48170"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <Image src={pin} alt="Pin Icon" className="w-5 h-5" />
            Plymouth, MI 48170
          </a>
          <a
            href="tel:+17347177851"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <Image src={phone} alt="Phone Icon" className="w-5 h-5" />
            Phone: (734) 717-7851
          </a>

          <a
            href="mailto:acornappraisal@outlook.com"
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <Image src={email} alt="Email Icon" className="w-5 h-5" />
            Email: AcornAppraisal@Outlook.com
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
