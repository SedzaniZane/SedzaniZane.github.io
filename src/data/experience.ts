export interface TimelineEntry {
  title: string;
  organisation: string;
  period?: string;
  summary: string;
}

export const experience: TimelineEntry[] = [
  {
    title: 'Master\'s Research Student',
    organisation: 'Council for Scientific and Industrial Research (CSIR), Cloud, Network Architectures and Services Research Group',
    period: 'March 2025 – Present',
    summary:
      'I contribute to research on secure and resilient distributed SDN control systems while excluding confidential infrastructure information and unpublished implementation details.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'MSc Computer Science (in progress)',
    organisation: 'North-West University (NWU)',
    summary: 'My MSc research focuses on SDN, SD-WAN, distributed systems, Zero-Trust security, and AI-assisted resilience.',
  },
  {
    title: 'BSc Honours in Computer Science',
    organisation: 'North-West University (NWU)',
    summary: 'Completed postgraduate training in Computer Science with emphasis on research and advanced technical practice.',
  },
  {
    title: 'Undergraduate Computer Science qualification',
    organisation: 'Institution and qualification title pending confirmation',
    summary: 'Exact qualification title, institution details, and completion dates will be added after verification.',
  },
];
