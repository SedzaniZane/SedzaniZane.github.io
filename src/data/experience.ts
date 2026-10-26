export interface TimelineEntry {
  title: string;
  organisation: string;
  period: string;
  summary: string;
}

export const experience: TimelineEntry[] = [
  {
    title: 'Master\'s Research Student',
    organisation: 'Council for Scientific and Industrial Research (CSIR), South Africa',
    period: 'Dates: placeholder — add verified start/end dates.',
    summary:
      'Research appointment focused on secure and resilient distributed SDN control systems. Avoids confidential network, infrastructure, and unpublished implementation details.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'MSc Computer Science',
    organisation: 'North-West University',
    period: 'Status: In progress (dates placeholder).',
    summary: 'Research focus includes SDN, distributed systems, Zero-Trust security, and AI-assisted resilience.',
  },
  {
    title: 'BSc Honours in Computer Science',
    organisation: 'Institution details placeholder — add verified institution and date.',
    period: 'Dates: placeholder.',
    summary: 'Relevant technical foundation in computer science and software development.',
  },
  {
    title: 'Previous Technical Experience',
    organisation: 'Placeholder — add verified role(s), organisation(s), and timeline.',
    period: 'Dates: placeholder.',
    summary: 'Add only verified engineering and research responsibilities.',
  },
];
