/**
 * @Author CntChen
 * @Date   2017-04-21
 */

const Fractal = require('../src/index');

function Log() {
  console.log('test:', ...arguments);
};

Log(Fractal);

Log('='.repeat(30));
