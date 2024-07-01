/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  function executor(x) {
    if (!functions.length) return x;
    
    const currentFunc = functions.pop();
    
    return executor(currentFunc(x));
  }
  
  return executor;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */