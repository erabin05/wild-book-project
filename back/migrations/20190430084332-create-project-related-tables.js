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
  db.createTable('projects', {
    id: 
      {
        type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 10
      },
    url: 'string',
    name: 'string',
    description: 'string',
    githubLink: 'string',
    session_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'projects_session_id_fk',
          table: 'sessions',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
    language_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'projects_language_id_fk',
          table: 'languages',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  db.createTable('sessions', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    language_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'sessions_language_id_fk',
          table: 'languages',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  db.createTable('languages', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string'
  }, callback);

  db.createTable('students', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    githubLink: 'string',
    linkedinLink: 'string'
  }, callback);
};

exports.down = function(db, callback) {
  db.removeTable('projects', callback)
  db.removeTable('sessions', callback)
  db.removeTable('languages', callback)
  db.removeTable('students', callback)
};

exports._meta = {
  "version": 1
};
