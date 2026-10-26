export interface TimelineEntry {
  title: string;
  organisation: string;
  period?: string;
  summary: string;
}

export const experience: TimelineEntry[] = [
  {
    title: 'Network Systems Research Studentship-Intern',
    organisation: 'Council for Scientific and Industrial Research (CSIR)',
    period: 'March 2025 – Present',
    summary:
      'I support network-systems research activities, including SDN/SD-WAN experimentation and technical analysis for secure distributed control environments.',
  },
  {
    title: 'Trainee RPA Developer',
    organisation: 'FIRtech Intelligent Automation',
    period: 'January 2025 – February 2025',
    summary:
      'I assisted with introductory robotic process automation workflows and structured process-mapping tasks in a supervised training context.',
  },
  {
    title: 'Junior IT Support Technician Assistant',
    organisation: 'North-West University (NWU)',
    period: 'July 2023 – August 2024',
    summary:
      'I provided frontline technical support for end-user systems, troubleshooting requests, and routine IT service operations within the university environment.',
  },
  {
    title: 'Student Council Representative, Faculty of Natural and Agricultural Sciences',
    organisation: 'North-West University (NWU)',
    period: 'August 2021 – November 2022',
    summary:
      'I represented student concerns in faculty-level engagements and contributed to communication and coordination between students and academic stakeholders.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'MSc Computer Science (in progress)',
    organisation: 'North-West University (NWU)',
    summary: 'I am currently pursuing MSc research in secure and resilient distributed SDN/SD-WAN control systems.',
  },
  {
    title: 'BSc Honours Computer Science',
    organisation: 'North-West University (NWU)',
    period: 'February 2024 – November 2024',
    summary: 'Completed postgraduate Computer Science coursework and research-focused academic training.',
  },
  {
    title: 'BSc Computer Science and Electronics',
    organisation: 'North-West University (NWU)',
    period: 'February 2020 – December 2023',
    summary: 'Completed undergraduate studies combining computer science foundations with electronics.',
  },
];
