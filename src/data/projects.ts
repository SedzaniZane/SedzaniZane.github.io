export interface Project {
  name: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  repoStatus: 'verified' | 'placeholder';
}

export const projects: Project[] = [
  {
    name: 'Zero-Trust Resilience Lab (placeholder title)',
    summary:
      'Prototype and evaluation environment for Zero-Trust security and resilience in Raft-based Atomix clusters that support distributed ONOS controllers.',
    stack: ['ONOS', 'Atomix', 'Raft', 'Cybersecurity', 'Distributed Systems'],
    repoStatus: 'placeholder',
  },
  {
    name: 'Network Automation Toolkit (placeholder title)',
    summary:
      'Automation workflows for SDN experimentation across ONOS and OpenDaylight environments using reproducible scripts and telemetry collection.',
    stack: ['Python', 'OpenDaylight', 'SDN', 'Network Automation'],
    repoStatus: 'placeholder',
  },
  {
    name: 'Computer Vision Edge Inference (placeholder title)',
    summary:
      'Resource-constrained computer vision experiments focused on deep learning inference performance and deployment trade-offs.',
    stack: ['Deep Learning', 'Computer Vision', 'Python', 'Edge AI'],
    repoStatus: 'placeholder',
  },
];
