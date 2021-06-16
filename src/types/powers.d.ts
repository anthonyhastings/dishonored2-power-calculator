interface Power {
  id: string;
  parentPowerId: string | null;
  characterId: string | null;
  type: 'power' | 'enhancement';
  name: string;
  description: string;
  cost: number;
}
