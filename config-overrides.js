module.exports = function override(config, env) {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')()
    ]
  });
  return config;
}
