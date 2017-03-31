import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('blog', { path: '/blogs/:blog_id' }, function() {
      this.route('edit', { path: '/edit'});
  });
  this.route('blogs', function() {
    this.route('new');
  });
  this.route('comment', function() {
    this.route('new', { path: 'blogs/comment-list/new'});
  });
});

export default Router;
