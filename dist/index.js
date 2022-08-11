(() => {
  var t = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  var s = t((b, n) => {
    var i = (r, e) => {
        if (!Number.isInteger(r) || !Number.isInteger(e)) throw new Error('input values must be an integer');
        return r + e;
      },
      o = (r, e) => {
        if (!Number.isInteger(r) || !Number.isInteger(e)) throw new Error('input values must be an integer');
        return (r + e) / 2;
      };
    n.exports = { sum: i, average: o };
  });
  var m = t((p, u) => {
    var g = s();
    u.exports = g;
  });
  m();
})();
