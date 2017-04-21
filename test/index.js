/**
 * @Author CntChen
 * @Date   2017-04-21
 */

const Moebius = require('../src/index');

function Log(moebius, ...args) {
  console.log('test:', JSON.stringify(moebius), ...args);
};

Log('Object property test');
Log(Moebius);
Log(Moebius.a);
Log(Moebius.a.aa);
Log(Moebius['a']);
Log(Moebius['a']['aa']);

Log('Function call test');
Log(Moebius());
Log(Moebius()());

Log('mixin call test');
Log(Moebius.a());
Log(Moebius.a().a);
Log(Moebius().a);
Log(Moebius().a());

Log('='.repeat(30));
