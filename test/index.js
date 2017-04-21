/**
 * @Author CntChen
 * @Date   2017-04-21
 */

const Fractal = require('../src/index');

function Log(fractal, ...args) {
  console.log('test:', JSON.stringify(fractal), ...args);
};

Log('Object property test');
Log(Fractal);
Log(Fractal.a);
Log(Fractal.a.aa);
Log(Fractal['b']);
Log(Fractal['b']['bb']);

Log('Function call test');
Log(Fractal());
Log(Fractal()());
Log(Fractal.c());
Log(Fractal.c.cc());

Log('mixin call test');
Log(Fractal.d());
Log(Fractal.d().d);
Log(Fractal().d);
Log(Fractal().d());

Log('='.repeat(30));
