/**
 * @Author CntChen
 * @Date   2017-04-21
 * @Desc   A javascript object always return itself
 */

let MoebiusObject;

const handler = {
  get: (target, name) => {
    return MoebiusObject;
  },
}

const origin = function() {
  return MoebiusObject;
};

MoebiusObject = new Proxy(origin, handler);


module.exports = MoebiusObject;