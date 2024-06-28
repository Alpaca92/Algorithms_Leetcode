type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x: number) {
    let init = x;
    
    for (let i = functions.length - 1; i >= 0; --i) {
      console.log("start: ", init);
      init = functions[i](init);
      console.log("end: ", init);
    }
    
    return init;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */