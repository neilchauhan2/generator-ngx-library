'use strict';

module.exports = [
  // Create project
  {name: '_gulpfile.js', path: 'gulpfile.js', isTpl: true},
  {name: '_LICENSE', path: 'LICENSE', isTpl: true},
  {name: '_package.json', path: 'package.json', isTpl: true},
  {name: '_README.md', path: 'README.md', isTpl: true},
  {name: 'editorconfig', path: '.editorconfig', isTpl: false},
  {name: 'gitignore', path: '.gitignore', isTpl: false},
  {name: 'travis.yml', path: '.travis.yml', isTpl: false},
  {name: 'CHANGELOG.md', path: 'CHANGELOG.md', isTpl: false},
  {name: 'karma.conf.js', path: 'karma.conf.js', isTpl: false},
  {name: 'tsconfig.json', path: 'tsconfig.json', isTpl: false},
  {name: '_tslint.json', path: 'tslint.json', isTpl: true},
  {name: 'webpack.config.js', path: 'webpack.config.js', isTpl: false},

  // Create Source files
  {name: 'src/module/component/_lib.component.html', path: 'src/module/component/lib.component.html', isTpl: true},
  {name: 'src/module/component/_lib.component.spec.ts', path: 'src/module/component/lib.component.spec.ts', isTpl: true},
  {name: 'src/module/component/_lib.component.ts', path: 'src/module/component/lib.component.ts', isTpl: true},
  {name: 'src/module/component/lib.component.scss', path: 'src/module/component/lib.component.scss', isTpl: false},
  {name: 'src/module/service/lib.service.ts', path: 'src/module/service/lib.service.ts', isTpl: false},
  {name: 'src/module/service/lib.service.spec.ts', path: 'src/module/service/lib.service.spec.ts', isTpl: false},
  {name: 'src/module/_lib.module.ts', path: 'src/module/lib.module.ts', isTpl: true},
  {name: 'src/_tsconfig.lib.es5.json', path: 'src/tsconfig.lib.es5.json', isTpl: true},
  {name: 'src/_tsconfig.lib.json', path: 'src/tsconfig.lib.json', isTpl: true},
  {name: 'src/_tsconfig.spec.json', path: 'src/tsconfig.spec.json', isTpl: true},
  {name: 'src/index.ts', path: 'src/index.ts', isTpl: true},

  // Create Demo files
  {name: 'demo/e2e/_app.e2e-spec.ts', path: 'demo/e2e/app.e2e-spec.ts', isTpl: true},
  {name: 'demo/e2e/_app.po.ts', path: 'demo/e2e/app.po.ts', isTpl: true},
  {name: 'demo/e2e/tsconfig.e2e.json', path: 'demo/e2e/tsconfig.e2e.json', isTpl: false},
  {name: 'demo/src/app/getting-started/_getting-started.component.ts', path: 'demo/src/app/getting-started/getting-started.component.ts', isTpl: true},
  {name: 'demo/src/app/getting-started/getting-started-routing.module.ts', path: 'demo/src/app/getting-started/getting-started-routing.module.ts', isTpl: false},
  {name: 'demo/src/app/getting-started/getting-started.component.html', path: 'demo/src/app/getting-started/getting-started.component.html', isTpl: false},
  {name: 'demo/src/app/getting-started/getting-started.component.scss', path: 'demo/src/app/getting-started/getting-started.component.scss', isTpl: false},
  {name: 'demo/src/app/getting-started/getting-started.module.ts', path: 'demo/src/app/getting-started/getting-started.module.ts', isTpl: false},
  {name: 'demo/src/app/getting-started/getting-started.component.spec.ts', path: 'demo/src/app/getting-started/getting-started.component.spec.ts', isTpl: false},
  {name: 'demo/src/app/home/_home.component.html', path: 'demo/src/app/home/home.component.html', isTpl: true},
  {name: 'demo/src/app/home/_home.component.ts', path: 'demo/src/app/home/home.component.ts', isTpl: true},
  {name: 'demo/src/app/home/_home.component.spec.ts', path: 'demo/src/app/home/home.component.spec.ts', isTpl: true},
  {name: 'demo/src/app/home/_home.module.ts', path: 'demo/src/app/home/home.module.ts', isTpl: true},
  {name: 'demo/src/app/home/home-routing.module.ts', path: 'demo/src/app/home/home-routing.module.ts', isTpl: false},
  {name: 'demo/src/app/home/home.component.scss', path: 'demo/src/app/home/home.component.scss', isTpl: false},
  {name: 'demo/src/app/shared/content-wrapper/content-wrapper.component.ts', path: 'demo/src/app/shared/content-wrapper/content-wrapper.component.ts', isTpl: false},
  {name: 'demo/src/app/shared/content-wrapper/content-wrapper.component.html', path: 'demo/src/app/shared/content-wrapper/content-wrapper.component.html', isTpl: false},
  {name: 'demo/src/app/shared/content-wrapper/content-wrapper.component.scss', path: 'demo/src/app/shared/content-wrapper/content-wrapper.component.scss', isTpl: false},
  {name: 'demo/src/app/shared/content-wrapper/content-wrapper.component.spec.ts', path: 'demo/src/app/shared/content-wrapper/content-wrapper.component.spec.ts', isTpl: false},
  {name: 'demo/src/app/shared/footer/_footer.component.html', path: 'demo/src/app/shared/footer/footer.component.html', isTpl: true},
  {name: 'demo/src/app/shared/footer/footer.component.scss', path: 'demo/src/app/shared/footer/footer.component.scss', isTpl: false},
  {name: 'demo/src/app/shared/footer/footer.component.spec.ts', path: 'demo/src/app/shared/footer/footer.component.spec.ts', isTpl: false},
  {name: 'demo/src/app/shared/footer/footer.component.ts', path: 'demo/src/app/shared/footer/footer.component.ts', isTpl: false},
  {name: 'demo/src/app/shared/header/_header.component.html', path: 'demo/src/app/shared/header/header.component.html', isTpl: true},
  {name: 'demo/src/app/shared/header/_header.component.spec.ts', path: 'demo/src/app/shared/header/header.component.spec.ts', isTpl: true},
  {name: 'demo/src/app/shared/header/header.component.scss', path: 'demo/src/app/shared/header/header.component.scss', isTpl: false},
  {name: 'demo/src/app/shared/header/header.component.ts', path: 'demo/src/app/shared/header/header.component.ts', isTpl: false},
  {name: 'demo/src/app/shared/index.ts', path: 'demo/src/app/shared/index.ts', isTpl: false},
  {name: 'demo/src/app/shared/shared.module.ts', path: 'demo/src/app/shared/shared.module.ts', isTpl: false},
  {name: 'demo/src/app/_app.component.spec.ts', path: 'demo/src/app/app.component.spec.ts', isTpl: true},
  {name: 'demo/src/app/_app.module.ts', path: 'demo/src/app/app.module.ts', isTpl: true},
  {name: 'demo/src/app/app-routing.module.ts', path: 'demo/src/app/app-routing.module.ts', isTpl: false},
  {name: 'demo/src/app/app.component.html', path: 'demo/src/app/app.component.html', isTpl: false},
  {name: 'demo/src/app/app.component.scss', path: 'demo/src/app/app.component.scss', isTpl: false},
  {name: 'demo/src/app/app.component.ts', path: 'demo/src/app/app.component.ts', isTpl: false},
  {name: 'demo/src/assets/gitkeep', path: 'demo/src/assets/.gitkeep', isTpl: false},
  {name: 'demo/src/assets/npmignore', path: 'demo/src/assets/.npmignore', isTpl: false},
  {name: 'demo/src/assets/logo.svg', path: 'demo/src/assets/logo.svg', isTpl: false},
  {name: 'demo/src/environments/environment.prod.ts', path: 'demo/src/environments/environment.prod.ts', isTpl: false},
  {name: 'demo/src/environments/environment.ts', path: 'demo/src/environments/environment.ts', isTpl: false},
  {name: 'demo/src/_index.html', path: 'demo/src/index.html', isTpl: true},
  {name: 'demo/src/_variables.scss', path: 'demo/src/_variables.scss', isTpl: false},
  {name: 'demo/src/favicon.ico', path: 'demo/src/favicon.ico', isTpl: false},
  {name: 'demo/src/favicon.ico', path: 'demo/src/favicon.ico', isTpl: false},
  {name: 'demo/src/main.ts', path: 'demo/src/main.ts', isTpl: false},
  {name: 'demo/src/polyfills.ts', path: 'demo/src/polyfills.ts', isTpl: false},
  {name: 'demo/src/styles.scss', path: 'demo/src/styles.scss', isTpl: false},
  {name: 'demo/src/test.ts', path: 'demo/src/test.ts', isTpl: false},
  {name: 'demo/src/tsconfig.app.json', path: 'demo/src/tsconfig.app.json', isTpl: false},
  {name: 'demo/src/tsconfig.spec.json', path: 'demo/src/tsconfig.spec.json', isTpl: false},
  {name: 'demo/src/typings.d.ts', path: 'demo/src/typings.d.ts', isTpl: false},
  {name: 'demo/_angular-cli.json', path: 'demo/.angular-cli.json', isTpl: true},
  {name: 'demo/_package.json', path: 'demo/package.json', isTpl: true},
  {name: 'demo/_README.md', path: 'demo/README.md', isTpl: true},
  {name: 'demo/editorconfig', path: 'demo/.editorconfig', isTpl: false},
  {name: 'demo/gitignore', path: 'demo/.gitignore', isTpl: false},
  {name: 'demo/karma.conf.js', path: 'demo/karma.conf.js', isTpl: false},
  {name: 'demo/protractor.conf.js', path: 'demo/protractor.conf.js', isTpl: false},
  {name: 'demo/proxy.conf.json', path: 'demo/proxy.conf.json', isTpl: false},
  {name: 'demo/tsconfig.json', path: 'demo/tsconfig.json', isTpl: false},
  {name: 'demo/tslint.json', path: 'demo/tslint.json', isTpl: false},

  // Create Git files
  {name: 'git/_config', path: '.git/config', isTpl: true},
  {name: 'git/description', path: '.git/description', isTpl: false},
  {name: 'git/HEAD', path: '.git/HEAD', isTpl: false},
  {name: 'git/hooks/*.sample', path: '.git/hooks/', isTpl: false},
  {name: 'git/info/exclude', path: '.git/info/exclude', isTpl: false},

  // Create Github files
  {name: 'github/ISSUE_TEMPLATE.md', path: '.github/ISSUE_TEMPLATE.md', isTpl: false},

  // Create config files
  {name: 'config/gulp-tasks/README.md', path: 'config/gulp-tasks/README.md', isTpl: false},
  {name: 'config/_webpack.test.js', path: 'config/webpack.test.js', isTpl: true},
  {name: 'config/helpers.js', path: 'config/helpers.js', isTpl: false},
  {name: 'config/karma-test-shim.js', path: 'config/karma-test-shim.js', isTpl: false},
  {name: 'config/karma.conf.js', path: 'config/karma.conf.js', isTpl: false}
];
