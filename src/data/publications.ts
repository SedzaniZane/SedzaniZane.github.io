export interface Publication {
  title?: string;
  authors: string[];
  venue?: string;
  date?: string;
  status: 'published' | 'accepted';
  event?: string;
  doi?: string;
  metadataVerification: 'verified' | 'reported_unverified';
  notes?: string;
}

export const publications: Publication[] = [
  {
    title: 'Empirical Analysis of Deep Learning Models for Real-time Face Detection on Resource-constrained Devices.',
    authors: ['Bassey Isong', 'Sedzani Ndouvhada', 'Otshepeng Clement Kgote'],
    venue: 'I.T. Journal Research and Development',
    date: 'September 2025',
    status: 'published',
    metadataVerification: 'reported_unverified',
    notes:
      'Publication details are listed as reported metadata and will be updated once independently verified against an authoritative bibliographic source.',
  },
  {
    authors: ['Author list pending confirmation'],
    status: 'accepted',
    event: 'IMITEC 2026',
    metadataVerification: 'reported_unverified',
    notes:
      'Accepted conference paper. Formal publication metadata (title, proceedings details, DOI, and pages) will be added after official release.',
  },
  {
    authors: ['Author list pending confirmation'],
    status: 'accepted',
    event: 'IMITEC 2026',
    metadataVerification: 'reported_unverified',
    notes:
      'Accepted conference paper. Formal publication metadata (title, proceedings details, DOI, and pages) will be added after official release.',
  },
];
