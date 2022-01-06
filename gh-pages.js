import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/phibr0/webRTC-Demo', // Update to point to your repository
    user: {
      name: 'phibr0', // update to use your name
      email: 'bronzel.phillip@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);