import UserStore from './userStore';
import ComponentStore from './componentStore';

const userStore = new UserStore();
const componentStore = new ComponentStore();

export default {
  user: userStore,
  component: componentStore
};
