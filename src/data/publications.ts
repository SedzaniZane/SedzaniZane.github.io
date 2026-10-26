export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  date?: string;
  status: 'published' | 'accepted';
  group: 'journal_article' | 'conference_paper';
  event?: string;
  location?: string;
  scheduledDates?: string;
  doi?: string;
  publisherUrl?: string;
  metadataVerification: 'verified' | 'reported_unverified';
  notes?: string;
}

export const publications: Publication[] = [
  {
    title: 'Towards a Zero-Trust Framework for Byzantine-Resilient Raft Consensus in SD-WAN Control Planes',
    authors: ['Sedzani Ndouvhada', 'Bassey Isong', 'Hlabi Kobo'],
    venue: 'The Indonesian Journal of Computer Science, 15(5)',
    date: '23 October 2026',
    status: 'published',
    group: 'journal_article',
    doi: 'https://doi.org/10.33022/ijcs.v15i5.5233',
    publisherUrl: 'https://www.ijcs.net/ijcs/index.php/ijcs/article/view/5233',
    metadataVerification: 'verified',
  },
  {
    title: 'Empirical Analysis of Deep Learning Models for Real-time Face Detection on Resource-constrained Devices',
    authors: ['Bassey Isong', 'Sedzani Ndouvhada', 'Otshepeng Clement Kgote'],
    venue: 'IT Journal Research and Development, 10(2), 29–46',
    date: '2025 (publication month pending publisher verification)',
    status: 'published',
    group: 'journal_article',
    doi: 'https://doi.org/10.25299/itjrd.2025.22402',
    metadataVerification: 'reported_unverified',
    notes:
      'Publisher sources currently show conflicting month metadata; this entry is retained with verified year/volume/issue/pages and will be updated once the publisher month is confirmed.',
  },
  {
    title: 'A Review of Coordination-Layer Security Threats in Distributed Software-Defined Networks',
    authors: ['S. Ndouvhada', 'B. Isong', 'H. Kobo', 'N. Makondo', 'S. Zwane'],
    venue: '6th International Multidisciplinary Information Technology and Engineering Conference (IMITEC 2026)',
    status: 'accepted',
    group: 'conference_paper',
    event: 'IMITEC 2026',
    location: 'Gauteng, South Africa',
    scheduledDates: '26–27 November 2026',
    metadataVerification: 'verified',
    notes:
      'Accepted for presentation; proceedings publication details (DOI, pages, and final citation record) are not yet established.',
  },
  {
    title: 'From Role-Aware Failover to Zero-Trust Coordination: Benchmarking Distributed ONOS-Atomix Clusters in SD-WAN Testbeds',
    authors: ['S. Ndouvhada', 'H. Kobo', 'N. Makondo', 'S. Zwane', 'B. Isong'],
    venue: '6th International Multidisciplinary Information Technology and Engineering Conference (IMITEC 2026)',
    status: 'accepted',
    group: 'conference_paper',
    event: 'IMITEC 2026',
    location: 'Gauteng, South Africa',
    scheduledDates: '26–27 November 2026',
    metadataVerification: 'verified',
    notes:
      'Accepted for presentation; proceedings publication details (DOI, pages, and final citation record) are not yet established.',
  },
];
