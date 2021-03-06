const { TodoLabelModel } = require('../models');

module.exports = {
  checkLabel: (context, postBody) => {
    // / const { next } = context;
    if (postBody.label && typeof postBody.label !== 'undefined') {
      return TodoLabelModel.findOne({ _id: postBody.label })
        .then((label) => {
          if (label) {
            return true;
          }
          return Promise.reject(new Error('Invalid Todo Label'));
        });
    }
    return true;
  }


};
