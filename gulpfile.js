gulp  = require('gulp');
child = require('child_process');

gulp.task('jekyll', child.spawn('jekyll', ['serve', '--drafts', '--watch'], {stdio: 'inherit'}));

gulp.task('default', ['jekyll']);
