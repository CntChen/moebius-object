/**
 * @Author CntChen
 * @Date   2017-04-21
 * @Desc   A fractal javascript object always return itself
 */

let FractalObject;

const handler = {
  get: (target, name) => {
    return FractalObject;
  },
}

const origin = function() {
  return FractalObject;
};

FractalObject = new Proxy(origin, handler);


module.exports = FractalObject;