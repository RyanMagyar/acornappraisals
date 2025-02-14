import "./global.css";
export const metadata = {
  title: "Acorn Appraisal Services",
  description: "Home appraisal services in southeast Michigan.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
