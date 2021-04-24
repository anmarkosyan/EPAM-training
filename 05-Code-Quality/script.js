'use strict';

function x(n, l, a, e, r) {
  let s,
    t = null != l ? l : n.nullContext || {};

  return (
    '<li class="dropdown">\n' +
    ' <a href="#" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '<i class="user-avatar fa fa-user bg-primary"></i>\n' +
    '<span class="caret"></span>\n' +
    '</a>\n' +
    '<ul class="dropdown-menu" role="menu" id="navDropdownMenu">\n\n' +
    '<li ' +
    (null != (s = a.call(t, null != (s = null != l ? l.user : l) ? s.href : s, { name: 'unless', hash: {}, fn: n.program(21, r, 0), inverse: n.noop, data: r }))
      ? s
      : '') +
    '>' +
    '\x3c!-- dropdown-no-link--\x3e\n' +
    (null !=
    (s = a['if'].call(t, null != (s = null != l ? l.user : l) ? s.href : s, { name: 'if', hash: {}, fn: n.program(23, r, 0), inverse: n.noop, data: r }))
      ? s
      : '') +
    '                                ' +
    '' +
    (null !=
    (s = a['if'].call(t, null != (s = null != l ? l.user : l) ? s.label : s, { name: 'if', hash: {}, fn: n.program(25, r, 0), inverse: n.noop, data: r }))
      ? s
      : '') +
    '\n ' +
    '<strong id="user_name">' +
    n.escapeExpression(n.lambda(null != (s = null != l ? l.user : l) ? s.username : s, l)) +
    '</strong>\n                                ' +
    '' +
    (null !=
    (s = a['if'].call(t, null != (s = null != l ? l.user : l) ? s.secondaryLabel : s, {
      name: 'if',
      hash: {},
      fn: n.program(27, r, 0),
      inverse: n.noop,
      data: r,
    }))
      ? s
      : '') +
    '\n' +
    (null !=
    (s = a['if'].call(t, null != (s = null != l ? l.user : l) ? s.href : s, { name: 'if', hash: {}, fn: n.program(29, r, 0), inverse: n.noop, data: r }))
      ? s
      : '') +
    ' ' +
    ' </li>\n\n' +
    '<li role="separator" class="divider"></li>\n\n' +
    (null != (s = a.call(t, null != l ? l.userBar : l, { name: 'each', hash: {}, fn: n.program(31, r, 0), inverse: n.noop, data: r })) ? s : '') +
    ' ' +
    '</ul>\n</li>\n'
  );
}

console.log(x(1, 2, 3, 4, 5));
