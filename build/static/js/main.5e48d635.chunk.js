(this['webpackJsonpcarbon-tutorial'] =
  this['webpackJsonpcarbon-tutorial'] || []).push([
  [0],
  {
    34: function(e, n, t) {},
    35: function(e, n, t) {},
    46: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        c = t(22),
        r = t.n(c),
        i = (t(34), t(23)),
        s = t(24),
        j = t(25),
        o = t(28),
        l = (t(35), t(49)),
        b = t(50),
        d = t(51),
        O = t(63),
        h = t(52),
        x = t(53),
        u = t(54),
        p = t(55),
        v = t(56),
        f = t(57),
        m = t(64),
        w = t(58),
        k = t(59),
        y = t(60),
        g = t(61),
        N = t(16),
        S = t(3),
        C = function() {
          return Object(S.jsx)(l.a, {
            render: function(e) {
              var n = e.isSideNavExpanded,
                t = e.onClickSideNavExpand;
              return Object(S.jsxs)(b.a, {
                'aria-label': 'Oyster Haven',
                children: [
                  Object(S.jsx)(d.a, {}),
                  Object(S.jsx)(O.a, {
                    'aria-label': 'Open menu',
                    onClick: t,
                    isActive: n,
                  }),
                  Object(S.jsx)(h.a, {
                    element: N.b,
                    to: '/',
                    prefix: '',
                    children: 'Oyster Haven',
                  }),
                  Object(S.jsx)(x.a, {
                    'aria-label': 'Oyster Haven',
                    children: Object(S.jsx)(u.a, {
                      href: '/repos',
                      children: 'Trends',
                    }),
                  }),
                  Object(S.jsx)(p.a, {
                    'aria-label': 'Side navigation',
                    expanded: n,
                    isPersistent: !1,
                    children: Object(S.jsx)(v.a, {
                      children: Object(S.jsx)(f.a, {
                        children: Object(S.jsx)(u.a, {
                          href: '/repos',
                          children: 'Trends',
                        }),
                      }),
                    }),
                  }),
                  Object(S.jsxs)(m.a, {
                    children: [
                      Object(S.jsx)(w.a, {
                        'aria-label': 'Notifications',
                        children: Object(S.jsx)(k.a, {}),
                      }),
                      Object(S.jsx)(w.a, {
                        'aria-label': 'User Avatar',
                        children: Object(S.jsx)(y.a, {}),
                      }),
                      Object(S.jsx)(w.a, {
                        'aria-label': 'App Switcher',
                        children: Object(S.jsx)(g.a, {}),
                      }),
                    ],
                  }),
                ],
              });
            },
          });
        },
        A = t(62),
        E = t(13),
        H = function() {
          return Object(S.jsx)('div', { children: 'COMING SOON' });
        },
        B = (function(e) {
          Object(j.a)(t, e);
          var n = Object(o.a)(t);
          function t() {
            return Object(i.a)(this, t), n.apply(this, arguments);
          }
          return (
            Object(s.a)(t, [
              {
                key: 'render',
                value: function() {
                  return Object(S.jsxs)('div', {
                    children: [
                      Object(S.jsx)(C, {}),
                      Object(S.jsx)(A.a, {
                        children: Object(S.jsx)(E.c, {
                          children: Object(S.jsx)(E.a, {
                            exact: !0,
                            path: '/',
                            component: H,
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(a.Component),
        I = B;
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(
        Object(S.jsx)(N.a, { children: Object(S.jsx)(I, {}) }),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[46, 1, 2]],
]);
//# sourceMappingURL=main.5e48d635.chunk.js.map
