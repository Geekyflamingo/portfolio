import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {id: 1, title: 'foo', body: 'lorem ipsum'},
      {id: 2, title: 'bar', body: 'lorem ipsum'},
      {id: 3, title: 'baz', body: 'lorem ipsum'}
    ];
  }
});
