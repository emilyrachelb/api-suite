'use strict';

module.exports = function(app) {
  var rachelapi = require('../controllers/index');

  // rachelapi routes
  app.route('/tasks')
    .get(rachelapi.list_tasks)
    .post(rachelapi.create_task);

  app.route('/tasks/:taskId')
    .get(rachelapi.read_task)
    .put(rachelapi.update_task)
    .delete(rachelapi.delete_task);
};
