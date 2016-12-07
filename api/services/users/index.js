// import feathersNedb from 'feathers-nedb';
import service from 'feathers-mongoose';
// import NeDB from 'nedb';
import hooks from './hooks';
import users from './users-model';

export default function userService() {
  const app = this;

  const options = {
    Model: users,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // const options = {
  //   Model: new NeDB({
  //     filename: `${__dirname}/users.nedb`,
  //     autoload: true
  //   }),
  //   paginate: {
  //     default: 5,
  //     max: 25
  //   }
  // };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  app.service('users')
    .before(hooks.before)
    .after(hooks.after);
}
