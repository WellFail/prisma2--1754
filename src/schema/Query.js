const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'Query',
    definition(t) {
  
    t.crud.post({ alias: 'findOnePost' });
    t.crud.posts({ filtering: true , ordering: true, pagination: true, alias: 'findManyPost' });
    
    t.crud.user({ alias: 'findOneUser' });
    t.crud.users({ filtering: true , ordering: true, pagination: true, alias: 'findManyUser' });
  
    },
  });

  