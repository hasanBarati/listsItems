import { render, screen } from '@testing-library/react';
import EditedLists from './EditeLists.component';


test('renders a list of items correctly', () => {
  const sampleList = [
    { name: 'Item 1', params: { volume: 10, cylinders: 4 } },
    { name: 'Item 2', params: { volume: 20, cylinders: 6 } },
  ];

  
  render(<EditedLists lists={sampleList} />);
  
  const listItemElements = screen.getAllByRole('listitem');
  
  expect(listItemElements).toHaveLength(6);
  
  const volumeAmounts = screen.getAllByTestId('volumeAmount');
  const cylindersAmounts = screen.getAllByTestId('cylindersAmount');
  

  expect(volumeAmounts).toHaveLength(2);
  expect(cylindersAmounts).toHaveLength(2);
  

  expect(volumeAmounts[0]).toHaveTextContent('10');
  expect(volumeAmounts[1]).toHaveTextContent('20');
  
  expect(cylindersAmounts[0]).toHaveTextContent('4');
  expect(cylindersAmounts[1]).toHaveTextContent('6');
});
