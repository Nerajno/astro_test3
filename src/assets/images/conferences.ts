// src/assets/images/conferences.ts
// Import SVG as an image with TypeScript support
import type { ImageMetadata } from 'astro';

// Main conference logo SVG
export const conferenceLogo = {
  src: '/src/assets/images/conference-logo.svg',
  width: 200,
  height: 200,
  format: 'svg',
} as ImageMetadata;

// Conference type specific logos
export const conferenceLogos = {
  workshop: {
    src: '/src/assets/images/workshop-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,

  meetup: {
    src: '/src/assets/images/meetup-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,

  webinar: {
    src: '/src/assets/images/webinar-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,
} as const;

// Conference series logos
export const conferenceSeries = {
  connectTech: {
    src: '/src/assets/images/connect-tech-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,

  devNexus: {
    src: '/src/assets/images/devnexus-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,

  reactSummit: {
    src: '/src/assets/images/react-summit-logo.svg',
    width: 200,
    height: 200,
    format: 'svg',
  } as ImageMetadata,
} as const;

// Helper function to get logo by event type
export function getLogoByType(type: 'conference' | 'workshop' | 'meetup' | 'webinar'): ImageMetadata {
  if (type === 'conference') return conferenceLogo;
  return conferenceLogos[type];
}

// Helper function to get series logo by conference ID
export function getSeriesLogo(id: string): ImageMetadata {
  const seriesMap: Record<string, keyof typeof conferenceSeries> = {
    'connecttech': 'connectTech',
    'devnexus': 'devNexus',
    'react-summit': 'reactSummit',
  };

  const seriesKey = Object.entries(seriesMap)
    .find(([key]) => id.toLowerCase().includes(key))?.[1];

  return seriesKey ? conferenceSeries[seriesKey] : conferenceLogo;
}

// Export types for TypeScript support
export type ConferenceType = keyof typeof conferenceLogos | 'conference';
export type ConferenceSeries = keyof typeof conferenceSeries;
