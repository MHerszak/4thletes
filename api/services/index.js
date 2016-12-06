import users from './users';
import messages from './messages';
import campaigns from './campaign';
import email from './email';

export default function services() {
  const app = this;

  app.configure(campaigns);
  app.configure(users);
  app.configure(messages);
  app.configure(email);
}
