type F = (x: number) => number;

function compose(functions: F[]): F {
  function calculator(x: number) {
    if (!functions.length) return x;
    
    const currentFunc = functions.pop();

    return calculator(currentFunc(x));
  }
  
  return calculator;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */