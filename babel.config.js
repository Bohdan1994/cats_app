module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {
          "useBuiltIns": false,
          "targets": "Chrome >= 60, Safari >= 10.1, iOS >= 10.3, Firefox >= 54, Edge >= 15"
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
};
