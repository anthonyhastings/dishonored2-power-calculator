import values from 'lodash/values';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import { charactersDataSelector } from '@/selectors';
import { useAppSelector } from '@/store-hooks';
import './stylesheets/character-selection.scss';

const characterNamespace = 'character';

const CharacterSelection: React.FC = (): JSX.Element => {
  const characters = useAppSelector(charactersDataSelector);

  return (
    <section className="character-selection">
      <h1 className="character-selection__title">Choose your character</h1>
      <div className="character-selection__grid">
        {values(characters).map((character) => (
          <div
            className={`character-selection__grid-element ${characterNamespace}`}
            key={character.id}
          >
            <Avatar name={character.name} slug={character.slug} />
            <div className={`${characterNamespace}__overlay`}>
              <h2 className={`${characterNamespace}__name`}>
                {character.name}
              </h2>
              <p className={`${characterNamespace}__description`}>
                {character.description}
              </p>
              <Button href={`/powers/${character.slug}`}>
                Choose {character.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterSelection;
