export interface FAQItem {
  question: string;
  answer: string;
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://cambridgeacademyofenglish.vercel.app/#organization',
    name: 'Cambridge Academy of English',
    alternateName: ['Cambridge Academy Bangalore', 'CAE Bangalore'],
    url: 'https://cambridgeacademyofenglish.vercel.app',
    logo: 'https://cambridgeacademyofenglish.vercel.app/images/logo.png',
    description:
      'India’s Premier English Language & Foreign Language Training Institute in Kammanahalli, Bangalore with 21 years of experience.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 87, 2nd Floor, Nehru Road, Kammanahalli',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560084',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0125',
      longitude: '77.6378',
    },
    telephone: ['+91-80-40943580', '+91-8970506004', '+91-9620806004'],
    email: 'info@cambridgeacademyofenglish.com',
    sameAs: [
      'https://www.facebook.com/cambridgeacademyofenglish/',
      'https://twitter.com/CAEIndia',
      'https://www.instagram.com/cambridge_academy_of_english/',
      'https://www.linkedin.com/in/cambridge-academy-of-english-384611105/',
      'https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({
  name,
  description,
  provider = 'Cambridge Academy of English',
  url,
}: {
  name: string;
  description: string;
  provider?: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: 'https://cambridgeacademyofenglish.vercel.app',
    },
    url,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'onsite'],
      location: {
        '@type': 'Place',
        name: 'Cambridge Academy of English Bangalore Campus',
        address: 'No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore 560084',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

