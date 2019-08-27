module.exports = {
  plugins: [
      require('autoprefixer')({
          'browsersList': ['> 1%', 'last 2 versions']
      })
  ]
};