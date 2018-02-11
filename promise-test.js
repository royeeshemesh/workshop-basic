const doSomething = () => {
    // do something in here

    cb('success result')
    // err('fault');

    // return promise;
};

const resultHandler = (result) => {
  console.info('result:',result);

  // do something with the result
};

const errorHandler = (error) => {
  console.info('error:',error);
};

function doSomethingElse() {
    // return promise;
}

doSomething()
    .then(function(result) {
        // handle result
    })
    .then(doSomethingElse)
    .then(function(reuslt) {

    });

doSomething(errorHandler, resultHandler);