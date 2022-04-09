// types
type Home = {
  type: string;
};
type Todo = {
  type: string;
};
type Calendar = {
  type: string;
};
type Contact = {
  type: string;
};

type Actions = Home | Todo | Calendar | Contact;
// action

export const home = () => {
  return {
    type: 'home',
  };
};
export const todo = () => {
  return {
    type: 'todo',
  };
};
export const calendar = () => {
  return {
    type: 'calendar',
  };
};
export const contact = () => {
  return {
    type: 'contact',
  };
};

// reducer

export const pageReducer = (state = 'home', action: Actions) => {
  switch (action.type) {
    case 'home':
      return (state = 'home');
    case 'todo':
      return (state = 'todo');
    case 'calendar':
      return (state = 'calendar');
    case 'contact':
      return (state = 'contact');
    default:
      return state;
  }
};
