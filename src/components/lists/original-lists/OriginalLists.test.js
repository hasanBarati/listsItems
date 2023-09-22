import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OriginalLists from './OriginalLists.component';



describe('OriginalLists', () => {
  const lists = [
    { name: 'List 1', params: { volume: 10, cylinders: 4 } },
    { name: 'List 2', params: { volume: 20, cylinders: 6 } },
  ];

  it('renders the original lists', () => {
    render(<OriginalLists lists={lists} />);
    const list1=screen.getByText('List 1')
    const list2=screen.getByText('List 2')
    expect(list1).toBeInTheDocument();
    expect(list2).toBeInTheDocument();
  });

  it('opens the edit modal when a list item is clicked', () => {
    render(<OriginalLists lists={lists} />);
    const list1=screen.getByText('List 1')
    fireEvent.click(list1)
    const nameInput =  screen.getByTestId("name");
    const volumeInput =  screen.getByTestId("volume");
    const cylindersInput =  screen.getByTestId("cylinders");
    expect(nameInput).toHaveValue('List 1');
    expect(volumeInput).toHaveValue(10);
    expect(cylindersInput).toHaveValue(4);
    
  });

  it('updates the list item when the edit button is clicked', () => {
    const setEditedLists = jest.fn();
     render(<OriginalLists lists={lists} setEditeLists={setEditedLists} />);
     const list1=screen.getByText('List 1')
     fireEvent.click(list1)
     const nameInput =  screen.getByTestId("name");
     const volumeInput =  screen.getByTestId("volume");
     const cylindersInput =  screen.getByTestId("cylinders");
    fireEvent.click(list1);
    fireEvent.change(nameInput, { target: { value: 'List 1 Updated' } });
    fireEvent.change(volumeInput, { target: { value: 15 } });
    fireEvent.change(cylindersInput, { target: { value: 6 } });
    const editBtn=screen.getByText('edit')
    fireEvent.click(editBtn);
    expect(setEditedLists).toHaveBeenCalledWith([
      {index:0, name: 'List 1 Updated', params: { volume: 15, cylinders: 6 } },
      {index:1, name: 'List 2', params: { volume:20, cylinders: 6} },
    ]);

  });
});