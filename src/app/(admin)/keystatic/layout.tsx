import "@apee/app/(website)/globals.css";
import KeystaticApp from "./keystatic";

export default function RootLayout() {
  return (
    <html>
      <head />
      <body className="dark">
        <KeystaticApp />
      </body>
    </html>
  );
}
