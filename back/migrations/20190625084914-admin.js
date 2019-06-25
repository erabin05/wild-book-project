'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  
  db.createTable('admins', {
    id: 
      {
        type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 10
      },
    username: 'string',
    password: 'string',
    all_rights : 'boolean',
    campus_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'admins_campuses_id_fk',
          table: 'campuses',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
  }, callback);

  db.insert(
    'admins',
    ['username', 'password', 'all_rights', 'campus_id'],
    ['admin', 'admin', false, 1]
  )

};

exports.down = function(db, callback) {
  
  dropTable('admins', callback)

};

exports._meta = {
  "version": 1
};
