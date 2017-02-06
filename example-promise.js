function getTempCallback (location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Los Angeles', function(err, temp){
  if (err){
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise (location){
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Los Angeles').then(function(temp){
  console.log('promis success', temp);
}, function(err){
  consolel.log('promise error', err);
})
