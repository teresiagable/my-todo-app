import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList, { TodoItem } from './TodoList';

configure({ adapter: new Adapter() });

const dummyData = [
  {
    id: 'Example-TodoItem-2',
    title: 'Create More Assignments!',
    description: 'Spawn new ideas with teammates.',
    deadline: '2020-01-02T08:00:00',
    done: false,
    assignee: {
      id: 'Example-User-3',
      firstName: 'Fredrik',
      lastName: 'Odin',
    },
  },
  {
    id: 'Example-TodoItem-3',
    title: 'Create More Exercises!',
    description: 'Spawn new ideas with teammates.',
    deadline: '2020-01-03T08:00:00',
    done: false,
    assignee: {
      id: 'Example-User-3',
      firstName: 'Fredrik',
      lastName: 'Odin',
    },
  },
];

it('displays 2 items', () => {
  const wrapper = shallow(<TodoList todolist={dummyData} />);
  const test = wrapper.find(TodoItem).length;
  expect(test).toEqual(2); // or the number of occurrence you're expecting
});

it('displays 0 items', () => {
  const wrapper = shallow(<TodoList todolist={[]} />);
  const test = wrapper.find(TodoItem).length;
  expect(test).toMatchSnapshot();
  expect(test).toEqual(0); // or the number of occurrence you're expecting
});
