/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.Pusher = e())
    : (t.Pusher = e())
})(window, function () {
  return (function (t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var o = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default
              }
            : function () {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 2))
    )
  })([
    function (t, e, n) {
      'use strict'
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function (t, e) {
            function n() {
              this.constructor = t
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()))
          })
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = (function () {
        function t(t) {
          void 0 === t && (t = '='), (this._paddingCharacter = t)
        }
        return (
          (t.prototype.encodedLength = function (t) {
            return this._paddingCharacter
              ? (((t + 2) / 3) * 4) | 0
              : ((8 * t + 5) / 6) | 0
          }),
          (t.prototype.encode = function (t) {
            for (var e = '', n = 0; n < t.length - 2; n += 3) {
              var r = (t[n] << 16) | (t[n + 1] << 8) | t[n + 2]
              ;(e += this._encodeByte((r >>> 18) & 63)),
                (e += this._encodeByte((r >>> 12) & 63)),
                (e += this._encodeByte((r >>> 6) & 63)),
                (e += this._encodeByte((r >>> 0) & 63))
            }
            var o = t.length - n
            if (o > 0) {
              r = (t[n] << 16) | (2 === o ? t[n + 1] << 8 : 0)
              ;(e += this._encodeByte((r >>> 18) & 63)),
                (e += this._encodeByte((r >>> 12) & 63)),
                (e +=
                  2 === o
                    ? this._encodeByte((r >>> 6) & 63)
                    : this._paddingCharacter || ''),
                (e += this._paddingCharacter || '')
            }
            return e
          }),
          (t.prototype.maxDecodedLength = function (t) {
            return this._paddingCharacter
              ? ((t / 4) * 3) | 0
              : ((6 * t + 7) / 8) | 0
          }),
          (t.prototype.decodedLength = function (t) {
            return this.maxDecodedLength(t.length - this._getPaddingLength(t))
          }),
          (t.prototype.decode = function (t) {
            if (0 === t.length) return new Uint8Array(0)
            for (
              var e = this._getPaddingLength(t),
                n = t.length - e,
                r = new Uint8Array(this.maxDecodedLength(n)),
                o = 0,
                i = 0,
                s = 0,
                c = 0,
                a = 0,
                u = 0,
                h = 0;
              i < n - 4;
              i += 4
            )
              (c = this._decodeChar(t.charCodeAt(i + 0))),
                (a = this._decodeChar(t.charCodeAt(i + 1))),
                (u = this._decodeChar(t.charCodeAt(i + 2))),
                (h = this._decodeChar(t.charCodeAt(i + 3))),
                (r[o++] = (c << 2) | (a >>> 4)),
                (r[o++] = (a << 4) | (u >>> 2)),
                (r[o++] = (u << 6) | h),
                (s |= 256 & c),
                (s |= 256 & a),
                (s |= 256 & u),
                (s |= 256 & h)
            if (
              (i < n - 1 &&
                ((c = this._decodeChar(t.charCodeAt(i))),
                (a = this._decodeChar(t.charCodeAt(i + 1))),
                (r[o++] = (c << 2) | (a >>> 4)),
                (s |= 256 & c),
                (s |= 256 & a)),
              i < n - 2 &&
                ((u = this._decodeChar(t.charCodeAt(i + 2))),
                (r[o++] = (a << 4) | (u >>> 2)),
                (s |= 256 & u)),
              i < n - 3 &&
                ((h = this._decodeChar(t.charCodeAt(i + 3))),
                (r[o++] = (u << 6) | h),
                (s |= 256 & h)),
              0 !== s)
            )
              throw new Error('Base64Coder: incorrect characters for decoding')
            return r
          }),
          (t.prototype._encodeByte = function (t) {
            var e = t
            return (
              (e += 65),
              (e += ((25 - t) >>> 8) & 6),
              (e += ((51 - t) >>> 8) & -75),
              (e += ((61 - t) >>> 8) & -15),
              (e += ((62 - t) >>> 8) & 3),
              String.fromCharCode(e)
            )
          }),
          (t.prototype._decodeChar = function (t) {
            var e = 256
            return (
              (e += (((42 - t) & (t - 44)) >>> 8) & (-256 + t - 43 + 62)),
              (e += (((46 - t) & (t - 48)) >>> 8) & (-256 + t - 47 + 63)),
              (e += (((47 - t) & (t - 58)) >>> 8) & (-256 + t - 48 + 52)),
              (e += (((64 - t) & (t - 91)) >>> 8) & (-256 + t - 65 + 0)),
              (e += (((96 - t) & (t - 123)) >>> 8) & (-256 + t - 97 + 26))
            )
          }),
          (t.prototype._getPaddingLength = function (t) {
            var e = 0
            if (this._paddingCharacter) {
              for (
                var n = t.length - 1;
                n >= 0 && t[n] === this._paddingCharacter;
                n--
              )
                e++
              if (t.length < 4 || e > 2)
                throw new Error('Base64Coder: incorrect padding')
            }
            return e
          }),
          t
        )
      })()
      e.Coder = i
      var s = new i()
      ;(e.encode = function (t) {
        return s.encode(t)
      }),
        (e.decode = function (t) {
          return s.decode(t)
        })
      var c = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          o(e, t),
          (e.prototype._encodeByte = function (t) {
            var e = t
            return (
              (e += 65),
              (e += ((25 - t) >>> 8) & 6),
              (e += ((51 - t) >>> 8) & -75),
              (e += ((61 - t) >>> 8) & -13),
              (e += ((62 - t) >>> 8) & 49),
              String.fromCharCode(e)
            )
          }),
          (e.prototype._decodeChar = function (t) {
            var e = 256
            return (
              (e += (((44 - t) & (t - 46)) >>> 8) & (-256 + t - 45 + 62)),
              (e += (((94 - t) & (t - 96)) >>> 8) & (-256 + t - 95 + 63)),
              (e += (((47 - t) & (t - 58)) >>> 8) & (-256 + t - 48 + 52)),
              (e += (((64 - t) & (t - 91)) >>> 8) & (-256 + t - 65 + 0)),
              (e += (((96 - t) & (t - 123)) >>> 8) & (-256 + t - 97 + 26))
            )
          }),
          e
        )
      })(i)
      e.URLSafeCoder = c
      var a = new c()
      ;(e.encodeURLSafe = function (t) {
        return a.encode(t)
      }),
        (e.decodeURLSafe = function (t) {
          return a.decode(t)
        }),
        (e.encodedLength = function (t) {
          return s.encodedLength(t)
        }),
        (e.maxDecodedLength = function (t) {
          return s.maxDecodedLength(t)
        }),
        (e.decodedLength = function (t) {
          return s.decodedLength(t)
        })
    },
    function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = 'utf8: invalid source encoding'
      function o(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          var r = t.charCodeAt(n)
          if (r < 128) e += 1
          else if (r < 2048) e += 2
          else if (r < 55296) e += 3
          else {
            if (!(r <= 57343)) throw new Error('utf8: invalid string')
            if (n >= t.length - 1) throw new Error('utf8: invalid string')
            n++, (e += 4)
          }
        }
        return e
      }
      ;(e.encode = function (t) {
        for (var e = new Uint8Array(o(t)), n = 0, r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r)
          i < 128
            ? (e[n++] = i)
            : i < 2048
            ? ((e[n++] = 192 | (i >> 6)), (e[n++] = 128 | (63 & i)))
            : i < 55296
            ? ((e[n++] = 224 | (i >> 12)),
              (e[n++] = 128 | ((i >> 6) & 63)),
              (e[n++] = 128 | (63 & i)))
            : (r++,
              (i = (1023 & i) << 10),
              (i |= 1023 & t.charCodeAt(r)),
              (i += 65536),
              (e[n++] = 240 | (i >> 18)),
              (e[n++] = 128 | ((i >> 12) & 63)),
              (e[n++] = 128 | ((i >> 6) & 63)),
              (e[n++] = 128 | (63 & i)))
        }
        return e
      }),
        (e.encodedLength = o),
        (e.decode = function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var o = t[n]
            if (128 & o) {
              var i = void 0
              if (o < 224) {
                if (n >= t.length) throw new Error(r)
                if (128 != (192 & (s = t[++n]))) throw new Error(r)
                ;(o = ((31 & o) << 6) | (63 & s)), (i = 128)
              } else if (o < 240) {
                if (n >= t.length - 1) throw new Error(r)
                var s = t[++n],
                  c = t[++n]
                if (128 != (192 & s) || 128 != (192 & c)) throw new Error(r)
                ;(o = ((15 & o) << 12) | ((63 & s) << 6) | (63 & c)), (i = 2048)
              } else {
                if (!(o < 248)) throw new Error(r)
                if (n >= t.length - 2) throw new Error(r)
                ;(s = t[++n]), (c = t[++n])
                var a = t[++n]
                if (128 != (192 & s) || 128 != (192 & c) || 128 != (192 & a))
                  throw new Error(r)
                ;(o =
                  ((15 & o) << 18) |
                  ((63 & s) << 12) |
                  ((63 & c) << 6) |
                  (63 & a)),
                  (i = 65536)
              }
              if (o < i || (o >= 55296 && o <= 57343)) throw new Error(r)
              if (o >= 65536) {
                if (o > 1114111) throw new Error(r)
                ;(o -= 65536),
                  e.push(String.fromCharCode(55296 | (o >> 10))),
                  (o = 56320 | (1023 & o))
              }
            }
            e.push(String.fromCharCode(o))
          }
          return e.join('')
        })
    },
    function (t, e, n) {
      t.exports = n(3).default
    },
    function (t, e, n) {
      'use strict'
      n.r(e)
      var r,
        o = (function () {
          function t(t, e) {
            ;(this.lastId = 0), (this.prefix = t), (this.name = e)
          }
          return (
            (t.prototype.create = function (t) {
              this.lastId++
              var e = this.lastId,
                n = this.prefix + e,
                r = this.name + '[' + e + ']',
                o = !1,
                i = function () {
                  o || (t.apply(null, arguments), (o = !0))
                }
              return (this[e] = i), { number: e, id: n, name: r, callback: i }
            }),
            (t.prototype.remove = function (t) {
              delete this[t.number]
            }),
            t
          )
        })(),
        i = new o('_pusher_script_', 'Pusher.ScriptReceivers'),
        s = {
          VERSION: '8.0.1',
          PROTOCOL: 7,
          wsPort: 80,
          wssPort: 443,
          wsPath: '',
          httpHost: 'sockjs.pusher.com',
          httpPort: 80,
          httpsPort: 443,
          httpPath: '/pusher',
          stats_host: 'stats.pusher.com',
          authEndpoint: '/pusher/auth',
          authTransport: 'ajax',
          activityTimeout: 12e4,
          pongTimeout: 3e4,
          unavailableTimeout: 1e4,
          userAuthentication: {
            endpoint: '/pusher/user-auth',
            transport: 'ajax'
          },
          channelAuthorization: { endpoint: '/pusher/auth', transport: 'ajax' },
          cdn_http: 'http://js.pusher.com',
          cdn_https: 'https://js.pusher.com',
          dependency_suffix: ''
        },
        c = (function () {
          function t(t) {
            ;(this.options = t),
              (this.receivers = t.receivers || i),
              (this.loading = {})
          }
          return (
            (t.prototype.load = function (t, e, n) {
              var r = this
              if (r.loading[t] && r.loading[t].length > 0) r.loading[t].push(n)
              else {
                r.loading[t] = [n]
                var o = Ce.createScriptRequest(r.getPath(t, e)),
                  i = r.receivers.create(function (e) {
                    if ((r.receivers.remove(i), r.loading[t])) {
                      var n = r.loading[t]
                      delete r.loading[t]
                      for (
                        var s = function (t) {
                            t || o.cleanup()
                          },
                          c = 0;
                        c < n.length;
                        c++
                      )
                        n[c](e, s)
                    }
                  })
                o.send(i)
              }
            }),
            (t.prototype.getRoot = function (t) {
              var e = Ce.getDocument().location.protocol
              return (
                ((t && t.useTLS) || 'https:' === e
                  ? this.options.cdn_https
                  : this.options.cdn_http
                ).replace(/\/*$/, '') +
                '/' +
                this.options.version
              )
            }),
            (t.prototype.getPath = function (t, e) {
              return this.getRoot(e) + '/' + t + this.options.suffix + '.js'
            }),
            t
          )
        })(),
        a = new o('_pusher_dependencies', 'Pusher.DependenciesReceivers'),
        u = new c({
          cdn_http: s.cdn_http,
          cdn_https: s.cdn_https,
          version: s.VERSION,
          suffix: s.dependency_suffix,
          receivers: a
        }),
        h = {
          baseUrl: 'https://pusher.com',
          urls: {
            authenticationEndpoint: {
              path: '/docs/channels/server_api/authenticating_users'
            },
            authorizationEndpoint: {
              path: '/docs/channels/server_api/authorizing-users/'
            },
            javascriptQuickStart: { path: '/docs/javascript_quick_start' },
            triggeringClientEvents: {
              path: '/docs/client_api_guide/client_events#trigger-events'
            },
            encryptedChannelSupport: {
              fullUrl:
                'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
            }
          }
        },
        p = function (t) {
          var e,
            n = h.urls[t]
          return n
            ? (n.fullUrl ? (e = n.fullUrl) : n.path && (e = h.baseUrl + n.path),
              e ? 'See: ' + e : '')
            : ''
        }
      !(function (t) {
        ;(t.UserAuthentication = 'user-authentication'),
          (t.ChannelAuthorization = 'channel-authorization')
      })(r || (r = {}))
      var l,
        f =
          ((l = function (t, e) {
            return (l =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          }),
          function (t, e) {
            function n() {
              this.constructor = t
            }
            l(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()))
          }),
        d = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        y = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        v = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        g = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        b = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        m = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        _ = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        w = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this
            return Object.setPrototypeOf(r, n.prototype), r
          }
          return f(e, t), e
        })(Error),
        S = (function (t) {
          function e(e, n) {
            var r = this.constructor,
              o = t.call(this, n) || this
            return (o.status = e), Object.setPrototypeOf(o, r.prototype), o
          }
          return f(e, t), e
        })(Error),
        k = function (t, e, n, o, i) {
          var s = Ce.createXHR()
          for (var c in (s.open('POST', n.endpoint, !0),
          s.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          ),
          n.headers))
            s.setRequestHeader(c, n.headers[c])
          if (null != n.headersProvider) {
            var a = n.headersProvider()
            for (var c in a) s.setRequestHeader(c, a[c])
          }
          return (
            (s.onreadystatechange = function () {
              if (4 === s.readyState)
                if (200 === s.status) {
                  var t = void 0,
                    e = !1
                  try {
                    ;(t = JSON.parse(s.responseText)), (e = !0)
                  } catch (t) {
                    i(
                      new S(
                        200,
                        'JSON returned from ' +
                          o.toString() +
                          ' endpoint was invalid, yet status code was 200. Data was: ' +
                          s.responseText
                      ),
                      null
                    )
                  }
                  e && i(null, t)
                } else {
                  var c = ''
                  switch (o) {
                    case r.UserAuthentication:
                      c = p('authenticationEndpoint')
                      break
                    case r.ChannelAuthorization:
                      c =
                        'Clients must be authorized to join private or presence channels. ' +
                        p('authorizationEndpoint')
                  }
                  i(
                    new S(
                      s.status,
                      'Unable to retrieve auth string from ' +
                        o.toString() +
                        ' endpoint - received status: ' +
                        s.status +
                        ' from ' +
                        n.endpoint +
                        '. ' +
                        c
                    ),
                    null
                  )
                }
            }),
            s.send(e),
            s
          )
        }
      for (
        var C = String.fromCharCode,
          P =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          T = {},
          O = 0,
          E = P.length;
        O < E;
        O++
      )
        T[P.charAt(O)] = O
      var A = function (t) {
          var e = t.charCodeAt(0)
          return e < 128
            ? t
            : e < 2048
            ? C(192 | (e >>> 6)) + C(128 | (63 & e))
            : C(224 | ((e >>> 12) & 15)) +
              C(128 | ((e >>> 6) & 63)) +
              C(128 | (63 & e))
        },
        x = function (t) {
          return t.replace(/[^\x00-\x7F]/g, A)
        },
        L = function (t) {
          var e = [0, 2, 1][t.length % 3],
            n =
              (t.charCodeAt(0) << 16) |
              ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
              (t.length > 2 ? t.charCodeAt(2) : 0)
          return [
            P.charAt(n >>> 18),
            P.charAt((n >>> 12) & 63),
            e >= 2 ? '=' : P.charAt((n >>> 6) & 63),
            e >= 1 ? '=' : P.charAt(63 & n)
          ].join('')
        },
        R =
          window.btoa ||
          function (t) {
            return t.replace(/[\s\S]{1,3}/g, L)
          },
        j = (function () {
          function t(t, e, n, r) {
            var o = this
            ;(this.clear = e),
              (this.timer = t(function () {
                o.timer && (o.timer = r(o.timer))
              }, n))
          }
          return (
            (t.prototype.isRunning = function () {
              return null !== this.timer
            }),
            (t.prototype.ensureAborted = function () {
              this.timer && (this.clear(this.timer), (this.timer = null))
            }),
            t
          )
        })(),
        I = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })()
      function D(t) {
        window.clearTimeout(t)
      }
      function N(t) {
        window.clearInterval(t)
      }
      var H = (function (t) {
          function e(e, n) {
            return (
              t.call(this, setTimeout, D, e, function (t) {
                return n(), null
              }) || this
            )
          }
          return I(e, t), e
        })(j),
        U = (function (t) {
          function e(e, n) {
            return (
              t.call(this, setInterval, N, e, function (t) {
                return n(), t
              }) || this
            )
          }
          return I(e, t), e
        })(j),
        M = {
          now: function () {
            return Date.now ? Date.now() : new Date().valueOf()
          },
          defer: function (t) {
            return new H(0, t)
          },
          method: function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n]
            var r = Array.prototype.slice.call(arguments, 1)
            return function (e) {
              return e[t].apply(e, r.concat(arguments))
            }
          }
        }
      function z(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        for (var r = 0; r < e.length; r++) {
          var o = e[r]
          for (var i in o)
            o[i] && o[i].constructor && o[i].constructor === Object
              ? (t[i] = z(t[i] || {}, o[i]))
              : (t[i] = o[i])
        }
        return t
      }
      function q() {
        for (var t = ['Pusher'], e = 0; e < arguments.length; e++)
          'string' == typeof arguments[e]
            ? t.push(arguments[e])
            : t.push(K(arguments[e]))
        return t.join(' : ')
      }
      function B(t, e) {
        var n = Array.prototype.indexOf
        if (null === t) return -1
        if (n && t.indexOf === n) return t.indexOf(e)
        for (var r = 0, o = t.length; r < o; r++) if (t[r] === e) return r
        return -1
      }
      function F(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t)
      }
      function X(t) {
        var e = []
        return (
          F(t, function (t, n) {
            e.push(n)
          }),
          e
        )
      }
      function J(t, e, n) {
        for (var r = 0; r < t.length; r++) e.call(n || window, t[r], r, t)
      }
      function W(t, e) {
        for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r, t, n))
        return n
      }
      function G(t, e) {
        e =
          e ||
          function (t) {
            return !!t
          }
        for (var n = [], r = 0; r < t.length; r++)
          e(t[r], r, t, n) && n.push(t[r])
        return n
      }
      function V(t, e) {
        var n = {}
        return (
          F(t, function (r, o) {
            ;((e && e(r, o, t, n)) || Boolean(r)) && (n[o] = r)
          }),
          n
        )
      }
      function Y(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return !0
        return !1
      }
      function $(t) {
        return (
          (e = function (t) {
            return (
              'object' == typeof t && (t = K(t)),
              encodeURIComponent(((e = t.toString()), R(x(e))))
            )
            var e
          }),
          (n = {}),
          F(t, function (t, r) {
            n[r] = e(t)
          }),
          n
        )
        var e, n
      }
      function Q(t) {
        var e,
          n,
          r = V(t, function (t) {
            return void 0 !== t
          })
        return W(
          ((e = $(r)),
          (n = []),
          F(e, function (t, e) {
            n.push([e, t])
          }),
          n),
          M.method('join', '=')
        ).join('&')
      }
      function K(t) {
        try {
          return JSON.stringify(t)
        } catch (r) {
          return JSON.stringify(
            ((e = []),
            (n = []),
            (function t(r, o) {
              var i, s, c
              switch (typeof r) {
                case 'object':
                  if (!r) return null
                  for (i = 0; i < e.length; i += 1)
                    if (e[i] === r) return { $ref: n[i] }
                  if (
                    (e.push(r),
                    n.push(o),
                    '[object Array]' === Object.prototype.toString.apply(r))
                  )
                    for (c = [], i = 0; i < r.length; i += 1)
                      c[i] = t(r[i], o + '[' + i + ']')
                  else
                    for (s in ((c = {}), r))
                      Object.prototype.hasOwnProperty.call(r, s) &&
                        (c[s] = t(r[s], o + '[' + JSON.stringify(s) + ']'))
                  return c
                case 'number':
                case 'string':
                case 'boolean':
                  return r
              }
            })(t, '$'))
          )
        }
        var e, n
      }
      var Z = new ((function () {
          function t() {
            this.globalLog = function (t) {
              window.console && window.console.log && window.console.log(t)
            }
          }
          return (
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this.log(this.globalLog, t)
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this.log(this.globalLogWarn, t)
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this.log(this.globalLogError, t)
            }),
            (t.prototype.globalLogWarn = function (t) {
              window.console && window.console.warn
                ? window.console.warn(t)
                : this.globalLog(t)
            }),
            (t.prototype.globalLogError = function (t) {
              window.console && window.console.error
                ? window.console.error(t)
                : this.globalLogWarn(t)
            }),
            (t.prototype.log = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              var r = q.apply(this, arguments)
              if (Ge.log) Ge.log(r)
              else if (Ge.logToConsole) {
                var o = t.bind(this)
                o(r)
              }
            }),
            t
          )
        })())(),
        tt = function (t, e, n, r, o) {
          ;(void 0 === n.headers && null == n.headersProvider) ||
            Z.warn(
              'To send headers with the ' +
                r.toString() +
                ' request, you must use AJAX, rather than JSONP.'
            )
          var i = t.nextAuthCallbackID.toString()
          t.nextAuthCallbackID++
          var s = t.getDocument(),
            c = s.createElement('script')
          t.auth_callbacks[i] = function (t) {
            o(null, t)
          }
          var a = "Pusher.auth_callbacks['" + i + "']"
          c.src = n.endpoint + '?callback=' + encodeURIComponent(a) + '&' + e
          var u = s.getElementsByTagName('head')[0] || s.documentElement
          u.insertBefore(c, u.firstChild)
        },
        et = (function () {
          function t(t) {
            this.src = t
          }
          return (
            (t.prototype.send = function (t) {
              var e = this,
                n = 'Error loading ' + e.src
              ;(e.script = document.createElement('script')),
                (e.script.id = t.id),
                (e.script.src = e.src),
                (e.script.type = 'text/javascript'),
                (e.script.charset = 'UTF-8'),
                e.script.addEventListener
                  ? ((e.script.onerror = function () {
                      t.callback(n)
                    }),
                    (e.script.onload = function () {
                      t.callback(null)
                    }))
                  : (e.script.onreadystatechange = function () {
                      ;('loaded' !== e.script.readyState &&
                        'complete' !== e.script.readyState) ||
                        t.callback(null)
                    }),
                void 0 === e.script.async &&
                document.attachEvent &&
                /opera/i.test(navigator.userAgent)
                  ? ((e.errorScript = document.createElement('script')),
                    (e.errorScript.id = t.id + '_error'),
                    (e.errorScript.text = t.name + "('" + n + "');"),
                    (e.script.async = e.errorScript.async = !1))
                  : (e.script.async = !0)
              var r = document.getElementsByTagName('head')[0]
              r.insertBefore(e.script, r.firstChild),
                e.errorScript &&
                  r.insertBefore(e.errorScript, e.script.nextSibling)
            }),
            (t.prototype.cleanup = function () {
              this.script &&
                ((this.script.onload = this.script.onerror = null),
                (this.script.onreadystatechange = null)),
                this.script &&
                  this.script.parentNode &&
                  this.script.parentNode.removeChild(this.script),
                this.errorScript &&
                  this.errorScript.parentNode &&
                  this.errorScript.parentNode.removeChild(this.errorScript),
                (this.script = null),
                (this.errorScript = null)
            }),
            t
          )
        })(),
        nt = (function () {
          function t(t, e) {
            ;(this.url = t), (this.data = e)
          }
          return (
            (t.prototype.send = function (t) {
              if (!this.request) {
                var e = Q(this.data),
                  n = this.url + '/' + t.number + '?' + e
                ;(this.request = Ce.createScriptRequest(n)),
                  this.request.send(t)
              }
            }),
            (t.prototype.cleanup = function () {
              this.request && this.request.cleanup()
            }),
            t
          )
        })(),
        rt = {
          name: 'jsonp',
          getAgent: function (t, e) {
            return function (n, r) {
              var o =
                  'http' +
                  (e ? 's' : '') +
                  '://' +
                  (t.host || t.options.host) +
                  t.options.path,
                s = Ce.createJSONPRequest(o, n),
                c = Ce.ScriptReceivers.create(function (e, n) {
                  i.remove(c),
                    s.cleanup(),
                    n && n.host && (t.host = n.host),
                    r && r(e, n)
                })
              s.send(c)
            }
          }
        }
      function ot(t, e, n) {
        return (
          t +
          (e.useTLS ? 's' : '') +
          '://' +
          (e.useTLS ? e.hostTLS : e.hostNonTLS) +
          n
        )
      }
      function it(t, e) {
        return (
          '/app/' +
          t +
          ('?protocol=' +
            s.PROTOCOL +
            '&client=js&version=' +
            s.VERSION +
            (e ? '&' + e : ''))
        )
      }
      var st = {
          getInitial: function (t, e) {
            return ot('ws', e, (e.httpPath || '') + it(t, 'flash=false'))
          }
        },
        ct = {
          getInitial: function (t, e) {
            return ot('http', e, (e.httpPath || '/pusher') + it(t))
          }
        },
        at = {
          getInitial: function (t, e) {
            return ot('http', e, e.httpPath || '/pusher')
          },
          getPath: function (t, e) {
            return it(t)
          }
        },
        ut = (function () {
          function t() {
            this._callbacks = {}
          }
          return (
            (t.prototype.get = function (t) {
              return this._callbacks[ht(t)]
            }),
            (t.prototype.add = function (t, e, n) {
              var r = ht(t)
              ;(this._callbacks[r] = this._callbacks[r] || []),
                this._callbacks[r].push({ fn: e, context: n })
            }),
            (t.prototype.remove = function (t, e, n) {
              if (t || e || n) {
                var r = t ? [ht(t)] : X(this._callbacks)
                e || n
                  ? this.removeCallback(r, e, n)
                  : this.removeAllCallbacks(r)
              } else this._callbacks = {}
            }),
            (t.prototype.removeCallback = function (t, e, n) {
              J(
                t,
                function (t) {
                  ;(this._callbacks[t] = G(
                    this._callbacks[t] || [],
                    function (t) {
                      return (e && e !== t.fn) || (n && n !== t.context)
                    }
                  )),
                    0 === this._callbacks[t].length && delete this._callbacks[t]
                },
                this
              )
            }),
            (t.prototype.removeAllCallbacks = function (t) {
              J(
                t,
                function (t) {
                  delete this._callbacks[t]
                },
                this
              )
            }),
            t
          )
        })()
      function ht(t) {
        return '_' + t
      }
      var pt = (function () {
          function t(t) {
            ;(this.callbacks = new ut()),
              (this.global_callbacks = []),
              (this.failThrough = t)
          }
          return (
            (t.prototype.bind = function (t, e, n) {
              return this.callbacks.add(t, e, n), this
            }),
            (t.prototype.bind_global = function (t) {
              return this.global_callbacks.push(t), this
            }),
            (t.prototype.unbind = function (t, e, n) {
              return this.callbacks.remove(t, e, n), this
            }),
            (t.prototype.unbind_global = function (t) {
              return t
                ? ((this.global_callbacks = G(
                    this.global_callbacks || [],
                    function (e) {
                      return e !== t
                    }
                  )),
                  this)
                : ((this.global_callbacks = []), this)
            }),
            (t.prototype.unbind_all = function () {
              return this.unbind(), this.unbind_global(), this
            }),
            (t.prototype.emit = function (t, e, n) {
              for (var r = 0; r < this.global_callbacks.length; r++)
                this.global_callbacks[r](t, e)
              var o = this.callbacks.get(t),
                i = []
              if ((n ? i.push(e, n) : e && i.push(e), o && o.length > 0))
                for (r = 0; r < o.length; r++)
                  o[r].fn.apply(o[r].context || window, i)
              else this.failThrough && this.failThrough(t, e)
              return this
            }),
            t
          )
        })(),
        lt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        ft = (function (t) {
          function e(e, n, r, o, i) {
            var s = t.call(this) || this
            return (
              (s.initialize = Ce.transportConnectionInitializer),
              (s.hooks = e),
              (s.name = n),
              (s.priority = r),
              (s.key = o),
              (s.options = i),
              (s.state = 'new'),
              (s.timeline = i.timeline),
              (s.activityTimeout = i.activityTimeout),
              (s.id = s.timeline.generateUniqueID()),
              s
            )
          }
          return (
            lt(e, t),
            (e.prototype.handlesActivityChecks = function () {
              return Boolean(this.hooks.handlesActivityChecks)
            }),
            (e.prototype.supportsPing = function () {
              return Boolean(this.hooks.supportsPing)
            }),
            (e.prototype.connect = function () {
              var t = this
              if (this.socket || 'initialized' !== this.state) return !1
              var e = this.hooks.urls.getInitial(this.key, this.options)
              try {
                this.socket = this.hooks.getSocket(e, this.options)
              } catch (e) {
                return (
                  M.defer(function () {
                    t.onError(e), t.changeState('closed')
                  }),
                  !1
                )
              }
              return (
                this.bindListeners(),
                Z.debug('Connecting', { transport: this.name, url: e }),
                this.changeState('connecting'),
                !0
              )
            }),
            (e.prototype.close = function () {
              return !!this.socket && (this.socket.close(), !0)
            }),
            (e.prototype.send = function (t) {
              var e = this
              return (
                'open' === this.state &&
                (M.defer(function () {
                  e.socket && e.socket.send(t)
                }),
                !0)
              )
            }),
            (e.prototype.ping = function () {
              'open' === this.state && this.supportsPing() && this.socket.ping()
            }),
            (e.prototype.onOpen = function () {
              this.hooks.beforeOpen &&
                this.hooks.beforeOpen(
                  this.socket,
                  this.hooks.urls.getPath(this.key, this.options)
                ),
                this.changeState('open'),
                (this.socket.onopen = void 0)
            }),
            (e.prototype.onError = function (t) {
              this.emit('error', { type: 'WebSocketError', error: t }),
                this.timeline.error(
                  this.buildTimelineMessage({ error: t.toString() })
                )
            }),
            (e.prototype.onClose = function (t) {
              t
                ? this.changeState('closed', {
                    code: t.code,
                    reason: t.reason,
                    wasClean: t.wasClean
                  })
                : this.changeState('closed'),
                this.unbindListeners(),
                (this.socket = void 0)
            }),
            (e.prototype.onMessage = function (t) {
              this.emit('message', t)
            }),
            (e.prototype.onActivity = function () {
              this.emit('activity')
            }),
            (e.prototype.bindListeners = function () {
              var t = this
              ;(this.socket.onopen = function () {
                t.onOpen()
              }),
                (this.socket.onerror = function (e) {
                  t.onError(e)
                }),
                (this.socket.onclose = function (e) {
                  t.onClose(e)
                }),
                (this.socket.onmessage = function (e) {
                  t.onMessage(e)
                }),
                this.supportsPing() &&
                  (this.socket.onactivity = function () {
                    t.onActivity()
                  })
            }),
            (e.prototype.unbindListeners = function () {
              this.socket &&
                ((this.socket.onopen = void 0),
                (this.socket.onerror = void 0),
                (this.socket.onclose = void 0),
                (this.socket.onmessage = void 0),
                this.supportsPing() && (this.socket.onactivity = void 0))
            }),
            (e.prototype.changeState = function (t, e) {
              ;(this.state = t),
                this.timeline.info(
                  this.buildTimelineMessage({ state: t, params: e })
                ),
                this.emit(t, e)
            }),
            (e.prototype.buildTimelineMessage = function (t) {
              return z({ cid: this.id }, t)
            }),
            e
          )
        })(pt),
        dt = (function () {
          function t(t) {
            this.hooks = t
          }
          return (
            (t.prototype.isSupported = function (t) {
              return this.hooks.isSupported(t)
            }),
            (t.prototype.createConnection = function (t, e, n, r) {
              return new ft(this.hooks, t, e, n, r)
            }),
            t
          )
        })(),
        yt = new dt({
          urls: st,
          handlesActivityChecks: !1,
          supportsPing: !1,
          isInitialized: function () {
            return Boolean(Ce.getWebSocketAPI())
          },
          isSupported: function () {
            return Boolean(Ce.getWebSocketAPI())
          },
          getSocket: function (t) {
            return Ce.createWebSocket(t)
          }
        }),
        vt = {
          urls: ct,
          handlesActivityChecks: !1,
          supportsPing: !0,
          isInitialized: function () {
            return !0
          }
        },
        gt = z(
          {
            getSocket: function (t) {
              return Ce.HTTPFactory.createStreamingSocket(t)
            }
          },
          vt
        ),
        bt = z(
          {
            getSocket: function (t) {
              return Ce.HTTPFactory.createPollingSocket(t)
            }
          },
          vt
        ),
        mt = {
          isSupported: function () {
            return Ce.isXHRSupported()
          }
        },
        _t = {
          ws: yt,
          xhr_streaming: new dt(z({}, gt, mt)),
          xhr_polling: new dt(z({}, bt, mt))
        },
        wt = new dt({
          file: 'sockjs',
          urls: at,
          handlesActivityChecks: !0,
          supportsPing: !1,
          isSupported: function () {
            return !0
          },
          isInitialized: function () {
            return void 0 !== window.SockJS
          },
          getSocket: function (t, e) {
            return new window.SockJS(t, null, {
              js_path: u.getPath('sockjs', { useTLS: e.useTLS }),
              ignore_null_origin: e.ignoreNullOrigin
            })
          },
          beforeOpen: function (t, e) {
            t.send(JSON.stringify({ path: e }))
          }
        }),
        St = {
          isSupported: function (t) {
            return Ce.isXDRSupported(t.useTLS)
          }
        },
        kt = new dt(z({}, gt, St)),
        Ct = new dt(z({}, bt, St))
      ;(_t.xdr_streaming = kt), (_t.xdr_polling = Ct), (_t.sockjs = wt)
      var Pt = _t,
        Tt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Ot = new ((function (t) {
          function e() {
            var e = t.call(this) || this,
              n = e
            return (
              void 0 !== window.addEventListener &&
                (window.addEventListener(
                  'online',
                  function () {
                    n.emit('online')
                  },
                  !1
                ),
                window.addEventListener(
                  'offline',
                  function () {
                    n.emit('offline')
                  },
                  !1
                )),
              e
            )
          }
          return (
            Tt(e, t),
            (e.prototype.isOnline = function () {
              return (
                void 0 === window.navigator.onLine || window.navigator.onLine
              )
            }),
            e
          )
        })(pt))(),
        Et = (function () {
          function t(t, e, n) {
            ;(this.manager = t),
              (this.transport = e),
              (this.minPingDelay = n.minPingDelay),
              (this.maxPingDelay = n.maxPingDelay),
              (this.pingDelay = void 0)
          }
          return (
            (t.prototype.createConnection = function (t, e, n, r) {
              var o = this
              r = z({}, r, { activityTimeout: this.pingDelay })
              var i = this.transport.createConnection(t, e, n, r),
                s = null,
                c = function () {
                  i.unbind('open', c), i.bind('closed', a), (s = M.now())
                },
                a = function (t) {
                  if (
                    (i.unbind('closed', a), 1002 === t.code || 1003 === t.code)
                  )
                    o.manager.reportDeath()
                  else if (!t.wasClean && s) {
                    var e = M.now() - s
                    e < 2 * o.maxPingDelay &&
                      (o.manager.reportDeath(),
                      (o.pingDelay = Math.max(e / 2, o.minPingDelay)))
                  }
                }
              return i.bind('open', c), i
            }),
            (t.prototype.isSupported = function (t) {
              return this.manager.isAlive() && this.transport.isSupported(t)
            }),
            t
          )
        })(),
        At = {
          decodeMessage: function (t) {
            try {
              var e = JSON.parse(t.data),
                n = e.data
              if ('string' == typeof n)
                try {
                  n = JSON.parse(e.data)
                } catch (t) {}
              var r = { event: e.event, channel: e.channel, data: n }
              return e.user_id && (r.user_id = e.user_id), r
            } catch (e) {
              throw { type: 'MessageParseError', error: e, data: t.data }
            }
          },
          encodeMessage: function (t) {
            return JSON.stringify(t)
          },
          processHandshake: function (t) {
            var e = At.decodeMessage(t)
            if ('pusher:connection_established' === e.event) {
              if (!e.data.activity_timeout)
                throw 'No activity timeout specified in handshake'
              return {
                action: 'connected',
                id: e.data.socket_id,
                activityTimeout: 1e3 * e.data.activity_timeout
              }
            }
            if ('pusher:error' === e.event)
              return {
                action: this.getCloseAction(e.data),
                error: this.getCloseError(e.data)
              }
            throw 'Invalid handshake'
          },
          getCloseAction: function (t) {
            return t.code < 4e3
              ? t.code >= 1002 && t.code <= 1004
                ? 'backoff'
                : null
              : 4e3 === t.code
              ? 'tls_only'
              : t.code < 4100
              ? 'refused'
              : t.code < 4200
              ? 'backoff'
              : t.code < 4300
              ? 'retry'
              : 'refused'
          },
          getCloseError: function (t) {
            return 1e3 !== t.code && 1001 !== t.code
              ? {
                  type: 'PusherError',
                  data: { code: t.code, message: t.reason || t.message }
                }
              : null
          }
        },
        xt = At,
        Lt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Rt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this
            return (
              (r.id = e),
              (r.transport = n),
              (r.activityTimeout = n.activityTimeout),
              r.bindListeners(),
              r
            )
          }
          return (
            Lt(e, t),
            (e.prototype.handlesActivityChecks = function () {
              return this.transport.handlesActivityChecks()
            }),
            (e.prototype.send = function (t) {
              return this.transport.send(t)
            }),
            (e.prototype.send_event = function (t, e, n) {
              var r = { event: t, data: e }
              return (
                n && (r.channel = n),
                Z.debug('Event sent', r),
                this.send(xt.encodeMessage(r))
              )
            }),
            (e.prototype.ping = function () {
              this.transport.supportsPing()
                ? this.transport.ping()
                : this.send_event('pusher:ping', {})
            }),
            (e.prototype.close = function () {
              this.transport.close()
            }),
            (e.prototype.bindListeners = function () {
              var t = this,
                e = {
                  message: function (e) {
                    var n
                    try {
                      n = xt.decodeMessage(e)
                    } catch (n) {
                      t.emit('error', {
                        type: 'MessageParseError',
                        error: n,
                        data: e.data
                      })
                    }
                    if (void 0 !== n) {
                      switch ((Z.debug('Event recd', n), n.event)) {
                        case 'pusher:error':
                          t.emit('error', { type: 'PusherError', data: n.data })
                          break
                        case 'pusher:ping':
                          t.emit('ping')
                          break
                        case 'pusher:pong':
                          t.emit('pong')
                      }
                      t.emit('message', n)
                    }
                  },
                  activity: function () {
                    t.emit('activity')
                  },
                  error: function (e) {
                    t.emit('error', e)
                  },
                  closed: function (e) {
                    n(),
                      e && e.code && t.handleCloseEvent(e),
                      (t.transport = null),
                      t.emit('closed')
                  }
                },
                n = function () {
                  F(e, function (e, n) {
                    t.transport.unbind(n, e)
                  })
                }
              F(e, function (e, n) {
                t.transport.bind(n, e)
              })
            }),
            (e.prototype.handleCloseEvent = function (t) {
              var e = xt.getCloseAction(t),
                n = xt.getCloseError(t)
              n && this.emit('error', n),
                e && this.emit(e, { action: e, error: n })
            }),
            e
          )
        })(pt),
        jt = (function () {
          function t(t, e) {
            ;(this.transport = t), (this.callback = e), this.bindListeners()
          }
          return (
            (t.prototype.close = function () {
              this.unbindListeners(), this.transport.close()
            }),
            (t.prototype.bindListeners = function () {
              var t = this
              ;(this.onMessage = function (e) {
                var n
                t.unbindListeners()
                try {
                  n = xt.processHandshake(e)
                } catch (e) {
                  return (
                    t.finish('error', { error: e }), void t.transport.close()
                  )
                }
                'connected' === n.action
                  ? t.finish('connected', {
                      connection: new Rt(n.id, t.transport),
                      activityTimeout: n.activityTimeout
                    })
                  : (t.finish(n.action, { error: n.error }),
                    t.transport.close())
              }),
                (this.onClosed = function (e) {
                  t.unbindListeners()
                  var n = xt.getCloseAction(e) || 'backoff',
                    r = xt.getCloseError(e)
                  t.finish(n, { error: r })
                }),
                this.transport.bind('message', this.onMessage),
                this.transport.bind('closed', this.onClosed)
            }),
            (t.prototype.unbindListeners = function () {
              this.transport.unbind('message', this.onMessage),
                this.transport.unbind('closed', this.onClosed)
            }),
            (t.prototype.finish = function (t, e) {
              this.callback(z({ transport: this.transport, action: t }, e))
            }),
            t
          )
        })(),
        It = (function () {
          function t(t, e) {
            ;(this.timeline = t), (this.options = e || {})
          }
          return (
            (t.prototype.send = function (t, e) {
              this.timeline.isEmpty() ||
                this.timeline.send(Ce.TimelineTransport.getAgent(this, t), e)
            }),
            t
          )
        })(),
        Dt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Nt = (function (t) {
          function e(e, n) {
            var r =
              t.call(this, function (t, n) {
                Z.debug('No callbacks on ' + e + ' for ' + t)
              }) || this
            return (
              (r.name = e),
              (r.pusher = n),
              (r.subscribed = !1),
              (r.subscriptionPending = !1),
              (r.subscriptionCancelled = !1),
              r
            )
          }
          return (
            Dt(e, t),
            (e.prototype.authorize = function (t, e) {
              return e(null, { auth: '' })
            }),
            (e.prototype.trigger = function (t, e) {
              if (0 !== t.indexOf('client-'))
                throw new d("Event '" + t + "' does not start with 'client-'")
              if (!this.subscribed) {
                var n = p('triggeringClientEvents')
                Z.warn(
                  "Client event triggered before channel 'subscription_succeeded' event . " +
                    n
                )
              }
              return this.pusher.send_event(t, e, this.name)
            }),
            (e.prototype.disconnect = function () {
              ;(this.subscribed = !1), (this.subscriptionPending = !1)
            }),
            (e.prototype.handleEvent = function (t) {
              var e = t.event,
                n = t.data
              if ('pusher_internal:subscription_succeeded' === e)
                this.handleSubscriptionSucceededEvent(t)
              else if ('pusher_internal:subscription_count' === e)
                this.handleSubscriptionCountEvent(t)
              else if (0 !== e.indexOf('pusher_internal:')) {
                this.emit(e, n, {})
              }
            }),
            (e.prototype.handleSubscriptionSucceededEvent = function (t) {
              ;(this.subscriptionPending = !1),
                (this.subscribed = !0),
                this.subscriptionCancelled
                  ? this.pusher.unsubscribe(this.name)
                  : this.emit('pusher:subscription_succeeded', t.data)
            }),
            (e.prototype.handleSubscriptionCountEvent = function (t) {
              t.data.subscription_count &&
                (this.subscriptionCount = t.data.subscription_count),
                this.emit('pusher:subscription_count', t.data)
            }),
            (e.prototype.subscribe = function () {
              var t = this
              this.subscribed ||
                ((this.subscriptionPending = !0),
                (this.subscriptionCancelled = !1),
                this.authorize(
                  this.pusher.connection.socket_id,
                  function (e, n) {
                    e
                      ? ((t.subscriptionPending = !1),
                        Z.error(e.toString()),
                        t.emit(
                          'pusher:subscription_error',
                          Object.assign(
                            {},
                            { type: 'AuthError', error: e.message },
                            e instanceof S ? { status: e.status } : {}
                          )
                        ))
                      : t.pusher.send_event('pusher:subscribe', {
                          auth: n.auth,
                          channel_data: n.channel_data,
                          channel: t.name
                        })
                  }
                ))
            }),
            (e.prototype.unsubscribe = function () {
              ;(this.subscribed = !1),
                this.pusher.send_event('pusher:unsubscribe', {
                  channel: this.name
                })
            }),
            (e.prototype.cancelSubscription = function () {
              this.subscriptionCancelled = !0
            }),
            (e.prototype.reinstateSubscription = function () {
              this.subscriptionCancelled = !1
            }),
            e
          )
        })(pt),
        Ht = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Ut = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            Ht(e, t),
            (e.prototype.authorize = function (t, e) {
              return this.pusher.config.channelAuthorizer(
                { channelName: this.name, socketId: t },
                e
              )
            }),
            e
          )
        })(Nt),
        Mt = (function () {
          function t() {
            this.reset()
          }
          return (
            (t.prototype.get = function (t) {
              return Object.prototype.hasOwnProperty.call(this.members, t)
                ? { id: t, info: this.members[t] }
                : null
            }),
            (t.prototype.each = function (t) {
              var e = this
              F(this.members, function (n, r) {
                t(e.get(r))
              })
            }),
            (t.prototype.setMyID = function (t) {
              this.myID = t
            }),
            (t.prototype.onSubscription = function (t) {
              ;(this.members = t.presence.hash),
                (this.count = t.presence.count),
                (this.me = this.get(this.myID))
            }),
            (t.prototype.addMember = function (t) {
              return (
                null === this.get(t.user_id) && this.count++,
                (this.members[t.user_id] = t.user_info),
                this.get(t.user_id)
              )
            }),
            (t.prototype.removeMember = function (t) {
              var e = this.get(t.user_id)
              return e && (delete this.members[t.user_id], this.count--), e
            }),
            (t.prototype.reset = function () {
              ;(this.members = {}),
                (this.count = 0),
                (this.myID = null),
                (this.me = null)
            }),
            t
          )
        })(),
        zt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        qt = function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(t) {
              try {
                a(r.next(t))
              } catch (t) {
                i(t)
              }
            }
            function c(t) {
              try {
                a(r.throw(t))
              } catch (t) {
                i(t)
              }
            }
            function a(t) {
              var e
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e)
                      })).then(s, c)
            }
            a((r = r.apply(t, e || [])).next())
          })
        },
        Bt = function (t, e) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: []
            }
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return s.label++, { value: i[1], done: !1 }
                      case 5:
                        s.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = s.ops.pop()), s.trys.pop()
                        continue
                      default:
                        if (
                          !((o = s.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          s = 0
                          continue
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1]
                          break
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          ;(s.label = o[1]), (o = i)
                          break
                        }
                        if (o && s.label < o[2]) {
                          ;(s.label = o[2]), s.ops.push(i)
                          break
                        }
                        o[2] && s.ops.pop(), s.trys.pop()
                        continue
                    }
                    i = e.call(t, s)
                  } catch (t) {
                    ;(i = [6, t]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, c])
            }
          }
        },
        Ft = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this
            return (r.members = new Mt()), r
          }
          return (
            zt(e, t),
            (e.prototype.authorize = function (e, n) {
              var r = this
              t.prototype.authorize.call(this, e, function (t, e) {
                return qt(r, void 0, void 0, function () {
                  var r, o
                  return Bt(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return t
                          ? [3, 3]
                          : null == (e = e).channel_data
                          ? [3, 1]
                          : ((r = JSON.parse(e.channel_data)),
                            this.members.setMyID(r.user_id),
                            [3, 3])
                      case 1:
                        return [4, this.pusher.user.signinDonePromise]
                      case 2:
                        if ((i.sent(), null == this.pusher.user.user_data))
                          return (
                            (o = p('authorizationEndpoint')),
                            Z.error(
                              "Invalid auth response for channel '" +
                                this.name +
                                "', expected 'channel_data' field. " +
                                o +
                                ', or the user should be signed in.'
                            ),
                            n('Invalid auth response'),
                            [2]
                          )
                        this.members.setMyID(this.pusher.user.user_data.id),
                          (i.label = 3)
                      case 3:
                        return n(t, e), [2]
                    }
                  })
                })
              })
            }),
            (e.prototype.handleEvent = function (t) {
              var e = t.event
              if (0 === e.indexOf('pusher_internal:'))
                this.handleInternalEvent(t)
              else {
                var n = t.data,
                  r = {}
                t.user_id && (r.user_id = t.user_id), this.emit(e, n, r)
              }
            }),
            (e.prototype.handleInternalEvent = function (t) {
              var e = t.event,
                n = t.data
              switch (e) {
                case 'pusher_internal:subscription_succeeded':
                  this.handleSubscriptionSucceededEvent(t)
                  break
                case 'pusher_internal:subscription_count':
                  this.handleSubscriptionCountEvent(t)
                  break
                case 'pusher_internal:member_added':
                  var r = this.members.addMember(n)
                  this.emit('pusher:member_added', r)
                  break
                case 'pusher_internal:member_removed':
                  var o = this.members.removeMember(n)
                  o && this.emit('pusher:member_removed', o)
              }
            }),
            (e.prototype.handleSubscriptionSucceededEvent = function (t) {
              ;(this.subscriptionPending = !1),
                (this.subscribed = !0),
                this.subscriptionCancelled
                  ? this.pusher.unsubscribe(this.name)
                  : (this.members.onSubscription(t.data),
                    this.emit('pusher:subscription_succeeded', this.members))
            }),
            (e.prototype.disconnect = function () {
              this.members.reset(), t.prototype.disconnect.call(this)
            }),
            e
          )
        })(Ut),
        Xt = n(1),
        Jt = n(0),
        Wt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Gt = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e, n) || this
            return (o.key = null), (o.nacl = r), o
          }
          return (
            Wt(e, t),
            (e.prototype.authorize = function (e, n) {
              var r = this
              t.prototype.authorize.call(this, e, function (t, e) {
                if (t) n(t, e)
                else {
                  var o = e.shared_secret
                  o
                    ? ((r.key = Object(Jt.decode)(o)),
                      delete e.shared_secret,
                      n(null, e))
                    : n(
                        new Error(
                          'No shared_secret key in auth payload for encrypted channel: ' +
                            r.name
                        ),
                        null
                      )
                }
              })
            }),
            (e.prototype.trigger = function (t, e) {
              throw new m(
                'Client events are not currently supported for encrypted channels'
              )
            }),
            (e.prototype.handleEvent = function (e) {
              var n = e.event,
                r = e.data
              0 !== n.indexOf('pusher_internal:') && 0 !== n.indexOf('pusher:')
                ? this.handleEncryptedEvent(n, r)
                : t.prototype.handleEvent.call(this, e)
            }),
            (e.prototype.handleEncryptedEvent = function (t, e) {
              var n = this
              if (this.key)
                if (e.ciphertext && e.nonce) {
                  var r = Object(Jt.decode)(e.ciphertext)
                  if (r.length < this.nacl.secretbox.overheadLength)
                    Z.error(
                      'Expected encrypted event ciphertext length to be ' +
                        this.nacl.secretbox.overheadLength +
                        ', got: ' +
                        r.length
                    )
                  else {
                    var o = Object(Jt.decode)(e.nonce)
                    if (o.length < this.nacl.secretbox.nonceLength)
                      Z.error(
                        'Expected encrypted event nonce length to be ' +
                          this.nacl.secretbox.nonceLength +
                          ', got: ' +
                          o.length
                      )
                    else {
                      var i = this.nacl.secretbox.open(r, o, this.key)
                      if (null === i)
                        return (
                          Z.debug(
                            'Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...'
                          ),
                          void this.authorize(
                            this.pusher.connection.socket_id,
                            function (e, s) {
                              e
                                ? Z.error(
                                    'Failed to make a request to the authEndpoint: ' +
                                      s +
                                      '. Unable to fetch new key, so dropping encrypted event'
                                  )
                                : null !==
                                  (i = n.nacl.secretbox.open(r, o, n.key))
                                ? n.emit(t, n.getDataToEmit(i))
                                : Z.error(
                                    'Failed to decrypt event with new key. Dropping encrypted event'
                                  )
                            }
                          )
                        )
                      this.emit(t, this.getDataToEmit(i))
                    }
                  }
                } else
                  Z.error(
                    'Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                      e
                  )
              else
                Z.debug(
                  'Received encrypted event before key has been retrieved from the authEndpoint'
                )
            }),
            (e.prototype.getDataToEmit = function (t) {
              var e = Object(Xt.decode)(t)
              try {
                return JSON.parse(e)
              } catch (t) {
                return e
              }
            }),
            e
          )
        })(Ut),
        Vt = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Yt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this
            ;(r.state = 'initialized'),
              (r.connection = null),
              (r.key = e),
              (r.options = n),
              (r.timeline = r.options.timeline),
              (r.usingTLS = r.options.useTLS),
              (r.errorCallbacks = r.buildErrorCallbacks()),
              (r.connectionCallbacks = r.buildConnectionCallbacks(
                r.errorCallbacks
              )),
              (r.handshakeCallbacks = r.buildHandshakeCallbacks(
                r.errorCallbacks
              ))
            var o = Ce.getNetwork()
            return (
              o.bind('online', function () {
                r.timeline.info({ netinfo: 'online' }),
                  ('connecting' !== r.state && 'unavailable' !== r.state) ||
                    r.retryIn(0)
              }),
              o.bind('offline', function () {
                r.timeline.info({ netinfo: 'offline' }),
                  r.connection && r.sendActivityCheck()
              }),
              r.updateStrategy(),
              r
            )
          }
          return (
            Vt(e, t),
            (e.prototype.connect = function () {
              this.connection ||
                this.runner ||
                (this.strategy.isSupported()
                  ? (this.updateState('connecting'),
                    this.startConnecting(),
                    this.setUnavailableTimer())
                  : this.updateState('failed'))
            }),
            (e.prototype.send = function (t) {
              return !!this.connection && this.connection.send(t)
            }),
            (e.prototype.send_event = function (t, e, n) {
              return !!this.connection && this.connection.send_event(t, e, n)
            }),
            (e.prototype.disconnect = function () {
              this.disconnectInternally(), this.updateState('disconnected')
            }),
            (e.prototype.isUsingTLS = function () {
              return this.usingTLS
            }),
            (e.prototype.startConnecting = function () {
              var t = this,
                e = function (n, r) {
                  n
                    ? (t.runner = t.strategy.connect(0, e))
                    : 'error' === r.action
                    ? (t.emit('error', {
                        type: 'HandshakeError',
                        error: r.error
                      }),
                      t.timeline.error({ handshakeError: r.error }))
                    : (t.abortConnecting(), t.handshakeCallbacks[r.action](r))
                }
              this.runner = this.strategy.connect(0, e)
            }),
            (e.prototype.abortConnecting = function () {
              this.runner && (this.runner.abort(), (this.runner = null))
            }),
            (e.prototype.disconnectInternally = function () {
              ;(this.abortConnecting(),
              this.clearRetryTimer(),
              this.clearUnavailableTimer(),
              this.connection) && this.abandonConnection().close()
            }),
            (e.prototype.updateStrategy = function () {
              this.strategy = this.options.getStrategy({
                key: this.key,
                timeline: this.timeline,
                useTLS: this.usingTLS
              })
            }),
            (e.prototype.retryIn = function (t) {
              var e = this
              this.timeline.info({ action: 'retry', delay: t }),
                t > 0 && this.emit('connecting_in', Math.round(t / 1e3)),
                (this.retryTimer = new H(t || 0, function () {
                  e.disconnectInternally(), e.connect()
                }))
            }),
            (e.prototype.clearRetryTimer = function () {
              this.retryTimer &&
                (this.retryTimer.ensureAborted(), (this.retryTimer = null))
            }),
            (e.prototype.setUnavailableTimer = function () {
              var t = this
              this.unavailableTimer = new H(
                this.options.unavailableTimeout,
                function () {
                  t.updateState('unavailable')
                }
              )
            }),
            (e.prototype.clearUnavailableTimer = function () {
              this.unavailableTimer && this.unavailableTimer.ensureAborted()
            }),
            (e.prototype.sendActivityCheck = function () {
              var t = this
              this.stopActivityCheck(),
                this.connection.ping(),
                (this.activityTimer = new H(
                  this.options.pongTimeout,
                  function () {
                    t.timeline.error({ pong_timed_out: t.options.pongTimeout }),
                      t.retryIn(0)
                  }
                ))
            }),
            (e.prototype.resetActivityCheck = function () {
              var t = this
              this.stopActivityCheck(),
                this.connection &&
                  !this.connection.handlesActivityChecks() &&
                  (this.activityTimer = new H(
                    this.activityTimeout,
                    function () {
                      t.sendActivityCheck()
                    }
                  ))
            }),
            (e.prototype.stopActivityCheck = function () {
              this.activityTimer && this.activityTimer.ensureAborted()
            }),
            (e.prototype.buildConnectionCallbacks = function (t) {
              var e = this
              return z({}, t, {
                message: function (t) {
                  e.resetActivityCheck(), e.emit('message', t)
                },
                ping: function () {
                  e.send_event('pusher:pong', {})
                },
                activity: function () {
                  e.resetActivityCheck()
                },
                error: function (t) {
                  e.emit('error', t)
                },
                closed: function () {
                  e.abandonConnection(), e.shouldRetry() && e.retryIn(1e3)
                }
              })
            }),
            (e.prototype.buildHandshakeCallbacks = function (t) {
              var e = this
              return z({}, t, {
                connected: function (t) {
                  ;(e.activityTimeout = Math.min(
                    e.options.activityTimeout,
                    t.activityTimeout,
                    t.connection.activityTimeout || 1 / 0
                  )),
                    e.clearUnavailableTimer(),
                    e.setConnection(t.connection),
                    (e.socket_id = e.connection.id),
                    e.updateState('connected', { socket_id: e.socket_id })
                }
              })
            }),
            (e.prototype.buildErrorCallbacks = function () {
              var t = this,
                e = function (e) {
                  return function (n) {
                    n.error &&
                      t.emit('error', {
                        type: 'WebSocketError',
                        error: n.error
                      }),
                      e(n)
                  }
                }
              return {
                tls_only: e(function () {
                  ;(t.usingTLS = !0), t.updateStrategy(), t.retryIn(0)
                }),
                refused: e(function () {
                  t.disconnect()
                }),
                backoff: e(function () {
                  t.retryIn(1e3)
                }),
                retry: e(function () {
                  t.retryIn(0)
                })
              }
            }),
            (e.prototype.setConnection = function (t) {
              for (var e in ((this.connection = t), this.connectionCallbacks))
                this.connection.bind(e, this.connectionCallbacks[e])
              this.resetActivityCheck()
            }),
            (e.prototype.abandonConnection = function () {
              if (this.connection) {
                for (var t in (this.stopActivityCheck(),
                this.connectionCallbacks))
                  this.connection.unbind(t, this.connectionCallbacks[t])
                var e = this.connection
                return (this.connection = null), e
              }
            }),
            (e.prototype.updateState = function (t, e) {
              var n = this.state
              if (((this.state = t), n !== t)) {
                var r = t
                'connected' === r &&
                  (r += ' with new socket ID ' + e.socket_id),
                  Z.debug('State changed', n + ' -> ' + r),
                  this.timeline.info({ state: t, params: e }),
                  this.emit('state_change', { previous: n, current: t }),
                  this.emit(t, e)
              }
            }),
            (e.prototype.shouldRetry = function () {
              return 'connecting' === this.state || 'connected' === this.state
            }),
            e
          )
        })(pt),
        $t = (function () {
          function t() {
            this.channels = {}
          }
          return (
            (t.prototype.add = function (t, e) {
              return (
                this.channels[t] ||
                  (this.channels[t] = (function (t, e) {
                    if (0 === t.indexOf('private-encrypted-')) {
                      if (e.config.nacl)
                        return Qt.createEncryptedChannel(t, e, e.config.nacl)
                      var n = p('encryptedChannelSupport')
                      throw new m(
                        'Tried to subscribe to a private-encrypted- channel but no nacl implementation available. ' +
                          n
                      )
                    }
                    if (0 === t.indexOf('private-'))
                      return Qt.createPrivateChannel(t, e)
                    if (0 === t.indexOf('presence-'))
                      return Qt.createPresenceChannel(t, e)
                    if (0 === t.indexOf('#'))
                      throw new y(
                        'Cannot create a channel with name "' + t + '".'
                      )
                    return Qt.createChannel(t, e)
                  })(t, e)),
                this.channels[t]
              )
            }),
            (t.prototype.all = function () {
              return (function (t) {
                var e = []
                return (
                  F(t, function (t) {
                    e.push(t)
                  }),
                  e
                )
              })(this.channels)
            }),
            (t.prototype.find = function (t) {
              return this.channels[t]
            }),
            (t.prototype.remove = function (t) {
              var e = this.channels[t]
              return delete this.channels[t], e
            }),
            (t.prototype.disconnect = function () {
              F(this.channels, function (t) {
                t.disconnect()
              })
            }),
            t
          )
        })()
      var Qt = {
          createChannels: function () {
            return new $t()
          },
          createConnectionManager: function (t, e) {
            return new Yt(t, e)
          },
          createChannel: function (t, e) {
            return new Nt(t, e)
          },
          createPrivateChannel: function (t, e) {
            return new Ut(t, e)
          },
          createPresenceChannel: function (t, e) {
            return new Ft(t, e)
          },
          createEncryptedChannel: function (t, e, n) {
            return new Gt(t, e, n)
          },
          createTimelineSender: function (t, e) {
            return new It(t, e)
          },
          createHandshake: function (t, e) {
            return new jt(t, e)
          },
          createAssistantToTheTransportManager: function (t, e, n) {
            return new Et(t, e, n)
          }
        },
        Kt = (function () {
          function t(t) {
            ;(this.options = t || {}),
              (this.livesLeft = this.options.lives || 1 / 0)
          }
          return (
            (t.prototype.getAssistant = function (t) {
              return Qt.createAssistantToTheTransportManager(this, t, {
                minPingDelay: this.options.minPingDelay,
                maxPingDelay: this.options.maxPingDelay
              })
            }),
            (t.prototype.isAlive = function () {
              return this.livesLeft > 0
            }),
            (t.prototype.reportDeath = function () {
              this.livesLeft -= 1
            }),
            t
          )
        })(),
        Zt = (function () {
          function t(t, e) {
            ;(this.strategies = t),
              (this.loop = Boolean(e.loop)),
              (this.failFast = Boolean(e.failFast)),
              (this.timeout = e.timeout),
              (this.timeoutLimit = e.timeoutLimit)
          }
          return (
            (t.prototype.isSupported = function () {
              return Y(this.strategies, M.method('isSupported'))
            }),
            (t.prototype.connect = function (t, e) {
              var n = this,
                r = this.strategies,
                o = 0,
                i = this.timeout,
                s = null,
                c = function (a, u) {
                  u
                    ? e(null, u)
                    : ((o += 1),
                      n.loop && (o %= r.length),
                      o < r.length
                        ? (i &&
                            ((i *= 2),
                            n.timeoutLimit &&
                              (i = Math.min(i, n.timeoutLimit))),
                          (s = n.tryStrategy(
                            r[o],
                            t,
                            { timeout: i, failFast: n.failFast },
                            c
                          )))
                        : e(!0))
                }
              return (
                (s = this.tryStrategy(
                  r[o],
                  t,
                  { timeout: i, failFast: this.failFast },
                  c
                )),
                {
                  abort: function () {
                    s.abort()
                  },
                  forceMinPriority: function (e) {
                    ;(t = e), s && s.forceMinPriority(e)
                  }
                }
              )
            }),
            (t.prototype.tryStrategy = function (t, e, n, r) {
              var o = null,
                i = null
              return (
                n.timeout > 0 &&
                  (o = new H(n.timeout, function () {
                    i.abort(), r(!0)
                  })),
                (i = t.connect(e, function (t, e) {
                  ;(t && o && o.isRunning() && !n.failFast) ||
                    (o && o.ensureAborted(), r(t, e))
                })),
                {
                  abort: function () {
                    o && o.ensureAborted(), i.abort()
                  },
                  forceMinPriority: function (t) {
                    i.forceMinPriority(t)
                  }
                }
              )
            }),
            t
          )
        })(),
        te = (function () {
          function t(t) {
            this.strategies = t
          }
          return (
            (t.prototype.isSupported = function () {
              return Y(this.strategies, M.method('isSupported'))
            }),
            (t.prototype.connect = function (t, e) {
              return (function (t, e, n) {
                var r = W(t, function (t, r, o, i) {
                  return t.connect(e, n(r, i))
                })
                return {
                  abort: function () {
                    J(r, ee)
                  },
                  forceMinPriority: function (t) {
                    J(r, function (e) {
                      e.forceMinPriority(t)
                    })
                  }
                }
              })(this.strategies, t, function (t, n) {
                return function (r, o) {
                  ;(n[t].error = r),
                    r
                      ? (function (t) {
                          return (function (t, e) {
                            for (var n = 0; n < t.length; n++)
                              if (!e(t[n], n, t)) return !1
                            return !0
                          })(t, function (t) {
                            return Boolean(t.error)
                          })
                        })(n) && e(!0)
                      : (J(n, function (t) {
                          t.forceMinPriority(o.transport.priority)
                        }),
                        e(null, o))
                }
              })
            }),
            t
          )
        })()
      function ee(t) {
        t.error || t.aborted || (t.abort(), (t.aborted = !0))
      }
      var ne = (function () {
        function t(t, e, n) {
          ;(this.strategy = t),
            (this.transports = e),
            (this.ttl = n.ttl || 18e5),
            (this.usingTLS = n.useTLS),
            (this.timeline = n.timeline)
        }
        return (
          (t.prototype.isSupported = function () {
            return this.strategy.isSupported()
          }),
          (t.prototype.connect = function (t, e) {
            var n = this.usingTLS,
              r = (function (t) {
                var e = Ce.getLocalStorage()
                if (e)
                  try {
                    var n = e[re(t)]
                    if (n) return JSON.parse(n)
                  } catch (e) {
                    oe(t)
                  }
                return null
              })(n),
              o = [this.strategy]
            if (r && r.timestamp + this.ttl >= M.now()) {
              var i = this.transports[r.transport]
              i &&
                (this.timeline.info({
                  cached: !0,
                  transport: r.transport,
                  latency: r.latency
                }),
                o.push(
                  new Zt([i], { timeout: 2 * r.latency + 1e3, failFast: !0 })
                ))
            }
            var s = M.now(),
              c = o.pop().connect(t, function r(i, a) {
                i
                  ? (oe(n),
                    o.length > 0
                      ? ((s = M.now()), (c = o.pop().connect(t, r)))
                      : e(i))
                  : (!(function (t, e, n) {
                      var r = Ce.getLocalStorage()
                      if (r)
                        try {
                          r[re(t)] = K({
                            timestamp: M.now(),
                            transport: e,
                            latency: n
                          })
                        } catch (t) {}
                    })(n, a.transport.name, M.now() - s),
                    e(null, a))
              })
            return {
              abort: function () {
                c.abort()
              },
              forceMinPriority: function (e) {
                ;(t = e), c && c.forceMinPriority(e)
              }
            }
          }),
          t
        )
      })()
      function re(t) {
        return 'pusherTransport' + (t ? 'TLS' : 'NonTLS')
      }
      function oe(t) {
        var e = Ce.getLocalStorage()
        if (e)
          try {
            delete e[re(t)]
          } catch (t) {}
      }
      var ie = (function () {
          function t(t, e) {
            var n = e.delay
            ;(this.strategy = t), (this.options = { delay: n })
          }
          return (
            (t.prototype.isSupported = function () {
              return this.strategy.isSupported()
            }),
            (t.prototype.connect = function (t, e) {
              var n,
                r = this.strategy,
                o = new H(this.options.delay, function () {
                  n = r.connect(t, e)
                })
              return {
                abort: function () {
                  o.ensureAborted(), n && n.abort()
                },
                forceMinPriority: function (e) {
                  ;(t = e), n && n.forceMinPriority(e)
                }
              }
            }),
            t
          )
        })(),
        se = (function () {
          function t(t, e, n) {
            ;(this.test = t), (this.trueBranch = e), (this.falseBranch = n)
          }
          return (
            (t.prototype.isSupported = function () {
              return (
                this.test() ? this.trueBranch : this.falseBranch
              ).isSupported()
            }),
            (t.prototype.connect = function (t, e) {
              return (this.test() ? this.trueBranch : this.falseBranch).connect(
                t,
                e
              )
            }),
            t
          )
        })(),
        ce = (function () {
          function t(t) {
            this.strategy = t
          }
          return (
            (t.prototype.isSupported = function () {
              return this.strategy.isSupported()
            }),
            (t.prototype.connect = function (t, e) {
              var n = this.strategy.connect(t, function (t, r) {
                r && n.abort(), e(t, r)
              })
              return n
            }),
            t
          )
        })()
      function ae(t) {
        return function () {
          return t.isSupported()
        }
      }
      var ue,
        he = function (t, e, n) {
          var r = {}
          function o(e, o, i, s, c) {
            var a = n(t, e, o, i, s, c)
            return (r[e] = a), a
          }
          var i,
            s = Object.assign({}, e, {
              hostNonTLS: t.wsHost + ':' + t.wsPort,
              hostTLS: t.wsHost + ':' + t.wssPort,
              httpPath: t.wsPath
            }),
            c = Object.assign({}, s, { useTLS: !0 }),
            a = Object.assign({}, e, {
              hostNonTLS: t.httpHost + ':' + t.httpPort,
              hostTLS: t.httpHost + ':' + t.httpsPort,
              httpPath: t.httpPath
            }),
            u = { loop: !0, timeout: 15e3, timeoutLimit: 6e4 },
            h = new Kt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: t.activityTimeout
            }),
            p = new Kt({
              lives: 2,
              minPingDelay: 1e4,
              maxPingDelay: t.activityTimeout
            }),
            l = o('ws', 'ws', 3, s, h),
            f = o('wss', 'ws', 3, c, h),
            d = o('sockjs', 'sockjs', 1, a),
            y = o('xhr_streaming', 'xhr_streaming', 1, a, p),
            v = o('xdr_streaming', 'xdr_streaming', 1, a, p),
            g = o('xhr_polling', 'xhr_polling', 1, a),
            b = o('xdr_polling', 'xdr_polling', 1, a),
            m = new Zt([l], u),
            _ = new Zt([f], u),
            w = new Zt([d], u),
            S = new Zt([new se(ae(y), y, v)], u),
            k = new Zt([new se(ae(g), g, b)], u),
            C = new Zt(
              [new se(ae(S), new te([S, new ie(k, { delay: 4e3 })]), k)],
              u
            ),
            P = new se(ae(C), C, w)
          return (
            (i = e.useTLS
              ? new te([m, new ie(P, { delay: 2e3 })])
              : new te([
                  m,
                  new ie(_, { delay: 2e3 }),
                  new ie(P, { delay: 5e3 })
                ])),
            new ne(new ce(new se(ae(l), i, P)), r, {
              ttl: 18e5,
              timeline: e.timeline,
              useTLS: e.useTLS
            })
          )
        },
        pe = {
          getRequest: function (t) {
            var e = new window.XDomainRequest()
            return (
              (e.ontimeout = function () {
                t.emit('error', new v()), t.close()
              }),
              (e.onerror = function (e) {
                t.emit('error', e), t.close()
              }),
              (e.onprogress = function () {
                e.responseText &&
                  e.responseText.length > 0 &&
                  t.onChunk(200, e.responseText)
              }),
              (e.onload = function () {
                e.responseText &&
                  e.responseText.length > 0 &&
                  t.onChunk(200, e.responseText),
                  t.emit('finished', 200),
                  t.close()
              }),
              e
            )
          },
          abortRequest: function (t) {
            ;(t.ontimeout = t.onerror = t.onprogress = t.onload = null),
              t.abort()
          }
        },
        le = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        fe = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this
            return (o.hooks = e), (o.method = n), (o.url = r), o
          }
          return (
            le(e, t),
            (e.prototype.start = function (t) {
              var e = this
              ;(this.position = 0),
                (this.xhr = this.hooks.getRequest(this)),
                (this.unloader = function () {
                  e.close()
                }),
                Ce.addUnloadListener(this.unloader),
                this.xhr.open(this.method, this.url, !0),
                this.xhr.setRequestHeader &&
                  this.xhr.setRequestHeader('Content-Type', 'application/json'),
                this.xhr.send(t)
            }),
            (e.prototype.close = function () {
              this.unloader &&
                (Ce.removeUnloadListener(this.unloader),
                (this.unloader = null)),
                this.xhr &&
                  (this.hooks.abortRequest(this.xhr), (this.xhr = null))
            }),
            (e.prototype.onChunk = function (t, e) {
              for (;;) {
                var n = this.advanceBuffer(e)
                if (!n) break
                this.emit('chunk', { status: t, data: n })
              }
              this.isBufferTooLong(e) && this.emit('buffer_too_long')
            }),
            (e.prototype.advanceBuffer = function (t) {
              var e = t.slice(this.position),
                n = e.indexOf('\n')
              return -1 !== n ? ((this.position += n + 1), e.slice(0, n)) : null
            }),
            (e.prototype.isBufferTooLong = function (t) {
              return this.position === t.length && t.length > 262144
            }),
            e
          )
        })(pt)
      !(function (t) {
        ;(t[(t.CONNECTING = 0)] = 'CONNECTING'),
          (t[(t.OPEN = 1)] = 'OPEN'),
          (t[(t.CLOSED = 3)] = 'CLOSED')
      })(ue || (ue = {}))
      var de = ue,
        ye = 1
      function ve(t) {
        var e = -1 === t.indexOf('?') ? '?' : '&'
        return t + e + 't=' + +new Date() + '&n=' + ye++
      }
      function ge(t) {
        return Ce.randomInt(t)
      }
      var be,
        me = (function () {
          function t(t, e) {
            ;(this.hooks = t),
              (this.session =
                ge(1e3) +
                '/' +
                (function (t) {
                  for (var e = [], n = 0; n < t; n++)
                    e.push(ge(32).toString(32))
                  return e.join('')
                })(8)),
              (this.location = (function (t) {
                var e = /([^\?]*)\/*(\??.*)/.exec(t)
                return { base: e[1], queryString: e[2] }
              })(e)),
              (this.readyState = de.CONNECTING),
              this.openStream()
          }
          return (
            (t.prototype.send = function (t) {
              return this.sendRaw(JSON.stringify([t]))
            }),
            (t.prototype.ping = function () {
              this.hooks.sendHeartbeat(this)
            }),
            (t.prototype.close = function (t, e) {
              this.onClose(t, e, !0)
            }),
            (t.prototype.sendRaw = function (t) {
              if (this.readyState !== de.OPEN) return !1
              try {
                return (
                  Ce.createSocketRequest(
                    'POST',
                    ve(
                      ((e = this.location),
                      (n = this.session),
                      e.base + '/' + n + '/xhr_send')
                    )
                  ).start(t),
                  !0
                )
              } catch (t) {
                return !1
              }
              var e, n
            }),
            (t.prototype.reconnect = function () {
              this.closeStream(), this.openStream()
            }),
            (t.prototype.onClose = function (t, e, n) {
              this.closeStream(),
                (this.readyState = de.CLOSED),
                this.onclose &&
                  this.onclose({ code: t, reason: e, wasClean: n })
            }),
            (t.prototype.onChunk = function (t) {
              var e
              if (200 === t.status)
                switch (
                  (this.readyState === de.OPEN && this.onActivity(),
                  t.data.slice(0, 1))
                ) {
                  case 'o':
                    ;(e = JSON.parse(t.data.slice(1) || '{}')), this.onOpen(e)
                    break
                  case 'a':
                    e = JSON.parse(t.data.slice(1) || '[]')
                    for (var n = 0; n < e.length; n++) this.onEvent(e[n])
                    break
                  case 'm':
                    ;(e = JSON.parse(t.data.slice(1) || 'null')),
                      this.onEvent(e)
                    break
                  case 'h':
                    this.hooks.onHeartbeat(this)
                    break
                  case 'c':
                    ;(e = JSON.parse(t.data.slice(1) || '[]')),
                      this.onClose(e[0], e[1], !0)
                }
            }),
            (t.prototype.onOpen = function (t) {
              var e, n, r
              this.readyState === de.CONNECTING
                ? (t &&
                    t.hostname &&
                    (this.location.base =
                      ((e = this.location.base),
                      (n = t.hostname),
                      (r = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(e))[1] +
                        n +
                        r[3])),
                  (this.readyState = de.OPEN),
                  this.onopen && this.onopen())
                : this.onClose(1006, 'Server lost session', !0)
            }),
            (t.prototype.onEvent = function (t) {
              this.readyState === de.OPEN &&
                this.onmessage &&
                this.onmessage({ data: t })
            }),
            (t.prototype.onActivity = function () {
              this.onactivity && this.onactivity()
            }),
            (t.prototype.onError = function (t) {
              this.onerror && this.onerror(t)
            }),
            (t.prototype.openStream = function () {
              var t = this
              ;(this.stream = Ce.createSocketRequest(
                'POST',
                ve(this.hooks.getReceiveURL(this.location, this.session))
              )),
                this.stream.bind('chunk', function (e) {
                  t.onChunk(e)
                }),
                this.stream.bind('finished', function (e) {
                  t.hooks.onFinished(t, e)
                }),
                this.stream.bind('buffer_too_long', function () {
                  t.reconnect()
                })
              try {
                this.stream.start()
              } catch (e) {
                M.defer(function () {
                  t.onError(e), t.onClose(1006, 'Could not start streaming', !1)
                })
              }
            }),
            (t.prototype.closeStream = function () {
              this.stream &&
                (this.stream.unbind_all(),
                this.stream.close(),
                (this.stream = null))
            }),
            t
          )
        })(),
        _e = {
          getReceiveURL: function (t, e) {
            return t.base + '/' + e + '/xhr_streaming' + t.queryString
          },
          onHeartbeat: function (t) {
            t.sendRaw('[]')
          },
          sendHeartbeat: function (t) {
            t.sendRaw('[]')
          },
          onFinished: function (t, e) {
            t.onClose(1006, 'Connection interrupted (' + e + ')', !1)
          }
        },
        we = {
          getReceiveURL: function (t, e) {
            return t.base + '/' + e + '/xhr' + t.queryString
          },
          onHeartbeat: function () {},
          sendHeartbeat: function (t) {
            t.sendRaw('[]')
          },
          onFinished: function (t, e) {
            200 === e
              ? t.reconnect()
              : t.onClose(1006, 'Connection interrupted (' + e + ')', !1)
          }
        },
        Se = {
          getRequest: function (t) {
            var e = new (Ce.getXHRAPI())()
            return (
              (e.onreadystatechange = e.onprogress =
                function () {
                  switch (e.readyState) {
                    case 3:
                      e.responseText &&
                        e.responseText.length > 0 &&
                        t.onChunk(e.status, e.responseText)
                      break
                    case 4:
                      e.responseText &&
                        e.responseText.length > 0 &&
                        t.onChunk(e.status, e.responseText),
                        t.emit('finished', e.status),
                        t.close()
                  }
                }),
              e
            )
          },
          abortRequest: function (t) {
            ;(t.onreadystatechange = null), t.abort()
          }
        },
        ke = {
          createStreamingSocket: function (t) {
            return this.createSocket(_e, t)
          },
          createPollingSocket: function (t) {
            return this.createSocket(we, t)
          },
          createSocket: function (t, e) {
            return new me(t, e)
          },
          createXHR: function (t, e) {
            return this.createRequest(Se, t, e)
          },
          createRequest: function (t, e, n) {
            return new fe(t, e, n)
          },
          createXDR: function (t, e) {
            return this.createRequest(pe, t, e)
          }
        },
        Ce = {
          nextAuthCallbackID: 1,
          auth_callbacks: {},
          ScriptReceivers: i,
          DependenciesReceivers: a,
          getDefaultStrategy: he,
          Transports: Pt,
          transportConnectionInitializer: function () {
            var t = this
            t.timeline.info(
              t.buildTimelineMessage({
                transport: t.name + (t.options.useTLS ? 's' : '')
              })
            ),
              t.hooks.isInitialized()
                ? t.changeState('initialized')
                : t.hooks.file
                ? (t.changeState('initializing'),
                  u.load(
                    t.hooks.file,
                    { useTLS: t.options.useTLS },
                    function (e, n) {
                      t.hooks.isInitialized()
                        ? (t.changeState('initialized'), n(!0))
                        : (e && t.onError(e), t.onClose(), n(!1))
                    }
                  ))
                : t.onClose()
          },
          HTTPFactory: ke,
          TimelineTransport: rt,
          getXHRAPI: function () {
            return window.XMLHttpRequest
          },
          getWebSocketAPI: function () {
            return window.WebSocket || window.MozWebSocket
          },
          setup: function (t) {
            var e = this
            window.Pusher = t
            var n = function () {
              e.onDocumentBody(t.ready)
            }
            window.JSON ? n() : u.load('json2', {}, n)
          },
          getDocument: function () {
            return document
          },
          getProtocol: function () {
            return this.getDocument().location.protocol
          },
          getAuthorizers: function () {
            return { ajax: k, jsonp: tt }
          },
          onDocumentBody: function (t) {
            var e = this
            document.body
              ? t()
              : setTimeout(function () {
                  e.onDocumentBody(t)
                }, 0)
          },
          createJSONPRequest: function (t, e) {
            return new nt(t, e)
          },
          createScriptRequest: function (t) {
            return new et(t)
          },
          getLocalStorage: function () {
            try {
              return window.localStorage
            } catch (t) {
              return
            }
          },
          createXHR: function () {
            return this.getXHRAPI()
              ? this.createXMLHttpRequest()
              : this.createMicrosoftXHR()
          },
          createXMLHttpRequest: function () {
            return new (this.getXHRAPI())()
          },
          createMicrosoftXHR: function () {
            return new ActiveXObject('Microsoft.XMLHTTP')
          },
          getNetwork: function () {
            return Ot
          },
          createWebSocket: function (t) {
            return new (this.getWebSocketAPI())(t)
          },
          createSocketRequest: function (t, e) {
            if (this.isXHRSupported()) return this.HTTPFactory.createXHR(t, e)
            if (this.isXDRSupported(0 === e.indexOf('https:')))
              return this.HTTPFactory.createXDR(t, e)
            throw 'Cross-origin HTTP requests are not supported'
          },
          isXHRSupported: function () {
            var t = this.getXHRAPI()
            return Boolean(t) && void 0 !== new t().withCredentials
          },
          isXDRSupported: function (t) {
            var e = t ? 'https:' : 'http:',
              n = this.getProtocol()
            return Boolean(window.XDomainRequest) && n === e
          },
          addUnloadListener: function (t) {
            void 0 !== window.addEventListener
              ? window.addEventListener('unload', t, !1)
              : void 0 !== window.attachEvent &&
                window.attachEvent('onunload', t)
          },
          removeUnloadListener: function (t) {
            void 0 !== window.addEventListener
              ? window.removeEventListener('unload', t, !1)
              : void 0 !== window.detachEvent &&
                window.detachEvent('onunload', t)
          },
          randomInt: function (t) {
            return Math.floor(
              ((window.crypto || window.msCrypto).getRandomValues(
                new Uint32Array(1)
              )[0] /
                Math.pow(2, 32)) *
                t
            )
          }
        }
      !(function (t) {
        ;(t[(t.ERROR = 3)] = 'ERROR'),
          (t[(t.INFO = 6)] = 'INFO'),
          (t[(t.DEBUG = 7)] = 'DEBUG')
      })(be || (be = {}))
      var Pe = be,
        Te = (function () {
          function t(t, e, n) {
            ;(this.key = t),
              (this.session = e),
              (this.events = []),
              (this.options = n || {}),
              (this.sent = 0),
              (this.uniqueID = 0)
          }
          return (
            (t.prototype.log = function (t, e) {
              t <= this.options.level &&
                (this.events.push(z({}, e, { timestamp: M.now() })),
                this.options.limit &&
                  this.events.length > this.options.limit &&
                  this.events.shift())
            }),
            (t.prototype.error = function (t) {
              this.log(Pe.ERROR, t)
            }),
            (t.prototype.info = function (t) {
              this.log(Pe.INFO, t)
            }),
            (t.prototype.debug = function (t) {
              this.log(Pe.DEBUG, t)
            }),
            (t.prototype.isEmpty = function () {
              return 0 === this.events.length
            }),
            (t.prototype.send = function (t, e) {
              var n = this,
                r = z(
                  {
                    session: this.session,
                    bundle: this.sent + 1,
                    key: this.key,
                    lib: 'js',
                    version: this.options.version,
                    cluster: this.options.cluster,
                    features: this.options.features,
                    timeline: this.events
                  },
                  this.options.params
                )
              return (
                (this.events = []),
                t(r, function (t, r) {
                  t || n.sent++, e && e(t, r)
                }),
                !0
              )
            }),
            (t.prototype.generateUniqueID = function () {
              return this.uniqueID++, this.uniqueID
            }),
            t
          )
        })(),
        Oe = (function () {
          function t(t, e, n, r) {
            ;(this.name = t),
              (this.priority = e),
              (this.transport = n),
              (this.options = r || {})
          }
          return (
            (t.prototype.isSupported = function () {
              return this.transport.isSupported({ useTLS: this.options.useTLS })
            }),
            (t.prototype.connect = function (t, e) {
              var n = this
              if (!this.isSupported()) return Ee(new w(), e)
              if (this.priority < t) return Ee(new g(), e)
              var r = !1,
                o = this.transport.createConnection(
                  this.name,
                  this.priority,
                  this.options.key,
                  this.options
                ),
                i = null,
                s = function () {
                  o.unbind('initialized', s), o.connect()
                },
                c = function () {
                  i = Qt.createHandshake(o, function (t) {
                    ;(r = !0), h(), e(null, t)
                  })
                },
                a = function (t) {
                  h(), e(t)
                },
                u = function () {
                  var t
                  h(), (t = K(o)), e(new b(t))
                },
                h = function () {
                  o.unbind('initialized', s),
                    o.unbind('open', c),
                    o.unbind('error', a),
                    o.unbind('closed', u)
                }
              return (
                o.bind('initialized', s),
                o.bind('open', c),
                o.bind('error', a),
                o.bind('closed', u),
                o.initialize(),
                {
                  abort: function () {
                    r || (h(), i ? i.close() : o.close())
                  },
                  forceMinPriority: function (t) {
                    r || (n.priority < t && (i ? i.close() : o.close()))
                  }
                }
              )
            }),
            t
          )
        })()
      function Ee(t, e) {
        return (
          M.defer(function () {
            e(t)
          }),
          { abort: function () {}, forceMinPriority: function () {} }
        )
      }
      var Ae = Ce.Transports,
        xe = function (t, e, n, r, o, i) {
          var s,
            c = Ae[n]
          if (!c) throw new _(n)
          return (
            !(
              (t.enabledTransports && -1 === B(t.enabledTransports, e)) ||
              (t.disabledTransports && -1 !== B(t.disabledTransports, e))
            )
              ? ((o = Object.assign(
                  { ignoreNullOrigin: t.ignoreNullOrigin },
                  o
                )),
                (s = new Oe(e, r, i ? i.getAssistant(c) : c, o)))
              : (s = Le),
            s
          )
        },
        Le = {
          isSupported: function () {
            return !1
          },
          connect: function (t, e) {
            var n = M.defer(function () {
              e(new w())
            })
            return {
              abort: function () {
                n.ensureAborted()
              },
              forceMinPriority: function () {}
            }
          }
        }
      var Re = function (t) {
          if (void 0 === Ce.getAuthorizers()[t.transport])
            throw "'" + t.transport + "' is not a recognized auth transport"
          return function (e, n) {
            var o = (function (t, e) {
              var n = 'socket_id=' + encodeURIComponent(t.socketId)
              for (var r in e.params)
                n +=
                  '&' +
                  encodeURIComponent(r) +
                  '=' +
                  encodeURIComponent(e.params[r])
              if (null != e.paramsProvider) {
                var o = e.paramsProvider()
                for (var r in o)
                  n +=
                    '&' + encodeURIComponent(r) + '=' + encodeURIComponent(o[r])
              }
              return n
            })(e, t)
            Ce.getAuthorizers()[t.transport](Ce, o, t, r.UserAuthentication, n)
          }
        },
        je = function (t) {
          if (void 0 === Ce.getAuthorizers()[t.transport])
            throw "'" + t.transport + "' is not a recognized auth transport"
          return function (e, n) {
            var o = (function (t, e) {
              var n = 'socket_id=' + encodeURIComponent(t.socketId)
              for (var r in ((n +=
                '&channel_name=' + encodeURIComponent(t.channelName)),
              e.params))
                n +=
                  '&' +
                  encodeURIComponent(r) +
                  '=' +
                  encodeURIComponent(e.params[r])
              if (null != e.paramsProvider) {
                var o = e.paramsProvider()
                for (var r in o)
                  n +=
                    '&' + encodeURIComponent(r) + '=' + encodeURIComponent(o[r])
              }
              return n
            })(e, t)
            Ce.getAuthorizers()[t.transport](
              Ce,
              o,
              t,
              r.ChannelAuthorization,
              n
            )
          }
        },
        Ie = function () {
          return (Ie =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }).apply(this, arguments)
        }
      function De(t) {
        return t.httpHost
          ? t.httpHost
          : t.cluster
          ? 'sockjs-' + t.cluster + '.pusher.com'
          : s.httpHost
      }
      function Ne(t) {
        return t.wsHost ? t.wsHost : 'ws-' + t.cluster + '.pusher.com'
      }
      function He(t) {
        return 'https:' === Ce.getProtocol() || !1 !== t.forceTLS
      }
      function Ue(t) {
        return 'enableStats' in t
          ? t.enableStats
          : 'disableStats' in t && !t.disableStats
      }
      function Me(t) {
        var e = Ie(Ie({}, s.userAuthentication), t.userAuthentication)
        return 'customHandler' in e && null != e.customHandler
          ? e.customHandler
          : Re(e)
      }
      function ze(t, e) {
        var n = (function (t, e) {
          var n
          return (
            'channelAuthorization' in t
              ? (n = Ie(Ie({}, s.channelAuthorization), t.channelAuthorization))
              : ((n = {
                  transport: t.authTransport || s.authTransport,
                  endpoint: t.authEndpoint || s.authEndpoint
                }),
                'auth' in t &&
                  ('params' in t.auth && (n.params = t.auth.params),
                  'headers' in t.auth && (n.headers = t.auth.headers)),
                'authorizer' in t &&
                  (n.customHandler = (function (t, e, n) {
                    var r = {
                      authTransport: e.transport,
                      authEndpoint: e.endpoint,
                      auth: { params: e.params, headers: e.headers }
                    }
                    return function (e, o) {
                      var i = t.channel(e.channelName)
                      n(i, r).authorize(e.socketId, o)
                    }
                  })(e, n, t.authorizer))),
            n
          )
        })(t, e)
        return 'customHandler' in n && null != n.customHandler
          ? n.customHandler
          : je(n)
      }
      var qe = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Be = (function (t) {
          function e(e) {
            var n =
              t.call(this, function (t, e) {
                Z.debug('No callbacks on watchlist events for ' + t)
              }) || this
            return (n.pusher = e), n.bindWatchlistInternalEvent(), n
          }
          return (
            qe(e, t),
            (e.prototype.handleEvent = function (t) {
              var e = this
              t.data.events.forEach(function (t) {
                e.emit(t.name, t)
              })
            }),
            (e.prototype.bindWatchlistInternalEvent = function () {
              var t = this
              this.pusher.connection.bind('message', function (e) {
                'pusher_internal:watchlist_events' === e.event &&
                  t.handleEvent(e)
              })
            }),
            e
          )
        })(pt)
      var Fe = function () {
          var t, e
          return {
            promise: new Promise(function (n, r) {
              ;(t = n), (e = r)
            }),
            resolve: t,
            reject: e
          }
        },
        Xe = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(e, n)
          }
          return function (e, n) {
            function r() {
              this.constructor = e
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Je = (function (t) {
          function e(e) {
            var n =
              t.call(this, function (t, e) {
                Z.debug('No callbacks on user for ' + t)
              }) || this
            return (
              (n.signin_requested = !1),
              (n.user_data = null),
              (n.serverToUserChannel = null),
              (n.signinDonePromise = null),
              (n._signinDoneResolve = null),
              (n._onAuthorize = function (t, e) {
                if (t)
                  return Z.warn('Error during signin: ' + t), void n._cleanup()
                n.pusher.send_event('pusher:signin', {
                  auth: e.auth,
                  user_data: e.user_data
                })
              }),
              (n.pusher = e),
              n.pusher.connection.bind('state_change', function (t) {
                var e = t.previous,
                  r = t.current
                'connected' !== e && 'connected' === r && n._signin(),
                  'connected' === e &&
                    'connected' !== r &&
                    (n._cleanup(), n._newSigninPromiseIfNeeded())
              }),
              (n.watchlist = new Be(e)),
              n.pusher.connection.bind('message', function (t) {
                'pusher:signin_success' === t.event &&
                  n._onSigninSuccess(t.data),
                  n.serverToUserChannel &&
                    n.serverToUserChannel.name === t.channel &&
                    n.serverToUserChannel.handleEvent(t)
              }),
              n
            )
          }
          return (
            Xe(e, t),
            (e.prototype.signin = function () {
              this.signin_requested ||
                ((this.signin_requested = !0), this._signin())
            }),
            (e.prototype._signin = function () {
              this.signin_requested &&
                (this._newSigninPromiseIfNeeded(),
                'connected' === this.pusher.connection.state &&
                  this.pusher.config.userAuthenticator(
                    { socketId: this.pusher.connection.socket_id },
                    this._onAuthorize
                  ))
            }),
            (e.prototype._onSigninSuccess = function (t) {
              try {
                this.user_data = JSON.parse(t.user_data)
              } catch (e) {
                return (
                  Z.error(
                    'Failed parsing user data after signin: ' + t.user_data
                  ),
                  void this._cleanup()
                )
              }
              if (
                'string' != typeof this.user_data.id ||
                '' === this.user_data.id
              )
                return (
                  Z.error(
                    "user_data doesn't contain an id. user_data: " +
                      this.user_data
                  ),
                  void this._cleanup()
                )
              this._signinDoneResolve(), this._subscribeChannels()
            }),
            (e.prototype._subscribeChannels = function () {
              var t,
                e = this
              ;(this.serverToUserChannel = new Nt(
                '#server-to-user-' + this.user_data.id,
                this.pusher
              )),
                this.serverToUserChannel.bind_global(function (t, n) {
                  0 !== t.indexOf('pusher_internal:') &&
                    0 !== t.indexOf('pusher:') &&
                    e.emit(t, n)
                }),
                (t = this.serverToUserChannel).subscriptionPending &&
                t.subscriptionCancelled
                  ? t.reinstateSubscription()
                  : t.subscriptionPending ||
                    'connected' !== e.pusher.connection.state ||
                    t.subscribe()
            }),
            (e.prototype._cleanup = function () {
              ;(this.user_data = null),
                this.serverToUserChannel &&
                  (this.serverToUserChannel.unbind_all(),
                  this.serverToUserChannel.disconnect(),
                  (this.serverToUserChannel = null)),
                this.signin_requested && this._signinDoneResolve()
            }),
            (e.prototype._newSigninPromiseIfNeeded = function () {
              if (
                this.signin_requested &&
                (!this.signinDonePromise || this.signinDonePromise.done)
              ) {
                var t = Fe(),
                  e = t.promise,
                  n = t.resolve
                t.reject
                e.done = !1
                var r = function () {
                  e.done = !0
                }
                e.then(r).catch(r),
                  (this.signinDonePromise = e),
                  (this._signinDoneResolve = n)
              }
            }),
            e
          )
        })(pt),
        We = (function () {
          function t(e, n) {
            var r,
              o,
              i,
              c = this
            !(function (t) {
              if (null == t)
                throw 'You must pass your app key when you instantiate Pusher.'
            })(e),
              (function (t) {
                if (null == t) throw 'You must pass an options object'
                if (null == t.cluster)
                  throw 'Options object must provide a cluster'
                'disableStats' in t &&
                  Z.warn(
                    'The disableStats option is deprecated in favor of enableStats'
                  )
              })(n),
              (this.key = e),
              (this.config =
                ((o = this),
                (i = {
                  activityTimeout: (r = n).activityTimeout || s.activityTimeout,
                  cluster: r.cluster,
                  httpPath: r.httpPath || s.httpPath,
                  httpPort: r.httpPort || s.httpPort,
                  httpsPort: r.httpsPort || s.httpsPort,
                  pongTimeout: r.pongTimeout || s.pongTimeout,
                  statsHost: r.statsHost || s.stats_host,
                  unavailableTimeout:
                    r.unavailableTimeout || s.unavailableTimeout,
                  wsPath: r.wsPath || s.wsPath,
                  wsPort: r.wsPort || s.wsPort,
                  wssPort: r.wssPort || s.wssPort,
                  enableStats: Ue(r),
                  httpHost: De(r),
                  useTLS: He(r),
                  wsHost: Ne(r),
                  userAuthenticator: Me(r),
                  channelAuthorizer: ze(r, o)
                }),
                'disabledTransports' in r &&
                  (i.disabledTransports = r.disabledTransports),
                'enabledTransports' in r &&
                  (i.enabledTransports = r.enabledTransports),
                'ignoreNullOrigin' in r &&
                  (i.ignoreNullOrigin = r.ignoreNullOrigin),
                'timelineParams' in r && (i.timelineParams = r.timelineParams),
                'nacl' in r && (i.nacl = r.nacl),
                i)),
              (this.channels = Qt.createChannels()),
              (this.global_emitter = new pt()),
              (this.sessionID = Ce.randomInt(1e9)),
              (this.timeline = new Te(this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: t.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: Pe.INFO,
                version: s.VERSION
              })),
              this.config.enableStats &&
                (this.timelineSender = Qt.createTimelineSender(this.timeline, {
                  host: this.config.statsHost,
                  path: '/timeline/v2/' + Ce.TimelineTransport.name
                }))
            ;(this.connection = Qt.createConnectionManager(this.key, {
              getStrategy: function (t) {
                return Ce.getDefaultStrategy(c.config, t, xe)
              },
              timeline: this.timeline,
              activityTimeout: this.config.activityTimeout,
              pongTimeout: this.config.pongTimeout,
              unavailableTimeout: this.config.unavailableTimeout,
              useTLS: Boolean(this.config.useTLS)
            })),
              this.connection.bind('connected', function () {
                c.subscribeAll(),
                  c.timelineSender &&
                    c.timelineSender.send(c.connection.isUsingTLS())
              }),
              this.connection.bind('message', function (t) {
                var e = 0 === t.event.indexOf('pusher_internal:')
                if (t.channel) {
                  var n = c.channel(t.channel)
                  n && n.handleEvent(t)
                }
                e || c.global_emitter.emit(t.event, t.data)
              }),
              this.connection.bind('connecting', function () {
                c.channels.disconnect()
              }),
              this.connection.bind('disconnected', function () {
                c.channels.disconnect()
              }),
              this.connection.bind('error', function (t) {
                Z.warn(t)
              }),
              t.instances.push(this),
              this.timeline.info({ instances: t.instances.length }),
              (this.user = new Je(this)),
              t.isReady && this.connect()
          }
          return (
            (t.ready = function () {
              t.isReady = !0
              for (var e = 0, n = t.instances.length; e < n; e++)
                t.instances[e].connect()
            }),
            (t.getClientFeatures = function () {
              return X(
                V({ ws: Ce.Transports.ws }, function (t) {
                  return t.isSupported({})
                })
              )
            }),
            (t.prototype.channel = function (t) {
              return this.channels.find(t)
            }),
            (t.prototype.allChannels = function () {
              return this.channels.all()
            }),
            (t.prototype.connect = function () {
              if (
                (this.connection.connect(),
                this.timelineSender && !this.timelineSenderTimer)
              ) {
                var t = this.connection.isUsingTLS(),
                  e = this.timelineSender
                this.timelineSenderTimer = new U(6e4, function () {
                  e.send(t)
                })
              }
            }),
            (t.prototype.disconnect = function () {
              this.connection.disconnect(),
                this.timelineSenderTimer &&
                  (this.timelineSenderTimer.ensureAborted(),
                  (this.timelineSenderTimer = null))
            }),
            (t.prototype.bind = function (t, e, n) {
              return this.global_emitter.bind(t, e, n), this
            }),
            (t.prototype.unbind = function (t, e, n) {
              return this.global_emitter.unbind(t, e, n), this
            }),
            (t.prototype.bind_global = function (t) {
              return this.global_emitter.bind_global(t), this
            }),
            (t.prototype.unbind_global = function (t) {
              return this.global_emitter.unbind_global(t), this
            }),
            (t.prototype.unbind_all = function (t) {
              return this.global_emitter.unbind_all(), this
            }),
            (t.prototype.subscribeAll = function () {
              var t
              for (t in this.channels.channels)
                this.channels.channels.hasOwnProperty(t) && this.subscribe(t)
            }),
            (t.prototype.subscribe = function (t) {
              var e = this.channels.add(t, this)
              return (
                e.subscriptionPending && e.subscriptionCancelled
                  ? e.reinstateSubscription()
                  : e.subscriptionPending ||
                    'connected' !== this.connection.state ||
                    e.subscribe(),
                e
              )
            }),
            (t.prototype.unsubscribe = function (t) {
              var e = this.channels.find(t)
              e && e.subscriptionPending
                ? e.cancelSubscription()
                : (e = this.channels.remove(t)) &&
                  e.subscribed &&
                  e.unsubscribe()
            }),
            (t.prototype.send_event = function (t, e, n) {
              return this.connection.send_event(t, e, n)
            }),
            (t.prototype.shouldUseTLS = function () {
              return this.config.useTLS
            }),
            (t.prototype.signin = function () {
              this.user.signin()
            }),
            (t.instances = []),
            (t.isReady = !1),
            (t.logToConsole = !1),
            (t.Runtime = Ce),
            (t.ScriptReceivers = Ce.ScriptReceivers),
            (t.DependenciesReceivers = Ce.DependenciesReceivers),
            (t.auth_callbacks = Ce.auth_callbacks),
            t
          )
        })(),
        Ge = (e.default = We)
      Ce.setup(We)
    }
  ])
})
//# sourceMappingURL=pusher.min.js.map
'use strict'
function _typeof(i) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n
          }
        : function (n) {
            return n &&
              typeof Symbol == 'function' &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n
          }),
    _typeof(i)
  )
}
function ownKeys(i, n) {
  var l = Object.keys(i)
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(i)
    n &&
      (p = p.filter(function (N) {
        return Object.getOwnPropertyDescriptor(i, N).enumerable
      })),
      l.push.apply(l, p)
  }
  return l
}
function _objectSpread(i) {
  for (var n = 1; n < arguments.length; n++) {
    var l = arguments[n] != null ? arguments[n] : {}
    n % 2
      ? ownKeys(Object(l), !0).forEach(function (p) {
          _defineProperty(i, p, l[p])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
      : ownKeys(Object(l)).forEach(function (p) {
          Object.defineProperty(i, p, Object.getOwnPropertyDescriptor(l, p))
        })
  }
  return i
}
function _defineProperty(i, n, l) {
  return (
    (n = _toPropertyKey(n)),
    n in i
      ? Object.defineProperty(i, n, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (i[n] = l),
    i
  )
}
function _toPropertyKey(i) {
  var n = _toPrimitive(i, 'string')
  return _typeof(n) == 'symbol' ? n : String(n)
}
function _toPrimitive(i, n) {
  if (_typeof(i) != 'object' || !i) return i
  var l = i[Symbol.toPrimitive]
  if (l !== void 0) {
    var p = l.call(i, n || 'default')
    if (_typeof(p) != 'object') return p
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (n === 'string' ? String : Number)(i)
}
;(function (i, n) {
  var l = 'https://store-api.woundcareeshop.com',
    p = {
      wsHost: 'soketi.woundcareeshop.com',
      forceTLS: !0,
      enabledTransports: ['ws', 'wss'],
      disableStats: !0,
      cluster: 'cluster-1',
      channelAuthorization: {
        endpoint: l + '/pusher/channel-auth',
        transport: 'ajax'
      }
    },
    N = 'yNQ7wrVcxx',
    ce = new Pusher(N, p),
    s = [],
    v,
    M,
    we = !1
  function Ae() {
    var e = n.createElement('div')
    if (
      ((e.innerHTML =
        '<button class="tw-flex tw-items-center tw-justify-center tw-bottom-10 tw-fixed tw-font-medium tw-px-4 tw-py-2 tw-right-10 tw-rounded-md tw-space-x-2 tw-text-sm tw-text-white"onclick=tdcToggleChat() style=background-color:#6667ab aria-haspopup=dialog id=tdc-chat-button type=button><div class="tw-flex tw-items-center tw-space-x-2"><div class="tw-rounded-full tw-h-2 tw-w-2 tw-mb-0.5"id=outer-agent-status></div><span id=helpdesk></span><div class="tw-items-center tw-justify-center tw-hidden tw-bg-red-500 tw-h-5 tw-rounded-full tw-text-center tw-text-white tw-text-xs tw-w-5"id=tdc-unread-count></div></div></button><div class="tw-bg-white tw-bottom-10 tw-duration-500 tw-ease-in-out tw-fixed tw-h-0 tw-opacity-0 tw-overflow-hidden tw-right-10 tw-rounded-xl tw-shadow-md tw-transition-all"id=tdc-chat-container><div class="tw-border tw-rounded-xl tw-shadow-md"style=height:620px><div class=tw-h-full><div class="tw-flex tw-items-center tw-flex-row tw--2 tw-border-b tw-gap-1 tw-justify-between tw-p-4 tw-rounded-t-xl"style=background-color:#6667ab><div class="tw-flex tw-items-center tw-justify-center tw-flex-row tw-gap-2"><div class="tw-rounded-full tw-h-2 tw-w-2 tw--mb-0.5 tw-bg-green-500"id=agent-status></div><h2 class="tw-text-lg tw-font-semibold tw-text-white">Help Desk</h2><span id=active-agent style=position:absolute;color:beige;font-style:italic;font-size:12px;width:auto;left:9%;top:7%></span></div><button class="tw-text-xs tw-text-center hover:tw-text-white tw-float-right tw-h-6 tw-text-gray-200 tw-transition-all tw-w-6"onclick=tdcToggleChat() style="background:0 0;color:#fff;font-size:medium">x</button></div><div class="tw-flex tw-h-full tw-flex-col tw-gap-4"id=tdc-chat-area-wrapper><div class="tw-flex tw-h-full tw-flex-col tw-gap-2 tw-overflow-y-auto tw-p-2"id=tdc-chat-area style=max-height:495px></div><d class="tw-items-center tw-justify-center tw-hidden tw-flex-col tw-p-4 tw-relative tw-top-6"id=tdc-intro-message><div><img alt=logo class="tw-h-20 tw-w-20"src=data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASEAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAEDBAUGBwgC/8QAMxAAAgEEAQMDAgQEBwEAAAAAAAECAwQFEQYSITEHE0FRYRQiMnEIIzNCFSRigZGhscH/xAAbAQEAAQUBAAAAAAAAAAAAAAAABgECBAUHA//EACYRAAICAQMDBQEBAQAAAAAAAAABAgMEBRESEyExBiJBUWEjFDL/2gAMAwEAAhEDEQA/APVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYA8AAeAAB5AH2GgB9gAAAAAAAAAAAAAAAAADC3WZpUbz2HJdWy+EeRRvYy1CfXBS+pU+SxlQQ2AROSjHqfwUIXUZvSZZKaT2L4wcluXCe1slF5YAAAAAAAAAAAAAAGQAUruuqFKUpPWkcLyvI1U51Cgp9nPWtmdhV8nJ/h5Wy22O52K/ytJ/WKZX+TCfk9QyCgLTLVPZsKk/ojWeP3/4qvNJ70zXZNnG+Efs2WLVyonP6NwpfoRJsEa5+SQVKAAAAAAAAAAAAEfJGvzAGn+peYjiMQ6spa2meVMRm5ZL1KoVIybi6n/032mVfylP8MS+XuSPauOe7C3f+hf+Fdmifky0AigNY5plIUMbWp71LRqHpvde9dVNv5I5lXcs+uK+CTYmO46dZJnVYfpJTJEiNMkFSgAAAAAAAAAADAIZ81J9FKU38LYB5y/iK5R1Y50KM+67aTOGelNRVeX21Sq+/WS3Cr4YjMG17y3PfGJqRqY+36X/AGIun5InLyZqBE5xpxbl2Ra3t3Lkt+xxv1EyfVc1KcZdiz9Obh0rh9/LIQ7eWfy+mdAhRx0zb7R2y0l120ZfVFSJNovdIgEls2j6BcWgAAAAAAAAABkAEeexg+XZWljcRcylNKXQ9F9ceUkijeyPD/qDyCeXy1xTcm4qTMRwKt+F5JbvxqROI18aeP4a7luz3TwK+/F46l33qJtTf5iE3LabRsI90T87MBy/IqxsupS7tGDl2dOmUjMw6+rdGBwvP3TvbqVTflmS4fV9qvFb13IBTZvfy/Tpd1fHE4fh3bEy6rCm/sXSOiV94I5db2m0fSB6HmAAAAAAAAAwCCGwCndXFO1oyq1XqK8nmX1951/m5W9nV1B9tJmz0unqXJnjdLaOx51cpVbmVWfdyeytiav4bKwq+EmS9rtsYCfc9jehOXjkbPpjLeonXJLbIPmx43NGxqe8UUbyvG3t5zk/COOc4zrvJSownvT0RbXcjp1cPsk/p3G6l3N/BpcFuD6vJc42u7e5h313IXCW0kyd2R5RaO98Vuo1sZSW++jNPsdMxpcqov8ADlOVDjdJfoJPcxwAAAAAAxsAhgAjvvwU69ajbwcq01FJb7lUt/AOK+r3qLTsbCtQtKyclvwzyjnMrWzd1KtXb3v5JXpWP04cmYN092Wa7R0fNRdMXJeTbmKvJ2D0L5o8LcKnUqdKk9d2euMXmLe7xtO592P5o78kT1mrpz6j8Gxxvd7EaHzflLpSlRoy3F9uxzKpN1q8qkn57nKNYyuvc18I6domIsehS+WPk+ZdqkWvg1KN0jpPAs7/ADadCpLUV2OpwnCrHcJJr7E+0a/q0bPyjnOu47pyN/hn1tg3BpBsnYAAAZG9AEdWydADp+40l3bANb5Dy2zwqk60ovp+5w71J9Yre4hOjZz6fjsza4OFKySk/B4W2pdjzxmcpd5O9nVq1ZShJ702WS1HwiWQikkka+T3I6tfAW5vpSPTjst2U2MzhsPd1K9Odu5R00+x37j2bubbD07adSXUlryc99Xa1X0+hHyTDQNInZYrZeCjdVqlzPqnLf7lP4OTSk33Z0eMVFcUSPjuUKlSxuKlpXVSMmtM6hxLmNKNFUq73J/U3WkZv+ezaXg0et4P+qvlHyjf7K8p3dNSg13LnROoTU48kc+si65OLGiN6LywlPYKAFKtc0qK/mSSLktwY+vyHG0P6lxGJjbrnWCoRbd5BtfGz2jjWS8Isc0jU836oYylGXsXMd/ucu5X6w3VOMlZ19/sza4unOTXNHhO76ORZ/1Ay2WnJVaknF/c1iVOrdz6pbbZIaq68eJjveb7FxTxt1JahTbLujgr6o1ukzHyNWxaV3kZFenX2eImXsuMV5a9ym/+DacVxGh+V1Yd/wBiD6z6o4xapZKdL0Hk11UbTZ4e2tYr24ovVSjHwc0ycyzKnzmTnGx448eMD68EmKZAIZUBpNaZNOrKhNSpt7RWL2e42UlszYsPyu8tpKLk0kbxiuYQml71Rf8AJI9O1SS9s32IxqekRe8oI2a05NYVIrqrRTL6nlrOp+mqmSerOqmuzInbgXVvui6hcUpr8skwZKmn3MRwa7MqvwatyWNSUJqGz3q/6POXg4zyy0vpuftuf+xyHkmOy8HKUXW/7JPhzh8mDamaLef4nCTVT3v99lrD32/5rl/ubhcduxZ2SLiml86MxjHBSW9GDqCbqex64bSs7m4Yutbx6epRNsx9e0lFfoORa3Tfu2tzpOlW1bJMytP2Nfl6Co+n+3REZc9/cSKO3wfPcFC8eQigJAA0H2Kgpzcn+lE0qdzKWoqZfFP4Lm4pe4zWPx95Np7mjbcTZ3MHHqcjb4NFie7NDqF9TTSN1xkKkaa6tgltSfFEMtac2bIUatvSq/rimbFPY1xZ1cJYVv6lFMsq/EcNXTVS0iz1jfOPhlrgmaZyn0wxlzGTtbaKb+xxnlno/kPzytKLSX0RuMLUOP8A2zGtp38HIs7xm/wteUbmEl0/YxVO4lvUHpokUHC6O/wYz3i90V431zDxNor0sxe02tVWeF2m41q9yPevOur/AOZGexfKK9Nr3qjNxxfLLaelUmtnPde9MN7ypRMdI15LZWs2S1yVC6S9t7LtPaOa3Uypm4S8onFVisgpx8Ak8j0IJ8eQD5T630x8mWxvHry9acItpmTRRK58YnjfkRx48pm3YvhdZdLq0/8Ao2/GcVtaaXu0lv8AYlWBpSjt1EQ7UNYc9+mzOU8NZU1+WiitGwto+KaRvo41cfCI9LKtl5ZWjQpxXaKB6qCR4ubZUZGi4tI6SUtADZ8zjGpFxlFNP6gHOOfem9lmrWvW6Y+5rekjyZz7iVbjl1PpptR39CSaTluX82Yd9e3c1GMtx7+STfowmFHfln1ZqvO6jCgm5b+CsmpxcZF8Xs90d79LOM3d5bud1Smu3baM5lbGdlcSh0tRTOJ+rcCNGS5w8M6Z6Z1B31dOfwWMX1H0yIEqI8LZ9UaVWvUUacXLZWMXJ7IOSit2dB4tw6Nx0VK0db+p0fF4ahYRSgkycaTp8aoKx+SA6zqcrputeDKdkiNm+I6GRoAlIAEgADQBA19ACO0k4yW0zlHrRw6nmrF1KFJKUY99IysO3p2pnnZHlE8b52zljsvUt5Jrpei3ZOIveKZrJnxLc5RjBNtncvRz0zrZGrQyFaG6e02mjDz7+jU2elUeT2PVONxNpYWkKVGjCOo6bSNK55gU7apXhE5xq9XXpcn5RJ9Gv6GRFL5OTdDpSlGX1Pryc6fk6Y3v3FGLr1lSiu7Om8G4z0pVK8N/Pc22kYruuT+EafW8r/PQ4ryzpVvQp0IKMIpaKvcn0YqK2RzmUnJ7sE/BcWjQAAAAAAABAAS77LfI0I3FnWjJb3F/+FU9mGeIPV/EK25Bc1Yx0upnOqcuqMl8k7xZcqkzVzXc330l4pUz2WUa1Nygn9D2jwzD08LiYW9OKjpGh1m7eXTMrHj8mcTbfcx3IqHv46cNbI3euVckbDHfG2L/AE4Tye1/C3jilruYqb1GOjm2RDhY4nVcaXOqMjcOF4KVzc060objs7PaW0LakowXwS/QsfhU5v5IR6iyupcoL4K+tvZJICNkIkAAAAAAAAAAAh9j5qd6M1/pYQPK3rpjVCdxW18s8/4ilK4ydOlFb6paJrp8t6NzXzXdnsX0S4rHGUaVzKmtySfdHZn2aSItm2dS5szKlxiGUb2PVQaMGfdM9oPaSOJeodLovW9fJrmLtneVowS33OdZdfLJlH9On4NnHDjP6R3PhmPja42G49zY/sT3Dh06Ix/DnOdZ1L5S/QSjKMQAAAAAAAAAAAAiR8v+lL9mAecv4hKDp4yvPX1OOekHG6mVylOv0dUYzXwSvEs4YjkYdi3ex7hwVnTs8XbwhHTjBbMj5ItN7ybMteAJJSWmWlTj3qdSUb1xS7lt6cYp1b7dSO0QiVXPUuP6T6F3T0rf8Oz0KUaNNQitI+0TWK2WxApPk9yQXFAAAAAAAAAAAACGR/YwDiPrzY/isLViltsx38OXHIU8fOpOK2nvubtWccJr9Mbb+h3+MVGCivCJXY0hkhkgHJvUim6uYhFfLNn4Rj/w8IT6dbRGcarlqE5fTJVlW8dNhH7RuL8oEmIqSAAAAAAAAAAAAACGh/awDnnP8VLI206aWy99LsT/AIVjZwcdNmdKz+HE8kvfubt8j5ME9SWRJ6WwDQ+TY6V3loTS7Jm44u3VC0prXdI1eJTxvsn9m2zLt8euH0XZKNoakAAAAAAAAAAAAAAAAtq1nTrfrR929vC3jqmtIu5PbYpsVgWlQyGtrQBbTs4TmpNdy5S1FJfBZGCi20Xym5JJj4JReWAAAAAAAAAAAAAAAeQAEAQSAB9wBseACPkkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z></div><div class="tw-mt-4 tw-text-center tw-text-gray-700"><p>Hey there! \uD83D\uDC4B It\'s great to see you here. Is there something we can assist you with today? \uD83D\uDE0A</div><div class=tw-text-xs id=offline-message style=margin-top:50px;color:#696969>Currently, all agents are offline we will get back to you soon</div></div><div class="tw-flex-col tw-p-4 tw-m-4 tw-rounded-lg tw-shadow-lg tw-w-0"id=tdc-user-info style="border-top:3px solid #6667ab;transform:translateY(20px);opacity:0;transition:transform .3s ease-out,opacity .3s ease-out"><input class="tw-w-full tw-hidden tw-rounded-md focus:tw-outline-none tw-border tw-max-h-24 tw-p-2 tw-mb-2"id=tdc-name-input placeholder="Enter your name"autocomplete=name autocapitalize=""onkeydown=\'"Enter"==event.key&&window.tdcSendMessage()\'> <input class="tw-w-full tw-hidden tw-rounded-md focus:tw-outline-none tw-border tw-max-h-24 tw-p-2 tw-mb-2"id=tdc-email-input placeholder="Enter your email (Optional)"autocomplete=email type=email><span id=emailError class="tw-text-xs tw-text-red-500"></span><input class="tw-w-full tw-hidden tw-rounded-md focus:tw-outline-none tw-border tw-max-h-24 tw-p-2"id=tdc-phone-input placeholder="Enter your phone (Optional)"autocomplete=tel type=tel><span id=phoneError class="tw-text-xs tw-text-red-500"></span></div><div class="tw-w-full tw-absolute tw-bg-white tw-bottom-0 tw-grid tw-pr-3 tw-py-2 tw-rounded-b-md"id=can-send-message style="border-top:solid #dcdcdc .5px"><div class="tw-w-full tw-hidden tw-rounded-md tw-text-gray-800"id=tdc-reply-message style="height:50px;border-left:2px solid red;background-color:#faebd7;padding:6px;margin-left:5px"><div class="tw-flex tw-flex-col"><div class="tw-flex tw-justify-between"><span id=tdc-message-user class=tw-text-sm></span><span id=tdc-reply-cancel class="tw-cursor-pointer tw-text-base tw-text-blue-900"onclick=window.replycancel()>x</span></div><span id=tdc-message class=tw-text-sm></span></div></div><div class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full tw-mb-1 tw-roFunded-md tw-space-x-4"><div class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full"><input class="sm:tw-w-72 tw-max-h-24 tw-p-2 tw-rounded-md tw-w-72"id=tdc-resizable-textarea placeholder="Type your message..."onkeyup=window.tdcHandleLiveMessage(this.value) style=border:none;outline:0></div><div class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full"><svg class="tw-cursor-pointer tw-ml-2 tw-h-4 tw-w-4"fill=#000000 viewBox="0 0 122.56 122.88"xmlns=http://www.w3.org/2000/svg onclick=tdcSendMessage()><defs><style>.cls-1{fill-rule:evenodd}</style></defs><title>send</title><path d=M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z class=tw-cls-1></path></svg></div><input class="tw-col-span-1 tw-hidden"id=tdc-chat-input-file type=file accept=.csv,.png,.jpg,.jpeg,.png,.pdf onchange=window.tdcSendAttachment(this.files[0]) style=width:10%><label class="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full"for=tdc-chat-input-file><svg class="tw-cursor-pointer tw-ml-2 tw-h-5 tw-w-5"fill=#414040 viewBox="0 0 50 50"xmlns=http://www.w3.org/2000/svg><path d="M 38.1875 6.71875 C 36.261719 6.8125 34.34375 7.648438 32.84375 9.09375 C 32.8125 9.125 32.78125 9.15625 32.75 9.1875 C 32.746094 9.191406 32.722656 9.183594 32.71875 9.1875 C 32.675781 9.238281 32.632813 9.289063 32.59375 9.34375 C 32.550781 9.394531 32.507813 9.445313 32.46875 9.5 L 13.65625 28.40625 C 13.613281 28.457031 13.570313 28.507813 13.53125 28.5625 C 11.761719 30.480469 11.796875 33.515625 13.65625 35.375 C 15.5625 37.285156 18.75 37.285156 20.65625 35.375 C 20.75 35.28125 20.832031 35.175781 20.90625 35.0625 C 20.996094 34.996094 21.078125 34.921875 21.15625 34.84375 L 35.25 20.9375 C 35.878906 20.34375 36.054688 19.410156 35.683594 18.628906 C 35.3125 17.847656 34.484375 17.390625 33.625 17.5 C 33.171875 17.558594 32.753906 17.765625 32.4375 18.09375 L 18.34375 32 C 18.285156 32.070313 18.234375 32.140625 18.1875 32.21875 C 18.167969 32.230469 18.144531 32.238281 18.125 32.25 C 18.113281 32.269531 18.105469 32.292969 18.09375 32.3125 C 17.992188 32.375 17.898438 32.449219 17.8125 32.53125 C 17.433594 32.910156 16.878906 32.914063 16.5 32.53125 C 16.121094 32.152344 16.117188 31.601563 16.5 31.21875 L 35.59375 12.03125 C 35.636719 11.980469 35.679688 11.929688 35.71875 11.875 C 37.363281 10.359375 39.558594 10.371094 40.78125 11.59375 C 40.867188 11.675781 40.960938 11.75 41.0625 11.8125 C 41.074219 11.824219 41.082031 11.832031 41.09375 11.84375 C 41.152344 11.921875 41.214844 11.996094 41.28125 12.0625 C 42.425781 13.207031 42.234375 15.621094 40.625 17.3125 C 40.59375 17.34375 40.5625 17.375 40.53125 17.40625 L 19.84375 38.625 C 19.777344 38.671875 19.714844 38.726563 19.65625 38.78125 C 16.972656 41.464844 12.351563 41.789063 9.78125 39.21875 C 7.261719 36.699219 7.523438 32.140625 10.09375 29.4375 C 10.136719 29.398438 10.179688 29.355469 10.21875 29.3125 L 27.25 12.46875 C 27.878906 11.875 28.054688 10.941406 27.683594 10.160156 C 27.3125 9.378906 26.484375 8.921875 25.625 9.03125 C 25.171875 9.089844 24.753906 9.296875 24.4375 9.625 L 7.5 26.375 C 7.46875 26.40625 7.4375 26.4375 7.40625 26.46875 C 7.363281 26.519531 7.320313 26.570313 7.28125 26.625 C 3.234375 30.820313 2.683594 37.78125 6.9375 42.03125 C 11.160156 46.253906 18.082031 45.804688 22.28125 41.8125 C 22.324219 41.78125 22.367188 41.75 22.40625 41.71875 C 22.417969 41.707031 22.425781 41.699219 22.4375 41.6875 C 22.457031 41.667969 22.480469 41.644531 22.5 41.625 C 22.5 41.613281 22.5 41.605469 22.5 41.59375 L 22.625 41.46875 C 22.667969 41.417969 22.710938 41.367188 22.75 41.3125 L 43.40625 20.21875 C 43.554688 20.082031 43.679688 19.925781 43.78125 19.75 C 46.417969 16.734375 46.992188 12.148438 44.09375 9.25 C 44.042969 9.207031 43.992188 9.164063 43.9375 9.125 C 43.847656 8.988281 43.742188 8.863281 43.625 8.75 C 42.148438 7.273438 40.160156 6.621094 38.1875 6.71875 Z"></path></svg></label></div></div></div></div><div class="tw-items-center tw-w-full tw-absolute tw-bottom-4 tw-font-semibold tw-hidden tw-text-center tw-text-red-500"id=blockedUser>You have been blocked!</div></div>'),
      n.body.appendChild(e),
      !we)
    ) {
      var t = n.getElementById('tdc-chat-container')
      ;(t.style.height = '36px'),
        (t.style.width = '120px'),
        (t.style.zIndex = '-1'),
        (we = !0)
    }
  }
  Ae()
  var u = localStorage.getItem('chat-user-id'),
    U = n.getElementById('tdc-user-info'),
    ue = n.getElementById('tdc-chat-area-wrapper'),
    m = n.getElementById('tdc-chat-area'),
    O = n.getElementById('can-send-message'),
    E = n.getElementById('blockedUser'),
    f = n.getElementById('tdc-resizable-textarea'),
    I = n.getElementById('tdc-name-input'),
    T = n.getElementById('tdc-email-input'),
    B = n.getElementById('tdc-phone-input'),
    R = n.getElementById('outer-agent-status'),
    V = n.getElementById('agent-status'),
    K = n.getElementById('tdc-intro-message'),
    Y = n.getElementById('tdc-message'),
    A,
    P = n.getElementById('tdc-reply-message'),
    ye = n.getElementById('tdc-message-user'),
    L = n.getElementById('active-agent'),
    pe = n.getElementById('helpdesk'),
    J = n.getElementById('offline-message'),
    j = !1
  function xe(e) {
    e ||
      (K.classList.remove('tw-hidden'),
      K.classList.add('tw-flex'),
      ue.classList.remove('tw-h-full')),
      L && J.classList.remove('tw-hidden')
  }
  xe(u, L)
  var z = null
  ;(i.openModal = function (e, t, r) {
    f.focus(),
      P.classList.remove('tw-hidden'),
      t === 'null' && (t = 'Attachment'),
      r === 'null' && (r = 'You'),
      (t = t.replaceAll("\\'", "'")),
      (t = decodeURIComponent(t)),
      (r = r.replaceAll("\\'", "'")),
      (r = decodeURIComponent(r)),
      (ye.innerHTML = r),
      (A = e)
    var a = t.trim()
    a.length > 40
      ? (Y.innerHTML = ''.concat(
          (a == null ? void 0 : a.length) > 40
            ? a == null
              ? void 0
              : a.slice(0, 40)
            : a,
          '...'
        ))
      : (Y.innerHTML = Y.innerHTML = a)
  }),
    (i.replycancel = function () {
      P.classList.add('tw-hidden'), (A = void 0)
    })
  function q(e) {
    var t = /(https?:\/\/[^\s]+)/g,
      r = e.replace(t, function (a) {
        return '<a style=" text-decoration: underline" href="'
          .concat(a, '" target="_blank">')
          .concat(a, '</a>')
      })
    return r
  }
  function G(e, t, r) {
    var a = new Date(e.createdAt),
      c = new Date(),
      g = new Date(c)
    g.setDate(c.getDate() - 1)
    var h = ''
    a.toDateString() === c.toDateString()
      ? (h = 'Today')
      : a.toDateString() === g.toDateString()
      ? (h = 'Yesterday')
      : (h = a.toLocaleDateString())
    var fe = encodeURIComponent(
        e.message ? e.message : e.attachment.filename
      ).replaceAll("'", "\\'"),
      ve = encodeURIComponent(e.name).replaceAll("'", "\\'")
    if ((t || (t = 'self'), !j && !L.innerHTML.length)) {
      var Z
      L.innerHTML =
        (e == null || (Z = e.chatAgent) === null || Z === void 0
          ? void 0
          : Z.nickname) || ''
    }
    if (t === 'self') {
      var X, y, F, x, Q, $, b, _, C, ee
      if (h !== z) {
        var te = n.createElement('div')
        ;(te.className = 'tw-date-container'),
          (te.innerHTML =
            '<span class="tw-date-label font-semibold tw-text-gray-800  tw-flex tw-justify-center tw-rounded-md tw-px-2 tw-py-1 tw-text-xs">'.concat(
              h,
              '</span>'
            )),
          m.appendChild(te),
          (z = h)
      }
      var be = new Date(e.createdAt),
        Ce = be.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: !0
        }),
        ne = '<div data-messageid="'
          .concat(
            e.id,
            '"\n  class="tw-flex tw-w-full tw-self-end"\n  style="display: flex; justify-content: space-between ;"\n  \n>\n\n  <div\n    class=" tw-rounded-lg tw-break-all tw-shadow-md tw-bg-[#6667ab] tw-ml-auto "\n    style="\n      display: flex;\n      flex-direction: column;\n      min-width: 50%;\n      max-width: 80%;\n      background-color: #6667ab;\n      padding: 0.5rem;\n    " \n  >\n   \n    <div class="tw-flex tw-justify-between">\n  <p class="tw-break-all tw-text-sm tw-font-semibold tw-text-white" style="align-self: flex-start; margin-top:7px;overflow-wrap: break-word;">\n    You\n  </p>\n   <p class="tw-text-white" id=reply-id style="cursor: pointer; transform:scaley(-1); font-size : 1.25rem; margin-bottom : 10px;" onclick="window.openModal(\''
          )
          .concat(e.id, "','")
          .concat(fe, "', '")
          .concat(ve, '\' )">\u21B5</p>\n</div>\n  ')
          .concat(
            e.attachment
              ? ''.concat(
                  e.repliedMessageId
                    ? '<div  class=\'tw-flex tw-flex-col \'>\n        \n            <div class="tw-bg-white  tw-p-2 tw-mb-1 tw-rounded-md tw-shadow-md tw-break-all" style="border-left : solid 4px orange "  onclick="window.scroll(\''
                        .concat(e.repliedMessageId, "','")
                        .concat(
                          e.message,
                          '\')">\n            <span class="tw-text-black tw-text-sm" >\n            '
                        )
                        .concat(
                          (X = s.find(function (o) {
                            return o.id === e.repliedMessageId
                          })) !== null &&
                            X !== void 0 &&
                            X.message
                            ? ((y = s.find(function (o) {
                                return o.id === e.repliedMessageId
                              })) === null ||
                              y === void 0 ||
                              (y = y.message) === null ||
                              y === void 0
                                ? void 0
                                : y.length) > 40
                              ? ''.concat(
                                  (F = s.find(function (o) {
                                    return o.id === e.repliedMessageId
                                  })) === null || F === void 0
                                    ? void 0
                                    : F.message.slice(0, 40),
                                  '...'
                                )
                              : s.find(function (o) {
                                  return o.id === e.repliedMessageId
                                }).message
                            : ((x = s.find(function (o) {
                                return o.id === e.repliedMessageId
                              })) === null ||
                              x === void 0 ||
                              (x = x.attachment.filename) === null ||
                              x === void 0
                                ? void 0
                                : x.length) > 40
                            ? ''.concat(
                                (Q = s.find(function (o) {
                                  return o.id === e.repliedMessageId
                                })) === null || Q === void 0
                                  ? void 0
                                  : Q.attachment.filename.substring(
                                      49,
                                      e.attachment.filename.length
                                    )
                              )
                            : s.find(function (o) {
                                return o.id === e.repliedMessageId
                              }).attachment.filename,
                          '\n            </span>\n          </div>\n           <a href="'
                        )
                        .concat(
                          e.attachment.url,
                          '" class="tw-flex tw-items-center tw-text-white tw-text-sm tw-break-all" style="overflow-wrap :  break-word;">\n           <div>\n              '
                        )
                        .concat(
                          e.attachment.filename.substring(
                            49,
                            e.attachment.filename.length
                          ),
                          '\n              </div><div>\n              <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n                <g id="SVGRepo_iconCarrier">\n                  <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                </g>\n              </svg>\n              </div>\n              </a>\n            </div>'
                        )
                    : '<a href="'
                        .concat(
                          e.attachment.url,
                          '" class="tw-flex tw-flex-col tw-text-white tw-text-sm tw-break-all"> '
                        )
                        .concat(
                          e.attachment.url.match(/\.(jpeg|jpg|gif|png)$/) !==
                            null
                            ? ' <div> \n                  <img src="'
                                .concat(
                                  e.attachment.url,
                                  '" alt="Image Preview" class=" tw-shadow-lg  tw-rounded-md tw-p-1 tw-mb-2" > \n                    <div class="tw-flex tw-items-center">\n                    <div>\n                    <span class="tw-underline-offset-4 tw-underline"> '
                                )
                                .concat(
                                  e.attachment.filename.substring(
                                    49,
                                    e.attachment.filename.length
                                  ),
                                  '</span>\n                    </div>\n                    <div>\n                    <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n                <g id="SVGRepo_iconCarrier">\n                  <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                </g>\n              </svg>\n                    </div>\n                    </div>'
                                )
                            : '<a href="'
                                .concat(
                                  e.attachment.url,
                                  '" class=\'tw-flex tw-underline tw-underline-offset-4 tw-text-sm tw-text-white tw-break-all\' style="overflow-wrap: break-word;">        \n            '
                                )
                                .concat(
                                  e.attachment.filename.substring(
                                    49,
                                    e.attachment.filename.length
                                  ),
                                  '\n            <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n              <g id="SVGRepo_iconCarrier">\n                <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n              </g>\n            </svg>\n          </a>'
                                )
                        )
                )
              : e.repliedMessageId && e.message
              ? '<div class="tw-flex tw-flex-col tw-rounded-md tw-mb-2">\n          \n      <div class="tw-flex tw-flex-col  tw-mt-1">\n        <div class=" tw-bg-white  tw-p-2 tw-mb-1 tw-rounded-md tw-shadow-md tw-break-all" style="border-left : solid 4px orange"  onclick="window.scroll(\''
                  .concat(e.repliedMessageId, "','")
                  .concat(
                    e.message,
                    '\')">\n          <span class="tw-text-gray-800 tw-break-all tw-text-sm" >\n          '
                  )
                  .concat(
                    ($ = s.find(function (o) {
                      return o.id === e.repliedMessageId
                    })) !== null &&
                      $ !== void 0 &&
                      $.message
                      ? ((b = s.find(function (o) {
                          return o.id === e.repliedMessageId
                        })) === null ||
                        b === void 0 ||
                        (b = b.message) === null ||
                        b === void 0
                          ? void 0
                          : b.length) > 40
                        ? ''.concat(
                            (_ = s.find(function (o) {
                              return o.id === e.repliedMessageId
                            })) === null || _ === void 0
                              ? void 0
                              : _.message.slice(0, 40),
                            '...'
                          )
                        : s.find(function (o) {
                            return o.id === e.repliedMessageId
                          }).message
                      : ((C = s.find(function (o) {
                          return o.id === e.repliedMessageId
                        })) === null ||
                        C === void 0 ||
                        (C = C.attachment.filename) === null ||
                        C === void 0
                          ? void 0
                          : C.length) > 40
                      ? ''.concat(
                          (ee = s.find(function (o) {
                            return o.id === e.repliedMessageId
                          })) === null || ee === void 0
                            ? void 0
                            : ee.attachment.filename.slice(0, 35),
                          '...'
                        )
                      : s.find(function (o) {
                          return o.id === e.repliedMessageId
                        }).attachment.filename,
                    '\n          </span>\n        </div>\n        <div class="tw-ml-2">\n          \n          <p class="tw-text-sm tw-text-white message" style="overflow-wrap: break-word;">\n            '
                  )
                  .concat(
                    q(e.message ? e.message : e.attachment.filename),
                    '\n          </p>\n        </div>\n      </div>\n    </div>'
                  )
              : ' <p\n        class="tw-text-sm tw-text-white message " style="overflow-wrap: break-word;"\n      >\n      \n        '.concat(
                  q(e.message),
                  '\n      </p>'
                ),
            '\n  \n\n</p>\n<span class="tw-text-xs tw-text-white tw-font-normal tw-flex tw-justify-end tw-pt-1" style="align-self: flex-end "\n      >'
          )
          .concat(Ce, '</span\n    >\n  </div>\n</div>')
      m.innerHTML += ne
    } else {
      var re,
        S,
        ie,
        se,
        ae,
        k,
        oe,
        le,
        Se = new Date(e.createdAt),
        ke = Se.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: !0
        })
      if (h !== z) {
        var de = n.createElement('div')
        ;(de.className = 'tw-date-container'),
          (de.innerHTML =
            '<span class="tw-date-label font-semibold tw-text-gray-800  tw-flex tw-justify-center tw-rounded-md tw-px-2 tw-py-1 tw-text-xs">'.concat(
              h,
              '</span>'
            )),
          m.appendChild(de),
          (z = h)
      }
      var ne = '<div data-messageid="'
        .concat(
          e.id,
          '" class="tw-flex tw-w-full tw-gap-1">\n      <div>\n      '
        )
        .concat(
          r
            ? '<img src="'.concat(
                r,
                '" class="tw-h-6 tw-w-6 tw-rounded-full tw-object-cover" />'
              )
            : '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="tw-h-5 tw-w-5" fill="#444">\n          <path\n            d="m21 10.975v-2.975c0-1.104-.896-2-2-2h-6v-1.312c.305-.274.5-.668.5-1.11 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .442.195.836.5 1.11v1.312h-6c-1.104 0-2 .896-2 2v2.998c-.039.003-.072.005-.072.005-.524.037-.928.473-.928.997v2c0 .553.447 1 1 1v5c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-5c.553 0 1-.447 1-1v-1.938c.011-.153-.012-.31-.072-.455-.202-.488-.635-.605-.928-.632zm-14 1.025c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2-1.5-.896-1.5-2zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"\n          />\n        </svg>',
          '\n        \n      </div>\n      <div\n        class="tw-py-1 tw-px-2 tw-rounded-lg tw-break-word tw-shadow-md tw-bg-gray-100 tw-mr-auto tw-flex tw-flex-col tw-mb-1.5"\n        style="min-width: 50%;\n        max-width: 80%;"\n      >\n            \n      <div class="tw-flex tw-justify-between" >\n        <p\n          class="tw-text-sm tw-font-semibold tw-text-gray-700 tw-break-all"\n          style="align-self: flex-start;  margin-top:7px;overflow-wrap: break-word"\n        >\n          '
        )
        .concat(
          e.name ? e.name : 'Customer Support',
          '\n        </p>\n        <p class="tw-text-gray-700" id=reply-id style="cursor: pointer; transform:scaley(-1); font-size : 1.25rem; margin-bottom : 10px;" onclick="window.openModal(\''
        )
        .concat(e.id, "','")
        .concat(fe, "','")
        .concat(
          ve,
          '\')">\u21B5</p>\n        </div>\n          \n\n           '
        )
        .concat(
          e.attachment
            ? ''.concat(
                e.repliedMessageId
                  ? '<div  class=\'tw-flex tw-flex-col \'>\n        \n                     <div class="tw-bg-white tw-p-2 tw-mb-1 tw-rounded-md tw-shadow-md tw-break-all" style="border-left : solid 4px orange "  onclick="window.scroll(\''
                      .concat(e.repliedMessageId, "','")
                      .concat(
                        e.message,
                        '\')">\n                     <span class="tw-text-black tw-text-sm tw-breeak-all" >\n                     '
                      )
                      .concat(
                        (re = s.find(function (d) {
                          return d.id === e.repliedMessageId
                        })) !== null &&
                          re !== void 0 &&
                          re.message
                          ? ((S = s.find(function (d) {
                              return d.id === e.repliedMessageId
                            })) === null ||
                            S === void 0 ||
                            (S = S.message) === null ||
                            S === void 0
                              ? void 0
                              : S.length) > 40
                            ? ''.concat(
                                (ie = s.find(function (d) {
                                  return d.id === e.repliedMessageId
                                })) === null || ie === void 0
                                  ? void 0
                                  : ie.message.slice(0, 40),
                                '...'
                              )
                            : s.find(function (d) {
                                return d.id === e.repliedMessageId
                              }).message
                          : (se = s.find(function (d) {
                              return d.id === e.repliedMessageId
                            })) === null || se === void 0
                          ? void 0
                          : se.attachment.filename,
                        '\n                     </span>\n                   </div>\n                    <a href="'
                      )
                      .concat(
                        e.attachment.url,
                        '" class="tw-flex tw-items-center">\n                    <div class="tw-text-sm tw-break-all" style="overflow-wrap:break-word;">\n                       '
                      )
                      .concat(
                        e.attachment.filename.substring(
                          49,
                          e.attachment.filename.length
                        ),
                        '\n                       </div><div>\n                       <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n                         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n                         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n                         <g id="SVGRepo_iconCarrier">\n                           <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                           <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                         </g>\n                       </svg>\n                       </div>\n                       </a>\n                     </div>'
                      )
                  : '<a href="'
                      .concat(
                        e.attachment.url,
                        '" class="tw-text-black tw-text-sm tw-break-all" style="overflow-wrap:break-word;"> '
                      )
                      .concat(
                        e.attachment.url.match(/\.(jpeg|jpg|gif|png)$/) !== null
                          ? '<div class="tw-flex tw-flex-col"> <img src="'
                              .concat(
                                e.attachment.url,
                                '" alt="Image Preview" class=" tw-shadow-lg  tw-rounded-md tw-p-1 tw-mb-2" > \n                          <div class="tw-flex tw-items-center">\n                          <div>\n                          <span class="tw-underline-offset-4 tw-underline"> '
                              )
                              .concat(
                                e.attachment.filename.substring(
                                  49,
                                  e.attachment.filename.length
                                ),
                                '</span>\n                          </div>\n                          <div>\n                          <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n                      <g id="SVGRepo_iconCarrier">\n                        <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                        <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                      </g>\n                    </svg>\n                          </div>\n                          </div> </div>'
                              )
                          : '<a href="'
                              .concat(
                                e.attachment.url,
                                '" class=\'tw-flex tw-underline tw-underline-offset-4 tw-text-sm tw-break-all tw-text-black\' style="overflow-wrap: break-word;">        \n                  '
                              )
                              .concat(
                                e.attachment.filename.substring(
                                  49,
                                  e.attachment.filename.length
                                ),
                                '\n                  <svg viewBox="0 0 24 24" width="20" height="20" class="tw-ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>\n                    <g id="SVGRepo_iconCarrier">\n                      <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                      <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n                    </g>\n                  </svg>\n                </a>'
                              )
                      )
              )
            : e.repliedMessageId && e.message
            ? '<div class="tw-flex tw-flex-col tw-rounded-md tw-mb-2">\n                  \n              <div class="tw-flex tw-flex-col  tw-mt-1">\n                <div class=" tw-bg-white  tw-p-2 tw-mb-1 tw-rounded-md tw-shadow-md tw-break-all" style="border-left : solid 4px orange " onclick="window.scroll(\''
                .concat(e.repliedMessageId, "','")
                .concat(
                  e.message,
                  '\')">\n                  <span class="tw-text-gray-800 tw-break-all tw-text-sm" style="overflow-wrap:break-word;">\n                  '
                )
                .concat(
                  (ae = s.find(function (d) {
                    return d.id === e.repliedMessageId
                  })) !== null &&
                    ae !== void 0 &&
                    ae.message
                    ? ((k = s.find(function (d) {
                        return d.id === e.repliedMessageId
                      })) === null ||
                      k === void 0 ||
                      (k = k.message) === null ||
                      k === void 0
                        ? void 0
                        : k.length) > 40
                      ? ''.concat(
                          (oe = s.find(function (d) {
                            return d.id === e.repliedMessageId
                          })) === null || oe === void 0
                            ? void 0
                            : oe.message.slice(0, 40),
                          '...'
                        )
                      : s.find(function (d) {
                          return d.id === e.repliedMessageId
                        }).message
                    : (le = s.find(function (d) {
                        return d.id === e.repliedMessageId
                      })) === null || le === void 0
                    ? void 0
                    : le.attachment.filename,
                  '\n                  </span>\n                </div>\n                <div class="tw-ml-2">\n                  <p class="tw-text-sm tw-text-black " style="overflow-wrap: break-word;">\n                    '
                )
                .concat(
                  q(e.message ? e.message : e.attachment.filename),
                  '\n                  </p>\n                </div>\n              </div>\n            </div>'
                )
            : ' <p class="tw-text-sm tw-text-black message" style="overflow-wrap: break-word;">\n              '.concat(
                q(e.message),
                '\n            </p>'
              ),
          '\n      </p>\n      <span\n        class="tw-text-xs tw-font-normal tw-text-gray-500 tw-pt-1 tw-flex tw-justify-end"\n        style="align-self: flex-end"\n        >'
        )
        .concat(ke, '\n        </span>\n    </div>\n   </div>')
      m.innerHTML += ne
    }
  }
  i.scroll = function (e) {
    var t
    if (
      e ===
      ((t = s.find(function (g) {
        return g.id === e
      })) === null || t === void 0
        ? void 0
        : t.id)
    ) {
      var r = n.querySelector('div[data-messageid="'.concat(e, '"]')),
        a = r.getBoundingClientRect(),
        c = a.top >= 0 && a.bottom <= w.clientHeight
      c || r.scrollIntoView({ behavior: 'smooth', block: 'center' }),
        r.animate(
          [
            {
              opacity: 0,
              backgroundColor: '#FCD34D',
              textShadow: '0px 0px 15px #000000',
              borderRadius: '10px'
            },
            {
              opacity: 1,
              backgroundColor: '#ffffff',
              textShadow: 'none',
              borderRadius: '10px'
            }
          ],
          { duration: 1200, iterations: 1 }
        )
    }
  }
  function he() {
    fetch(l + '/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: 'query CheckAgentOnlineStatus {\n  checkAgentOnlineStatus\n}'
      })
    })
      .then(function (e) {
        return e.json()
      })
      .then(function (e) {
        if (e.errors) {
          console.error(e.errors)
          return
        }
        e.data.checkAgentOnlineStatus
          ? (V.classList.add('tw-bg-green-500'),
            V.classList.remove('tw-bg-red-500'),
            R.classList.add('tw-bg-green-500'),
            R.classList.remove('tw-bg-red-500'),
            (pe.innerHTML = 'Help Desk'),
            J.classList.add('tw-hidden'),
            (j = !1))
          : (V.classList.remove('tw-bg-green-500'),
            V.classList.add('tw-bg-red-500'),
            R.classList.remove('tw-bg-green-500'),
            R.classList.add('tw-bg-red-500'),
            (pe.innerHTML = 'Currently offline, Leave a message'),
            J.classList.remove('tw-hidden'),
            (j = !0),
            j && (L.innerHTML = ''))
      })
  }
  he()
  var H = n.getElementById('tdc-chat-button'),
    w = n.getElementById('tdc-chat-container')
  function me() {
    if (H.classList.contains('tw-hidden')) {
      var e = s.filter(function (t) {
        return !t.isRead && t.direction === 'SentByChatAgent'
      })
      e.length &&
        ((s = s.map(function (t) {
          return (
            !t.isRead && t.direction === 'SentByChatAgent' && (t.isRead = !0), t
          )
        })),
        fetch(l + '/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query:
              'mutation SetMessageStatus($messageIds: [String!]!, $chatUserId: String!) {\n  setMessageStatus(messageIds: $messageIds, chatUserId: $chatUserId)\n}',
            variables: {
              messageIds: e.map(function (t) {
                return t.id
              }),
              chatUserId: localStorage.getItem('chat-user-id')
            }
          })
        })
          .then(function (t) {
            return t.json()
          })
          .then(function () {})
          .catch(function () {}),
        W())
    }
  }
  function W() {
    var e = n.getElementById('tdc-unread-count'),
      t = s.filter(function (r) {
        return r.direction === 'SentByChatAgent' && !r.isRead
      }).length
    t
      ? ((e.innerHTML = '<span>' + t + '</span>'),
        e.classList.remove('tw-hidden'),
        e.classList.add('tw-flex'))
      : (e.classList.remove('tw-flex'), e.classList.add('tw-hidden'))
  }
  function ge() {
    v = ce.subscribe('presence-chatapp-' + u)
    var e = ce.subscribe('private-chatapp-agent')
    v.bind('new-message', function (t) {
      var r, a
      s.push(t),
        G(
          {
            id: t.id,
            message: t.message,
            name:
              t.direction === 'SentByChatAgent'
                ? (r = t.chatAgent) === null || r === void 0
                  ? void 0
                  : r.nickname
                : 'You',
            time: t.createdAt,
            isRead: t.isRead,
            direction: t.direction,
            attachment: t.attachment
              ? {
                  id: t.attachment.id,
                  url: t.attachment.url,
                  filename: t.attachment.filename
                }
              : void 0,
            createdAt: t.createdAt,
            repliedMessageId: t.repliedMessageId
          },
          t.direction === 'SentByChatAgent' ? 'agent' : 'self',
          (a = t.chatAgent) === null || a === void 0 ? void 0 : a.avatar
        ),
        (m.scrollTop = m.scrollHeight),
        me(),
        W()
    }),
      v.bind('block-user', function (t) {
        t.chatUserId === u &&
          ((D = t.isBanned),
          D === !0
            ? (O.classList.add('tw-hidden'), E.classList.remove('tw-hidden'))
            : (E.classList.add('tw-hidden'), O.classList.remove('tw-hidden')))
      }),
      e.bind('agent-status', function (t) {
        he()
      }),
      v.bind('update-message', function (t) {
        var r = n.querySelector(
          'div[data-messageid="'.concat(t.id, '"] .message')
        )
        r && (r.innerHTML = t.message)
      }),
      v.bind('delete-message', function (t) {
        var r = n.querySelector('div[data-messageid="'.concat(t.id, '"]'))
        r && r.remove()
      })
  }
  u &&
    (ge(),
    setTimeout(function () {
      fetch(l + '/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query:
            'query GetMessages($chatUserId: String!) {\n  getMessages(chatUserId: $chatUserId) {\n    messages {\n      chatUserId\n      repliedMessageId\n      createdAt\n      direction\n      id\n      isRead\n      message\n      attachment {\n        id\n        url\n        filename\n      }\n      chatAgent {\n        id\n        nickname\n      }\n    }\n    total\n  }\n}',
          variables: { chatUserId: u }
        })
      })
        .then(function (e) {
          return e.json()
        })
        .then(function (e) {
          if (e.errors) {
            console.error(e.errors)
            return
          }
          e &&
            e.data &&
            e.data.getMessages &&
            (e.data.getMessages.messages.forEach(function (t) {
              var r, a
              s.push(t),
                G(
                  _objectSpread(
                    _objectSpread({}, t),
                    {},
                    {
                      name:
                        t.direction === 'SentByChatAgent'
                          ? (r = t.chatAgent) === null || r === void 0
                            ? void 0
                            : r.nickname
                          : 'You'
                    }
                  ),
                  t.direction === 'SentByChatAgent' ? 'agent' : 'self',
                  (a = t.chatAgent) === null || a === void 0 ? void 0 : a.avatar
                )
            }),
            W()),
            (m.scrollTop = m.scrollHeight)
        })
    }, 1e3)),
    i.addEventListener('resize', function () {
      H.classList.contains('tw-hidden')
        ? ((w.style.height = '620px'),
          i.innerWidth < 576
            ? ((w.style.width = '285px'), (f.style.width = '200px'))
            : ((w.style.width = '385px'), (f.style.width = '288px')),
          (w.style.zIndex = '100000'))
        : ((w.style.height = '36px'),
          (w.style.width = '120px'),
          (w.style.zIndex = '-1'))
    }),
    (i.tdcToggleChat = function () {
      H.classList.contains('tw-hidden')
        ? ((w.style.height = '36px'),
          (w.style.width = '120px'),
          (w.style.zIndex = '-1'),
          (w.style.opacity = '0'),
          f.blur())
        : ((w.style.height = '620px'),
          i.innerWidth < 576
            ? ((w.style.width = '285px'), (f.style.width = '200px'))
            : ((w.style.width = '385px'), (f.style.width = '288px')),
          (w.style.zIndex = '100000'),
          (w.style.opacity = '1'),
          setTimeout(function () {
            f.focus()
          }, 750)),
        (m.scrollTop = m.scrollHeight),
        H.classList.toggle('tw-hidden'),
        me()
    }),
    (i.tdcHandleLiveMessage = function (e) {
      clearTimeout(M),
        (M = setTimeout(function () {
          v && v.trigger('client-typing', { chatUserId: u, content: e })
        }, 500))
    }),
    (i.tdcSendAttachment = function (e) {
      if (!(!u || !e)) {
        var t = new FormData()
        t.append(
          'operations',
          JSON.stringify({
            operationName: 'SendMessage',
            variables: {
              chatUserId: u,
              attachment: null,
              currentUrl: i.location.href,
              repliedMessageId: A
            },
            query:
              'mutation SendMessage($currentUrl: String!, $phone: String, $email: String, $repliedMessageId: String, $name: String, $customerId: String, $attachment: Upload, $message: String, $chatUserId: String) {\n  sendMessage(\n    currentUrl: $currentUrl\n    phone: $phone\n  repliedMessageId: $repliedMessageId\n   email: $email\n    name: $name\n    customerId: $customerId\n    attachment: $attachment\n    message: $message\n    chatUserId: $chatUserId\n  ) {\n    chatUserId\n    createdAt\n    direction\n    id\n    isRead\n    message\n   repliedMessageId\n  attachment {\n      id\n      url\n      filename\n      __typename\n    }\n    __typename\n  }\n}'
          })
        ),
          t.append('map', JSON.stringify({ 1: ['variables.attachment'] })),
          t.append(1, e),
          fetch(l + '/graphql', { method: 'POST', body: t })
            .then(function (r) {
              return r.json()
            })
            .then(function (r) {
              if (r.errors) {
                console.error(r.errors)
                return
              }
            })
            .catch(console.error),
          (A = void 0),
          P.classList.add('tw-hidden')
      }
    }),
    (i.tdcSendMessage = function () {
      f.focus()
      var e = f.value.trim(),
        t,
        r,
        a
      if (e) {
        if (!u) {
          if (
            ((t = I ? I.value.trim() : void 0),
            (r = T ? T.value.trim() : void 0),
            (a = B ? B.value.trim() : void 0),
            (isValidEmail = function (g) {
              var h = /\S+@\S+\.\S+/
              return !!h.test(g)
            }),
            (isValidPhone = function (g) {
              var h = /^\d{10}$/
              return !!h.test(g)
            }),
            r && !isValidEmail(r)
              ? (emailError.textContent = 'Please enter a valid email address')
              : (emailError.textContent = ''),
            a && !isValidPhone(a))
          ) {
            phoneError.textContent = 'Please enter a valid phone number'
            return
          } else phoneError.textContent = ''
          if (!t || !isValidEmail || !isValidPhone) {
            U.classList.remove('tw-w-0'),
              (U.style.transform = 'translateY(0)'),
              (U.style.opacity = 1),
              I.classList.remove('tw-hidden'),
              T.classList.remove('tw-hidden'),
              B.classList.remove('tw-hidden'),
              I.focus()
            return
          } else
            U.classList.add('tw-hidden'),
              I.classList.add('tw-hidden'),
              T.classList.add('tw-hidden'),
              B.classList.add('tw-hidden')
        }
        K.classList.remove('tw-flex'),
          K.classList.add('tw-hidden'),
          ue.classList.add('tw-h-full'),
          (f.value = ''),
          M && clearTimeout(M),
          fetch(l + '/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query:
                'mutation SendMessage(\n  $currentUrl: String!\n  $repliedMessageId: String\n  $phone: String\n  $email: String\n  $name: String\n  $customerId: String\n  $attachment: Upload\n  $message: String\n  $chatUserId: String\n) {\n  sendMessage(\n    currentUrl: $currentUrl\n    repliedMessageId: $repliedMessageId\n    phone: $phone\n    email: $email\n    name: $name\n    customerId: $customerId\n    attachment: $attachment\n    message: $message\n    chatUserId: $chatUserId\n  ) {\n    id\n    message\n    chatUserId\n    direction\n    isRead\n    attachment {\n      filename\n      id\n      url\n    }\n    createdAt\n    repliedMessageId\n   \n  }\n}',
              variables: {
                message: e,
                name: t,
                email: r,
                phone: a,
                chatUserId: u,
                currentUrl: i.location.href,
                repliedMessageId: A
              }
            })
          })
            .then(function (c) {
              return c.json()
            })
            .then(function (c) {
              if (c.errors) {
                console.error(c.errors)
                return
              }
              if (c && c.data && c.data.sendMessage) {
                var g = c.data.sendMessage.chatUserId
                g &&
                  !u &&
                  ((u = g),
                  localStorage.setItem('chat-user-id', u),
                  ge(),
                  G(
                    _objectSpread(
                      _objectSpread({}, c.data.sendMessage),
                      {},
                      { name: 'You' }
                    )
                  ),
                  (m.scrollTop = m.scrollHeight),
                  s.push(c.data.sendMessage),
                  j &&
                    G(
                      {
                        message: 'Currently offline, Leave a message',
                        name: 'Customer Support',
                        createdAt: new Date().toISOString(),
                        direction: 'SentByChatAgent'
                      },
                      'agent'
                    ))
              }
              v.trigger('client-typing', { chatUserId: u, content: '' })
            })
            .catch(console.error),
          (A = void 0),
          P.classList.add('tw-hidden')
      }
    }),
    n
      .getElementById('tdc-resizable-textarea')
      .addEventListener('keyup', function (e) {
        e.key === 'Enter' && i.tdcSendMessage()
      })
  var D
  u &&
    fetch(l + '/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query:
          'query GetChatUserStatus($chatUserId: String!) {\n  getChatUserStatus(chatUserId: $chatUserId) {\n    isBanned\n   }\n}',
        variables: { chatUserId: u }
      })
    })
      .then(function (e) {
        return e.json()
      })
      .then(function (e) {
        var t
        e.errors &&
          (console.error(e.errors),
          localStorage.removeItem('chat-user-id'),
          location.reload()),
          ((t = e.data.getChatUserStatus) === null || t === void 0
            ? void 0
            : t.isBanned) === !0
            ? ((D = !0),
              O.classList.add('tw-hidden'),
              E.classList.remove('tw-hidden'))
            : ((D = !1),
              E.classList.add('tw-hidden'),
              O.classList.remove('tw-hidden'))
      })
})(window, document)
