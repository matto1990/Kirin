module.exports = {
  'dist-relative': {
    'android': './app/src/main/assets/generated-javascript',
    'ios': './generated-javascript'
  },

  'idl-dist': {
    'android': './app/src/main/java',
    'ios': './generated-ios'
  },

  'run-command': {
    '': 'echo "localhost already running"'
  },

  // to be copied into the top level dist directory.
  'resources-common': [
    'index.android.html'
  ],

  'resources-specific': [],

  // grunt tasks we call depending on build variant.
  'extra-build-tasks': [],

  'browserify-aliases': {
    '': []
  }
};
