import "./globals.css";

export const metadata = {
  title: "Rush Message",
  description:
    "Rush message is a real-time chat app built with Firebase Firestore. It features instant message syncing across devices. This project demonstrates how to build scalable, real-time apps using Firestore’s powerful real-time listeners and cloud integration.",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
