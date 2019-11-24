module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-array-index-key': 0,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/anchor-is-valid': 0
  },
  env: {
    browser: true,
    jest: true
  },
  globals: {
    WebSocket: false,
    window: false
  }
};
