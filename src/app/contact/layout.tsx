import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact DigiWire Solutions",
  description: "Start a project, book a demo, or contact DigiWire for digital marketing, software development, automation, and branding solutions."
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
