import { render } from '@testing-library/react';
import { Actors } from '../ui';

describe('Actors component', () => {
  it('renders "Нет информации об актерах" when persons array is empty', () => {
    const { getByText } = render(<Actors persons={[]} />);
    const errorMessage = getByText('Нет информации об актерах');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders actors information when persons array is not empty', () => {
    const persons = [
      {
        id: 1,
        photo: '',
        name: 'Саша',
        enName: 'Alex',
        description: '',
        profession: 'Фронтенд разработчик',
        enProfession: 'Frontend developer',
      },
    ];
    const { getByText, getByAltText } = render(<Actors persons={persons} />);
    const actorName = getByText('Саша');
    const actorProfession = getByText('Фронтенд разработчик');
    const actorImage = getByAltText('Саша');
    expect(actorName).toBeInTheDocument();
    expect(actorProfession).toBeInTheDocument();
    expect(actorImage).toBeInTheDocument();
  });
});
