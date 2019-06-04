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

exports.up = function(db) {

    // CREATE TABLE PERIODS
    db.createTable('periods', {
      id: 
        {
          type: 'int',
          unsigned: true,
          notNull: true,
          primaryKey: true,
          autoIncrement: true,
          length: 10
        },
      name: 'string',
      session_id:
        {
          type: 'int',
          unsigned: true,
          length: 10,
          notNull: true,
          foreignKey: {
            name: 'periods_session_id_fk',
            table: 'sessions',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
            mapping: 'id'
          }
        },
    }, callback);

    // ADD COLUMN period_id IN projetcs
    addColumn(
      projects, 
      period_id, 
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'project_period_id_fk',
          table: 'periods',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }, 
      callback)

    // REMOVE COLUMN session_id IN projetcs
    removeColumn(projects, session_id, callback)

};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
