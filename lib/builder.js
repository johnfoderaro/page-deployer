const ejs = require('ejs');

class PageBuilder {
  constructor(options) {
    this.destination = options.destination;
    this.pageSettings = options.pageSettings;
    this.path = options.path;
    this.template = options.template;
    this.user = options.user;
    this.ejs = ejs;
  }

  build() {
    return this;
  }

  connect() {
    return this;
  }

  move({ existing }) {
    return this;
  }

  provision({ ssl }) {

  }
  // build a template with EJS
  // SSH onto a server
  // replace server file with new file
  // restart webserver / flush cache?
}

modules.export = PageBuilder;
