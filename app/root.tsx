import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap",
  },
  // Preconnect to external image CDNs for faster loading
  { rel: "preconnect", href: "https://res.cloudinary.com" },
  { rel: "dns-prefetch", href: "https://images.pexels.com" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", href: "/logo.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Global Organization Schema for Rich Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "QualiPRO Consult",
              "alternateName": "QualiPRO",
              "url": "https://www.qualiproconsult.com",
              "logo": "https://www.qualiproconsult.com/logo.png",
              "image": "https://www.qualiproconsult.com/logo.png",
              "description": "QualiPRO Consult is a leading quality management and ISO consulting firm serving Ghana and Africa. We provide expert consulting for ISO 9001, ISO 17025, GMP compliance, and quality systems implementation.",
              "slogan": "Quality Beyond Certification",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+233-24-885-7308",
                "contactType": "Customer Service",
                "email": "info@qualiproconsult.com",
                "areaServed": ["GH", "Africa"],
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GH",
                "addressRegion": "Greater Accra",
                "addressLocality": "Accra"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "5.6037",
                "longitude": "-0.1870"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Ghana"
                },
                {
                  "@type": "Continent",
                  "name": "Africa"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/qualipro-consult",
                "https://web.facebook.com/qualiproconsult"
              ],
              "serviceType": [
                "ISO Consulting",
                "Quality Management Systems",
                "GMP Consulting",
                "Internal Audits",
                "Training and Capacity Building",
                "Certification Support"
              ],
              "knowsAbout": [
                "ISO 9001",
                "ISO 17025",
                "ISO 22000",
                "ISO 13485",
                "ISO 14001",
                "ISO 45001",
                "ISO 15189",
                "Good Manufacturing Practice",
                "Quality Management Systems",
                "Regulatory Compliance"
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
