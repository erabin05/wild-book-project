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

  // CREATE TABLE PROJECTS
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
    title: {type: 'string', notNull: true},
    description: 'text',
    githubLink: 'string',
    imgLink: 'string',
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
  }, callback);

  // CREATE TABLE PROJECTS_HAS_STUDENTS
  db.createTable('projects_has_students', {
    projects_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'projects_id_fk',
          table: 'projects',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
    students_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'students_id_fk',
          table: 'students',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  // CREATE TABLE SESSIONS
  db.createTable('sessions', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    session_name: {type: 'string', notNull: true},
    date: 'datetime',
    campuses_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'sessions_campuses_id_fk',
          table: 'campuses',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  // CREATE TABLE STUDENTS
  db.createTable('students', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    student_name: 'string',
    githubLink: 'string',
    linkedinLink: 'string',
    sessions_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'students_sessions_id_fk',
          table: 'sessions',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  // CREATE TABLE SESSIONS_HAS_LANGUAGES
  db.createTable('sessions_has_languages', {
    sessions_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'sessions_id_fk',
          table: 'sessions',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
    languages_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
        foreignKey: {
          name: 'language_id_fk',
          table: 'languages',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
  }, callback);

  // CREATE TABLE LANGUAGES
  db.createTable('languages', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    language_name: 'string'
  }, callback);

  // CREATE TABLE CAMPUSES
  db.createTable('campuses', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    campus_name: {type: 'string', notNull: true},
    coordonates: 'string'
  }, callback);

};

exports.down = function(db, callback) {
  db.removeTable('projects', callback)
  db.removeTable('projects_has_students', callback)
  db.removeTable('students', callback)
  db.removeTable('sessions', callback)
  db.removeTable('sessions_has_languages', callback)
  db.removeTable('languages', callback)
  db.removeTable('campuses', callback)
  
};

exports._meta = {
  "version": 1
};
