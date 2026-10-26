export interface Publication {
  authors: string;
  title: string;
  venue: string;
  date: string;
  doi?: string;
  doiVerified: boolean;
  note?: string;
}

export const publications: Publication[] = [
  {
    authors: 'Sedzani Ndouvhada and collaborators (placeholder — verify full author list).',
    title: 'Deep Learning Models for Real-Time Face Detection on Resource-Constrained Devices',
    venue: 'Publication venue: placeholder — add verified conference or journal name.',
    date: 'Publication date: placeholder — add verified date.',
    doiVerified: false,
    note: 'Existing study included as requested; complete metadata when verified.',
  },
];
