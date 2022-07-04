
console.log(luge);
luge.settings({ preloader: { duration: 2.5 } });
luge.settings({ loader: { duration: 1.5 } });
luge.lifecycle.add('pageInit', (done) => {
  // Do you things here

  // Then call the done callback function
  done()
}, 10, 'load')
