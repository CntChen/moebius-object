/**
 * @Author CntChen
 * @Date   2017-04-21
 * @Desc   A fractal javascript object always return itself
 */

let origin = {};
let handler = {
  get: (target, name) => {
    return target;
  },
}

FractalObject = new Proxy(origin, handler);


module.exports = FractalObject;