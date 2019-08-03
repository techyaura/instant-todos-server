
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require('graphql');


module.exports = new GraphQLObjectType({
  name: 'UserInfoType',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});