
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'Mutation',
    definition(t) {
  
      t.crud.createOnePost({ alias: 'createOnePost' });
      t.crud.updateOnePost({ alias: 'updateOnePost' });
      t.crud.updateManyPost({ alias: 'updateManyPost' });
      t.crud.deleteOnePost({ alias: 'deleteOnePost' });
      t.crud.deleteManyPost({ alias: 'deleteManyPost' });


      t.crud.createOneUser({ alias: 'createOneUser' });
      t.crud.updateOneUser({ alias: 'updateOneUser' });
      t.crud.updateManyUser({ alias: 'updateManyUser' });
      t.crud.deleteOneUser({ alias: 'deleteOneUser' });
      t.crud.deleteManyUser({ alias: 'deleteManyUser' });
    },
  });
  