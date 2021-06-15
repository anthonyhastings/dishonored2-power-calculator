type CharacterSlugs = 'corvo' | 'emily';

interface Character {
  id: string;
  description: string;
  name: string;
  slug: CharacterSlugs;
}
