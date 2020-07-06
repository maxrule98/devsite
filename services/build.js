require('dotenv').config();
const Bundler = require('parcel-bundler');
const Path = require('path');

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, '../src/**/*.html');

// Bundler options
const options = {

};

(async () => {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, options);

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();