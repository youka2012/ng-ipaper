module.exports = {
  'network': {
    'port': 9088
  },
  'jwtsecret': 'chaoma2018',
  'database': 'mongodb://127.0.0.1:27017/ipapers',
  'mongodb_url_path': 'mongodb://127.0.0.1:27017',
  'mongodb_url': '127.0.0.1',
  'mongodb_port': 27017,
  'mongodb_db_name': 'ipapers',
  'db_options': {
    db: {
      native_parser: true
    },
    server: {
      poolSize: 5
    },
    replset: {
      rs_name: 'myReplicaSetName'
    },
    user: 'myUserName',
    pass: 'myPassword'
  },
  init_data: {
    db: {
      tables: ['users', 'papers', 'answers'],
    }
  }
};