import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          <p>Phone: (734) 453-7979</p>
          <p>Email: AcornAppraisal@Outlook.com</p>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
