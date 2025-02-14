import "./global.css";
export const metadata = {
  title: "Acorn Appraisal Services",
  description: "Home appraisal services in southeast Michigan.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Accorn Appraisal Services</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <noscript>
          <form name="contact" data-netlify="true" hidden>
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Phone" />
            <textarea name="Message"></textarea>
          </form>
        </noscript>
      </body>
    </html>
  );
}
