export interface Project {
  name: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  disclosure: 'public' | 'restricted';
}

export const projects: Project[] = [
  {
    name: 'ONOS–Atomix Zero-Trust and Raft Resilience Research',
    summary:
      'Research and prototyping around lightweight Zero-Trust controls and resilience analysis at the ONOS–Atomix coordination boundary in SD-WAN-oriented distributed control scenarios.',
    stack: ['ONOS', 'Atomix', 'Raft', 'SD-WAN', 'Zero-Trust Security'],
    disclosure: 'restricted',
  },
  {
    name: 'OpenDaylight-based Network Automation and Control',
    summary:
      'Controller-driven automation workflows for repeatable network provisioning, policy checks, and operational testing in software-defined environments.',
    stack: ['OpenDaylight', 'Python', 'Network Automation', 'SDN'],
    disclosure: 'restricted',
  },
  {
    name: 'Deep Learning and Resource-Constrained Computer Vision',
    summary:
      'Experimental work on deploying and evaluating deep learning models for computer vision tasks under constrained compute and memory budgets.',
    stack: ['Deep Learning', 'Computer Vision', 'Python', 'Edge AI'],
    disclosure: 'restricted',
  },
];
