import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export function getDefaultMetadata(): Metadata {
  return {
    title:
      "Efedra Clinic - клініка стоматології та естетичної медицини в Одесі",
    description:
      "Сучасні методики, професійні лікарі та турбота про вашу красу й здоров’я",
    openGraph: {
      title:
        "Клініка стоматології та естетичної медицини Efedra Clinic в Одесі",
      description:
        "Сучасні методики, професійні лікарі та турбота про вашу красу й здоров’я",
      images: [
        {
          url: `${SITE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Efedra Clinic",
        },
      ],
      type: "website",
      locale: "uk_UA",
      siteName: "Efedra Clinic",
    },
  };
}
