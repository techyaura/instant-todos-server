const authValidator = require('./auth.validator');

const todoValidator = require('./todo.validator');

const todoLabelValidator = require('./todo-label.validator');

const thoughtValidator = require('./thought.validator');

const projectValidator = require('./project.validator');

const configSettingValidator = require('./setting.validator');

const validators = {
  ...authValidator,
  ...todoValidator,
  ...todoLabelValidator,
  ...thoughtValidator,
  ...projectValidator,
  ...configSettingValidator
};

module.exports = validators;
