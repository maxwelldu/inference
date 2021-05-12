"use strict";
var e, t, n = "[UMENG] -- ",
  a = (t = !1, function () {
    return e = null === e ? new i : e
  });

function i() {
  this.setDebug = function (e) {
    t = e
  };
  this.d = function () {
    if (t) try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.debug.apply(console, arguments)
    } catch (e) {}
  };
  this.i = function () {
    try {
      if (t) try {
        "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
        console.info.apply(console, arguments)
      } catch (e) {}
    } catch (e) {}
  };
  this.e = function () {
    if (t) try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.error.apply(console, arguments)
    } catch (e) {}
  };
  this.w = function () {
    if (t) try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.warn.apply(console, arguments)
    } catch (e) {}
  };
  this.v = function () {
    if (t) try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.log.apply(console, arguments)
    } catch (e) {}
  };
  this.t = function () {
    if (t) try {
      console.table.apply(console, arguments)
    } catch (e) {}
  };
  this.tip = function () {
    try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.log.apply(console, arguments)
    } catch (e) {}
  };
  this.tip_w = function (e) {
    try {
      console.log("%c " + n + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")
    } catch (e) {}
  };
  this.err = function () {
    try {
      "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
      console.error.apply(console, arguments)
    } catch (e) {}
  };
  this.repeat = function (e) {
    for (var t = e; t.length < 86;) t += e;
    return t
  }
}
var r, s = (r = e = null, function () {
  return r = r || new o
});

function o() {
  var n = {};
  this.useOpenid = function () {
    return !!n.useOpenid
  };
  this.useSwanid = function () {
    return !!n.useSwanid
  };
  this.autoGetOpenid = function () {
    return !!n.autoGetOpenid
  };
  this.appKey = function () {
    return n.appKey
  };
  this.uploadUserInfo = function () {
    return n.uploadUserInfo
  };
  this.enableVerify = function () {
    return n.enableVerify
  };
  this.set = function (e) {
    n = e
  };
  this.get = function () {
    return n
  };
  this.setItem = function (e, t) {
    n[e] = t
  };
  this.getItem = function (e) {
    return n[e]
  }
}

function u() {}
u.prototype = {
  on: function (e, t, n) {
    var i = this.e || (this.e = {});
    (i[e] || (i[e] = [])).push({
      fn: t,
      ctx: n
    });
    return this
  },
  once: function (e, t, n) {
    var i = this;

    function r() {
      i.off(e, r);
      t.apply(n, arguments)
    }
    r._ = t;
    return this.on(e, r, n)
  },
  emit: function (e) {
    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
    return this
  },
  off: function (e, t) {
    var n = this.e || (this.e = {}),
      i = n[e],
      r = [];
    if (i && t)
      for (var o = 0, s = i.length; o < s; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
    r.length ? n[e] = r : delete n[e];
    return this
  }
};
var c = new u;
c.messageType = {
  CONFIG_LOADED: 0,
  UMA_LIB_INITED: 1
};
var f = new(function () {
    function e() {}
    e.prototype.setStorage = function (e, t, n) {
      wx.setStorage({
        key: e,
        data: t,
        success: function () {
          "function" == typeof n && n(!0)
        },
        fail: function () {
          "function" == typeof n && n(!1)
        }
      })
    };
    e.prototype.getStorage = function (t, n) {
      wx.getStorage({
        key: t,
        success: function (e) {
          "function" == typeof n && n(e.data)
        },
        fail: function (e) {
          a().w(t + ": " + e.errMsg);
          "function" == typeof n && n()
        }
      })
    };
    e.prototype.removeStorage = function (e, t) {
      wx.removeStorage({
        key: e,
        success: function () {
          "function" == typeof t && t(!0)
        },
        fail: function () {
          "function" == typeof t && t(!1)
        }
      })
    };
    e.prototype.getSystemInfo = function (i) {
      wx.getSystemInfo({
        success: function (e) {
          e.safeArea = e.safeArea || {};
          var t = "";
          e.host && "string" == typeof e.host.env && (t = e.host.env);
          var n = {
              model: e.model,
              brand: e.brand,
              pixelRatio: e.pixelRatio,
              screenWidth: e.screenWidth,
              screenHeight: e.screenHeight,
              fontSizeSetting: e.fontSizeSetting,
              platform: e.platform,
              platformVersion: e.version,
              platformSDKVersion: e.SDKVersion,
              language: e.language,
              deviceName: e.model,
              OSVersion: e.system,
              resolution: "",
              theme: e.theme,
              benchmarkLevel: e.benchmarkLevel,
              safeArea: {
                width: e.safeArea.width,
                height: e.safeArea.height,
                top: e.safeArea.top,
                left: e.safeArea.left,
                bottom: e.safeArea.bottom,
                right: e.safeArea.right
              },
              statusBarHeight: e.statusBarHeight,
              host: t
            },
            t = e.system.split(" ");
          Array.isArray(t) && (n.OS = t[0]);
          t = Math.round(e.screenWidth * e.pixelRatio), e = Math.round(e.screenHeight * e.pixelRatio);
          n.resolution = e < t ? t + "*" + e : e + "*" + t;
          "function" == typeof i && i(n)
        },
        fail: function () {
          "function" == typeof i && i()
        }
      })
    };
    e.prototype.getDeviceInfo = function (e) {
      "function" == typeof e && e("")
    };
    e.prototype.checkNetworkAvailable = function (t) {
      wx.getNetworkType({
        success: function (e) {
          "function" == typeof t && t(e && "none" !== e.networkType)
        },
        fail: function () {
          "function" == typeof t && t(!1)
        }
      })
    };
    e.prototype.getNetworkInfo = function (t) {
      wx.getNetworkType({
        success: function (e) {
          "function" == typeof t && t({
            networkAvailable: "none" !== e.networkType,
            networkType: e.networkType
          })
        },
        fail: function () {
          "function" == typeof t && t()
        }
      })
    };
    e.prototype.getDeviceId = function (e) {
      e("")
    };
    e.prototype.getAdvertisingId = function (e) {
      "function" == typeof e && e("")
    };
    e.prototype.onNetworkStatusChange = function (t) {
      wx.onNetworkStatusChange(function (e) {
        "function" == typeof t && t(e.isConnected)
      })
    };
    e.prototype.request = function (e) {
      var t = e.success,
        n = e.fail,
        i = !1,
        r = null;
      e.success = function (e) {
        if (!i) {
          r && clearTimeout(r);
          "function" == typeof t && t(e)
        }
      };
      e.fail = function () {
        if (!i) {
          r && clearTimeout(r);
          "function" == typeof n && n(!1)
        }
      };
      wx.request(e);
      r = setTimeout(function () {
        r && clearTimeout(r);
        i = !0;
        "function" == typeof n && n(i)
      }, e.timeout || 5e3)
    };
    e.prototype.getSdkType = function () {
      return "wxmp"
    };
    e.prototype.getPlatform = function () {
      return "wx"
    };
    e.prototype.getUserInfo = function (t) {
      var n = {
        fail: function () {
          t && t()
        },
        success: function (e) {
          if (e && e.userInfo) {
            e = e.userInfo;
            t && t({
              avatar: e.avatarUrl,
              nickName: e.nickName,
              gender: e.gender,
              country: e.country,
              province: e.province,
              city: e.city,
              language: e.language
            })
          }
        }
      };
      try {
        wx.getSetting({
          success: function (e) {
            e.authSetting["scope.userInfo"] && wx.getUserInfo(n)
          },
          fail: function () {
            t()
          }
        })
      } catch (e) {
        a.e("getUserInfo error", e)
      }
    };
    e.prototype.getAppInfoSync = function () {
      if (wx.getAccountInfoSync) {
        var e = wx.getAccountInfoSync(),
          e = e && e.miniProgram ? e.miniProgram : {};
        return {
          appId: e.appId,
          appEnv: e.envVersion,
          appVersion: e.version
        }
      }
      return {}
    };
    e.prototype.onShareAppMessage = function (e) {
      wx.onShareAppMessage(e)
    };
    e.prototype.shareAppMessage = function (e) {
      wx.shareAppMessage(e)
    };
    return e
  }()),
  p = function (e, t) {
    return (p = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      })(e, t)
  };

function d(e, t) {
  p(e, t);

  function n() {
    this.constructor = e
  }
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var h = {
  SESSION_INTERVAL: 3e4,
  LOG_URL: "/wxm_logs",
  GET_OPENID_URL: "/uminiprogram_logs/wx/getuut",
  USERINFO_URL: "/uminiprogram_logs/comm/uif",
  ENDPOINT: "https://umini.shujupie.com",
  ENDPOINTB: "https://ulogs.umeng.com",
  DEVICE_INFO_KEY: "device_info",
  ADVERTISING_ID: "mobile_ad_id",
  ANDROID_ID: "android_id",
  CURRENT_SESSION: "current_session",
  SESSION_PAUSE_TIME: "session_pause_time",
  EVENT_SEND_DEFAULT_INTERVAL: 15e3,
  EVENT_LAST_SEND_TIME: "last_send_time",
  MAX_EVENTID_LENGTH: 128,
  MAX_PROPERTY_KEY_LENGTH: 256,
  MAX_PROPERTY_KEYS_COUNT: 100,
  REPORT_POLICY: "report_policy",
  REPORT_INTERVAL_TIME: "report_interval_time",
  REPORT_POLICY_START_SEND: "1",
  REPORT_POLICY_INTERVAL: "6",
  IMPRINT: "imprint",
  SEED_VERSION: "1.0.0",
  IMPL_VERSION: "2.6.3",
  ALIPAY_AVAILABLE_VERSION: "10.1.52",
  SHARE_PATH: "um_share_path",
  SHARES: "shares",
  REQUESTS: "requests",
  UUID: "um_uuid",
  UUID_SUFFIX: "ud",
  OPENID: "um_od",
  UNIONID: "um_unid",
  ALIPAYID: "um_alipayid",
  USERID: "um_userid",
  PROVIDER: "um_provider",
  SWANID: "um_swanid",
  ANONYMOUSID: "um_anonymousid",
  LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
  UM_SSRC: "_um_ssrc",
  USER_INFO: "user_info",
  IS_ALIYUN: !1
};
var l, g, _ = {
    isNumber: function (e) {
      return !Number.isNaN(parseInt(e, 10))
    },
    compareVersion: function (e, t) {
      for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
        var o = parseInt(n[r] || 0, 10),
          s = parseInt(i[r] || 0, 10);
        if (s < o) return 1;
        if (o < s) return -1
      }
      return 0
    },
    getRandomStr: function (e) {
      for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], i = 0; i < Number(e); i++) t += n[Math.round(Math.random() * (n.length - 1))];
      return t
    },
    clone: function (e) {
      return JSON.parse(JSON.stringify(e))
    },
    startsWith: function (e, t) {
      return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t
    },
    endsWith: function (e, t) {
      return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t
    },
    assign: function (e) {
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        if (i)
          for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
      }
      return t
    },
    deepEqual: function e(t, n) {
      if (t === n) return !0;
      if (t && "object" == typeof t && n && "object" == typeof n) {
        if (Object.keys(t).length !== Object.keys(n).length) return !1;
        for (var i in t) {
          if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
          if (!e(t[i], n[i])) return !1
        }
        return !0
      }
      return !1
    },
    trimStart: function (e, t) {
      if (!e) return "";
      if ("string" == typeof t && t.length) {
        t = new RegExp("^" + t + "*");
        e = e.replace(t, "")
      } else e = e.replace(/^s*/, "");
      return e
    },
    trimEnd: function (e, t) {
      if (!e) return "";
      var n, i;
      if ("string" == typeof t && t.length) {
        n = new RegExp(t);
        i = e.length;
        for (; n.test(e.charAt(i));) --i;
        return e.slice(0, i + 1)
      }
      n = /s/;
      i = e.length - 1;
      for (; n.test(e.charAt(i));) --i;
      return e.slice(0, i + 1)
    },
    isFunction: function (e) {
      return "function" == typeof e
    }
  },
  v = function (e) {
    d(t, e);

    function t() {
      return null !== e && e.apply(this, arguments) || this
    }
    t.prototype.getOpenIdAsync = function (t, n) {
      var i = this;
      wx.login({
        success: function (e) {
          e.code ? f.request({
            url: h.ENDPOINT + h.GET_OPENID_URL,
            method: "GET",
            data: {
              key: t,
              code: e.code
            },
            success: function (e) {
              if (e && 200 === e.statusCode && e.data && e.data.data) {
                e = e.data.data;
                i.setOpenid(e.oid);
                i.setUnionid(e.uid);
                return n && n(!0)
              }
              n && n()
            },
            fail: function (e) {
              a().v("wx request failed...", e);
              n && n()
            }
          }) : n && n()
        },
        fail: function () {
          n && n()
        }
      })
    };
    return t
  }(function (t) {
    d(e, t);

    function e() {
      var e = null !== t && t.apply(this, arguments) || this;
      e._openid = "";
      e._unionid = "";
      e._useOpenid = !1;
      return e
    }
    e.prototype.initID = function (t) {
      var n = this;
      n._idType = n._useOpenid ? "openid" : "uuid";
      a().v("id type: ", n._idType);
      f.getStorage(h.UNIONID, function (e) {
        n._unionid = e
      });
      this._useOpenid ? f.getStorage(h.OPENID, function (e) {
        n._openid = e;
        t && t()
      }) : t && t()
    };
    e.prototype.setUseOpenid = function (e) {
      this._useOpenid = e
    };
    e.prototype.setOpenid = function (e) {
      if (!this._openid && e) {
        this._openid = e;
        f.setStorage(h.OPENID, e)
      }
    };
    e.prototype.setUnionid = function (e) {
      if (!this._unionid && e) {
        this._unionid = e;
        f.setStorage(h.UNIONID, e)
      }
    };
    e.prototype.getIdTracking = function () {
      var e = t.prototype.getIdTracking.call(this);
      this._openid && (e.openid = this._openid);
      this._unionid && (e.unionid = this._unionid);
      this._userid && (e.userid = this._userid);
      return e
    };
    e.prototype.getId = function () {
      return this._useOpenid ? this._openid : this._uuid
    };
    return e
  }(function () {
    function e() {
      this._uuid = "";
      this._userid = "";
      this._provider = "";
      this._idType = ""
    }
    e.prototype.createUUID = function () {
      return _.getRandomStr(10) + Date.now() + _.getRandomStr(7) + h.UUID_SUFFIX
    };
    e.prototype.initUUID = function (t) {
      var n = this;
      f.getStorage(h.UUID, function (e) {
        if (e) n._uuid = e;
        else {
          n._uuid = n.createUUID();
          f.setStorage(h.UUID, n._uuid)
        }
        t && t(e)
      })
    };
    e.prototype.initUserid = function () {
      var t = this;
      f.getStorage(h.USERID, function (e) {
        if (!t._userid && e) {
          t._userid = e;
          a().v("userId is ", e)
        }
      });
      f.getStorage(h.PROVIDER, function (e) {
        if (!t._provider && e) {
          t._provider = e;
          a().v("provider is ", e)
        }
      })
    };
    e.prototype.init = function (e) {
      var t = this;
      t.initUUID(function () {
        t.initUserid();
        t.initID(e)
      })
    };
    e.prototype.setUserid = function (e, t) {
      if (!this._userid && e) {
        this._userid = e;
        this._provider = t;
        f.setStorage(h.USERID, e);
        f.setStorage(h.PROVIDER, t)
      }
    };
    e.prototype.getUserId = function () {
      return this._userid
    };
    e.prototype.getProvider = function () {
      return this._provider
    };
    e.prototype.getIdType = function () {
      return this._idType
    };
    e.prototype.getIdTracking = function () {
      var e = {};
      this._uuid && (e.uuid = this._uuid);
      this._userid && (e.userid = this._userid);
      return e
    };
    return e
  }())),
  y = function () {
    return l = l || new v
  },
  m = function () {
    return g = g || new S
  };

function S() {
  var t = !1,
    n = null,
    i = [];
  this.addPageStart = function (e) {
    if (e && !t) {
      n = {
        ts: Date.now(),
        path: e,
        page_name: e
      };
      t = !0
    }
  };
  this.addPageEnd = function (e) {
    if (t && e && n && e === n.page_name) {
      e = Date.now() - n.ts;
      n.duration = Math.abs(e);
      i.push(n);
      n = null;
      t = !1
    }
  };
  this.get = function () {
    return i
  };
  this.getCurrentPage = function () {
    return n
  };
  this.clear = function () {
    i.length = 0
  }
}
var I = {};

function E() {
  return function (e) {
    var t, n = [];
    for (t in e) "_um_ssrc" !== t && "_um_sts" !== t && n.push(t + "=" + e[t]);
    return n.join("&")
  }(I)
}
var O, A, N, T = function () {
  return O = O || new w
};

function w() {
  return {
    add: function (e, t) {
      a().v("share origin: %o", e);
      var n = {
        title: e && e.title,
        path: e && e.path && e.path.split("?")[0],
        _um_sts: Date.now()
      };
      n.path && 1 < n.path.length && _.startsWith(n.path, "/") && (n.path = _.trimStart(n.path, "/"));
      var i = e.path || "",
        r = y().getId();
      if (r) {
        var o = N.split(","),
          s = (o = o.filter(function (e) {
            return 0 < e.length
          })).indexOf(r);
        (o = 0 <= s ? o.slice(0, s) : o).length < 3 && o.push(r);
        r = o.join(","); - 1 !== i.indexOf("?") ? i += "&_um_ssrc=" + r : i += "?_um_ssrc=" + r;
        o = Date.now();
        i += "&_um_sts=" + o;
        if (t) {
          t = E();
          e.query = e.query ? e.query + "&_um_ssrc=" + r + "&_um_sts=" + o : t ? t + "&_um_ssrc=" + r + "&_um_sts=" + o : "_um_ssrc=" + r + "&_um_sts=" + o
        } else e.path = i;
        n._um_ssrc = r;
        n._um_sts = o
      }
      A.push(n);
      a().v("share: %o", e);
      return e
    },
    setShareSource: function (e) {
      N = e
    },
    clear: function () {
      A.length = 0
    },
    get: function () {
      return A
    }
  }
}
var k, b, R, D, P = {
    stringify: function (e) {
      if (e) try {
        return JSON.stringify(e)
      } catch (e) {}
      return ""
    },
    parse: function (e) {
      if (e) try {
        return JSON.parse(e)
      } catch (e) {}
      return null
    },
    parseToArray: function (e) {
      if (e) try {
        return JSON.parse(e)
      } catch (e) {}
      return []
    }
  },
  U = (D = !(A = []), function () {
    return k = k || new L
  });

function L() {
  this.load = function (t) {
    if (R) {
      f.removeStorage(b);
      t()
    } else {
      b = "um_cache_" + s().appKey();
      f.getStorage(b, function (e) {
        R = P.parse(e) || {};
        D = !0;
        f.removeStorage(b);
        t()
      })
    }
  };
  this.save = function () {
    R && f.setStorage(b, P.stringify(R))
  };
  this.set = function (e, t) {
    R && (R[e] = t)
  };
  this.get = function (e) {
    return (R || {})[e]
  };
  this.remove = function (e) {
    R && R[e] && delete R[e]
  };
  this.getAll = function () {
    return R
  };
  this.clear = function () {
    R = null
  };
  this.has = function (e) {
    return !!this.get(e)
  };
  this.isLoaded = function () {
    return D
  }
}
var C, M, V, x, j = "ekvs",
  K = 1e4,
  G = (V = [], x = [], function () {
    return C = C || {
      addEvent: function (e) {
        if (M) {
          V.unshift(e);
          if (1 < V.length) {
            F();
            V.length = 0
          }
        } else {
          a().w("session id is null: ", M);
          x.unshift(e)
        }
      },
      setSessionId: function (e) {
        M = e;
        a().v("setSessionId: ", M);
        if (Array.isArray(x) && x.length && M) {
          for (var t = 0; t < x.length; t++) this.addEvent(x[t]);
          x.length = 0
        }
      },
      getEkvs: function () {
        var e = U().get(j);
        return e = V && V.length ? H(e, V) : e
      },
      clear: function () {
        U().remove(j);
        V.length = 0
      }
    }
  });

function F() {
  if (V.length) {
    var e = U().get(j);
    if (function (e) {
        var t, n = 0;
        for (t in e) Array.isArray(e[t]) && (n += e[t].length);
        return n
      }(e) + V.length <= K) {
      e = H(e, V);
      U().set(j, e)
    }
  }
}

function H(e, t) {
  var n = (e = e || {})[M];
  Array.isArray(n) && n.length ? e[M] = n.concat(t) : e[M] = [].concat(t);
  return e
}
var q, B = "2g",
  Y = "3g",
  W = "4g",
  J = {
    HALF_SESSION: "half_session",
    CLOSE_SESSION: "close_session",
    EKV: "ekv",
    ENTER_PAGE: "enter_page",
    LEAVE_PAGE: "leave_page"
  },
  X = ["access", "access_subtype"],
  z = {
    instance: function () {
      return q = q || Q()
    }
  };

function Q() {
  var e = !1,
    i = {};

  function t(n) {
    var e = U().get(h.IMPRINT);
    e && (i.imprint = e);
    i.device_type = "Phone";
    i.sdk_version = h.IMPL_VERSION;
    i.appkey = s().appKey();
    f.getDeviceInfo(function (e) {
      i.device_info = e || ""
    });
    e = f.getAppInfoSync();
    i.appid = e.appId;
    i.app_env = e.appEnv;
    i.app_version = e.appVersion;
    f.getSystemInfo(function (t) {
      f.getNetworkInfo(function (e) {
        e = function (e, t) {
          var n = {};
          (e = e || {}).safeArea = e.safeArea || {};
          var i = (t = t || {}).networkType;
          "none" === i && (i = "unknown");
          var r = e.model || "",
            o = e.platform || "",
            s = e.brand || "",
            t = s.toLowerCase();
          n.sdk_type = f.getSdkType();
          n.platform = f.getPlatform();
          n.platform_sdk_version = e.platformSDKVersion;
          n.platform_version = e.platformVersion;
          n.resolution = e.resolution;
          n.pixel_ratio = e.pixelRatio;
          n.os = o;
          n.font_size_setting = e.fontSizeSetting;
          n.device_model = r;
          n.device_brand = s;
          n.device_manufacturer = t;
          n.device_manuid = r;
          n.device_name = r;
          n.os_version = e.OSVersion;
          n.language = e.language;
          n.theme = e.theme;
          n.benchmark_level = e.benchmarkLevel;
          n.status_bar_height = e.statusBarHeight;
          n.safe_area_top = e.safeArea.top;
          n.safe_area_left = e.safeArea.left;
          n.safe_area_right = e.safeArea.right;
          n.safe_area_bottom = e.safeArea.bottom;
          n.safe_area_height = e.safeArea.height;
          n.safe_area_width = e.safeArea.width;
          n.storage = e.storage;
          n.screen_width = e.screenWidth;
          n.screen_height = e.screenHeight;
          n.host = e.host;
          switch (i = i ? i.toLowerCase() : "") {
            case W:
              n.access_subtype = "LTE";
              n.access = "4G";
              break;
            case Y:
              n.access_subtype = "CDMA";
              n.access = "3G";
              break;
            case B:
              n.access_subtype = "GRPS";
              n.access = "2G";
              break;
            default:
              n.access = i;
              delete n.access_subtype
          }
          return n
        }(t, e);
        _.assign(i, e);
        n && n()
      })
    })
  }
  return {
    init: function () {
      t(function () {
        e = !0
      })
    },
    isLoaded: function () {
      return e
    },
    get: function () {
      return i
    },
    getRealtimeFields: function () {
      var t = {};
      X.forEach(function (e) {
        t[e] = i[e]
      });
      return t
    },
    setIdTracking: function (e) {
      this.setItem("id_tracking", e)
    },
    setIdType: function (e) {
      this.setItem("id_type", e)
    },
    setAppVersion: function (e) {
      this.setItem("app_version", e)
    },
    setSuperProperty: function (e) {
      i.sp || (i.sp = {});
      i.sp.isv = e
    },
    getSuperProperty: function () {
      return i && i.sp ? i.sp.isv : ""
    },
    setItem: function (e, t) {
      i[e] = t
    },
    getItem: function (e) {
      return i[e]
    }
  }
}
var Z, $, ee, te = (ee = $ = Z = q = R = k = O = g = l = null, function () {
  return Z = Z || ne()
});

function ne() {
  return {
    resume: function (e) {
      var t = !1;
      ee = ee || U().get(h.CURRENT_SESSION);
      var n = new Date;
      $ = n.getTime();
      if (!ee || !ee.end_time || $ - ee.end_time > h.SESSION_INTERVAL) {
        t = !0;
        ! function (e) {
          try {
            var t = (ee || {}).options || {},
              n = _.assign({}, function (e) {
                var t, n = {};
                for (t in e) 0 === t.indexOf("_um_") && (n[t] = e[t]);
                a().v("query: ", e);
                a().v("_um_params: ", n);
                return n
              }(e.query));
            n.path = e.path || t.path;
            n.scene = e.scene ? f.getPlatform() + "_" + e.scene : t.scene;
            var i = e.referrerInfo;
            i && (n.referrerAppId = i.appId);
            a().v("session options: ", n);
            var r = n[h.UM_SSRC];
            r && T().setShareSource(r);
            var o = Date.now();
            ee = {
              id: _.getRandomStr(10) + o,
              start_time: o,
              options: n
            }
          } catch (e) {
            a().e("生成新session失败: ", e)
          }
        }(e);
        a().v("开始新的session(%s): ", ee.id, ee)
      } else a().v("延续上一次session(%s): %s ", ee.id, n.toLocaleTimeString(), ee);
      return t
    },
    pause: function () {
      ! function () {
        if (ee) {
          var e = new Date;
          ee.end_time = e.getTime();
          "number" != typeof ee.duration && (ee.duration = 0);
          ee.duration = ee.end_time - $;
          U().set(h.CURRENT_SESSION, ee);
          a().v("退出会话(%s): %s ", ee.id, e.toLocaleTimeString(), ee)
        }
      }()
    },
    getCurrentSessionId: function () {
      return (ee || {}).id
    },
    getCurrentSession: function () {
      return ee
    },
    cloneCurrentSession: function () {
      return _.clone(ee)
    }
  }
}

function ie(e) {
  var t = null;
  switch (e) {
    case J.HALF_SESSION:
      t = function () {
        var e = null,
          t = te().cloneCurrentSession();
        t && (e = {
          header: {
            st: "1"
          },
          analytics: {
            sessions: [t]
          }
        });
        return e
      }();
      break;
    case J.CLOSE_SESSION:
      t = function () {
        var e = null,
          t = {},
          n = te().cloneCurrentSession();
        if (n) {
          var i = m().get(),
            r = T().get();
          Array.isArray(i) && i.length && (n.pages = _.clone(i));
          Array.isArray(r) && r.length && (n.shares = _.clone(r));
          m().clear();
          T().clear();
          t.sessions = [n]
        }
        n = G().getEkvs();
        if (n) {
          t.ekvs = _.clone(n);
          G().clear()
        }(t.sessions || t.ekvs) && (e = {
          analytics: t
        });
        return e
      }();
      break;
    case J.EKV:
      t = function () {
        var e = null,
          t = G().getEkvs();
        if (t) {
          e = {
            analytics: {
              ekvs: _.clone(t)
            }
          };
          G().clear()
        }
        return e
      }()
  }
  return t
}
var re = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
  },
  oe = {
    sdk_type: "sdt",
    access: "ac",
    access_subtype: "acs",
    device_model: "dm",
    language: "lang",
    device_type: "dt",
    device_manufacturer: "dmf",
    device_name: "dn",
    platform_version: "pv",
    id_type: "it",
    font_size_setting: "fss",
    os_version: "ov",
    device_manuid: "did",
    platform_sdk_version: "psv",
    device_brand: "db",
    appkey: "ak",
    _id: "id",
    id_tracking: "itr",
    imprint: "imp",
    sdk_version: "sv",
    resolution: "rl",
    testToken: "ttn",
    theme: "t5",
    benchmark_level: "bml",
    screen_width: "sw",
    screen_height: "sh",
    status_bar_height: "sbh",
    safe_area_top: "sat",
    safe_area_left: "sal",
    safe_area_right: "sar",
    safe_area_bottom: "sab",
    safe_area_height: "sah",
    safe_area_width: "saw",
    pixel_ratio: "pr",
    storage: "s7",
    host: "hs"
  },
  se = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
  };

function ae(e) {
  return {
    h: function (e, t) {
      var n = ue(e, t);
      e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = ue(e.id_tracking, se));
      return n
    }(e.header, oe),
    a: function (e, t) {
      var n = {};
      if (e)
        for (var i in e) e[i] && (n[t[i]] = e[i]);
      return n
    }(e.analytics, re)
  }
}

function ue(e, t) {
  var n, i = {};
  for (n in e) t[n] ? i[t[n]] = e[n] : i[n] = e[n];
  return i
}
var ce = b = N = "";

function fe(e) {
  if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? ye(192 | t >>> 6) + ye(128 | 63 & t) : ye(224 | t >>> 12 & 15) + ye(128 | t >>> 6 & 63) + ye(128 | 63 & t);
  var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
  return ye(240 | t >>> 18 & 7) + ye(128 | t >>> 12 & 63) + ye(128 | t >>> 6 & 63) + ye(128 | 63 & t)
}

function pe(e) {
  var t = [0, 2, 1][e.length % 3],
    e = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
  return [_e.charAt(e >>> 18), _e.charAt(e >>> 12 & 63), 2 <= t ? "=" : _e.charAt(e >>> 6 & 63), 1 <= t ? "=" : _e.charAt(63 & e)].join("")
}

function de(e) {
  return e.replace(me, fe).replace(/[\s\S]{1,3}/g, pe)
}

function he(e) {
  switch (e.length) {
    case 4:
      var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
      return ye(55296 + (t >>> 10)) + ye(56320 + (1023 & t));
    case 3:
      return ye((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
    default:
      return ye((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
  }
}

function le(e) {
  var t = e.length,
    n = t % 4,
    e = (0 < t ? ve[e.charAt(0)] << 18 : 0) | (1 < t ? ve[e.charAt(1)] << 12 : 0) | (2 < t ? ve[e.charAt(2)] << 6 : 0) | (3 < t ? ve[e.charAt(3)] : 0);
  (e = [ye(e >>> 16), ye(e >>> 8 & 255), ye(255 & e)]).length -= [0, 0, 2, 1][n];
  return e.join("")
}

function ge(e) {
  return e.replace(/[\s\S]{1,4}/g, le).replace(Se, he)
}
var _e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ve = function (e) {
    for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
    return t
  }(_e),
  ye = String.fromCharCode,
  me = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  Se = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
  Ie = {
    encode: function (e, t) {
      return t ? de(String(e)).replace(/[+\/]/g, function (e) {
        return "+" == e ? "-" : "_"
      }).replace(/=/g, "") : de(String(e))
    },
    decode: function (e) {
      return ge(String(e).replace(/[-_]/g, function (e) {
        return "-" == e ? "+" : "/"
      }).replace(/[^A-Za-z0-9\+\/]/g, ""))
    }
  };
var Ee = new function () {
  var t = "",
    n = this;
  this.set = function (e) {
    t = e
  };
  this.get = function () {
    return t
  };
  this.getImpObj = function () {
    return P.parse(Ie.decode(t))
  };
  this.getItem = function (e) {
    var t = n.getImpObj();
    return t && t[e] || ""
  };
  this.load = function () {
    t = U().get(h.IMPRINT)
  };
  this.save = function () {
    t && U().set(h.IMPRINT, t)
  }
};

function Oe(n, i, r, e) {
  z.instance().setIdType(y().getIdType());
  z.instance().setIdTracking(y().getIdTracking());
  var t = y().getUserId();
  t && n.analytics && (n.analytics.active_user = {
    puid: t,
    provider: y().getProvider()
  });
  t = _.clone(z.instance().get());
  n.header = _.assign(t, n.header, {
    ts: Date.now(),
    testToken: ce,
    traceId: _.getRandomStr(10) + Date.now() + _.getRandomStr(9)
  });
  var t = ae(n),
    o = P.stringify(t),
    t = {
      url: h.ENDPOINT + h.LOG_URL,
      method: "POST",
      data: Ie.encode(o),
      success: function (e) {
        var t = e.code || e.status || e.statusCode;
        if (200 === t || 413 === t) {
          a().i("数据发送成功: ", n, o);
          ! function (e) {
            if (e) {
              z.instance().setItem(h.IMPRINT, e);
              Ee.set(e);
              Ee.save();
              a().v("imprint: ", Ee.getImpObj());
              Ee.getItem("ttn_invalid") && (ce = "")
            }
          }((e.data || {}).imprint);
          "function" == typeof i && i(e)
        } else {
          a().w("数据发送失败: ", o);
          "function" == typeof r && r()
        }
      },
      fail: function (e) {
        a().w("超时: ", o);
        "function" == typeof r && r()
      },
      complete: function () {
        "function" == typeof e && e()
      }
    };
  f.request(_.assign(t, {
    header: {
      "Content-Type": t = f.getSdkType() + "/json",
      "Msg-Type": t
    }
  }))
}

function Ae(e) {
  var t = e,
    n = [];
  this.enqueue = function (e) {
    "number" == typeof t && this.size() >= t && this.dequeue();
    n.push(e)
  };
  this.dequeue = function () {
    return n.shift()
  };
  this.front = function () {
    return n[0]
  };
  this.isEmpty = function () {
    return 0 === n.length
  };
  this.clear = function () {
    n.length = 0
  };
  this.size = function () {
    return n.length
  };
  this.items = function () {
    return n
  };
  this.print = function () {
    console.log(n.toString())
  }
}
var Ne, Te, we, ke, be = (Ne = null, Te = !1, we = [], ke = new Ae(50), function () {
  return Ne = Ne || new Pe
});

function Re(t) {
  var e = ke.front();
  if (e) Oe(e, function () {
    ke.dequeue();
    Re(t)
  }, function () {
    var e = ke.dequeue();
    e && !e.noCache && we.push(e);
    Re(t)
  });
  else {
    ! function () {
      we.forEach(function (e) {
        ke.enqueue(e)
      });
      we.length = 0
    }();
    t()
  }
}

function De(e) {
  if (y().getId())
    if (Te) a().i("队列正在发送中");
    else {
      Te = !0;
      Re(function () {
        Te = !1;
        "function" == typeof e && e()
      })
    }
  else {
    a().i("获取id标识失败，暂缓发送");
    "function" == typeof e && e()
  }
}

function Pe() {
  this.send = function (e, t, n) {
    e ? this.add(e, t, function () {
      De(n)
    }) : De(n)
  };
  this.add = function (e, t, n) {
    ! function e(t, n, i) {
      if (z.instance().isLoaded()) {
        n = n || {};
        var r = ie(t);
        if (r) {
          var o = z.instance().getRealtimeFields();
          r.header = _.assign({}, r.header, o);
          r.noCache = n.noCache;
          ke.enqueue(r)
        }
        "function" == typeof i && i()
      } else setTimeout(function () {
        e(t, n, i)
      }, 100)
    }(e, t, n)
  };
  this.load = function () {
    var e = U().get(h.REQUESTS);
    e && e.length && e.forEach(function (e) {
      ke.enqueue(e)
    });
    U().remove(h.REQUESTS)
  };
  this.save = function () {
    U().set(h.REQUESTS, _.clone(ke.items()));
    ke.clear()
  }
}
var Ue, Le = (Ue = null, function () {
  return Ue = Ue || new Ce
});

function Ce() {
  this.update = function () {
    f.getUserInfo(function (t) {
      if (t) {
        var e = U().get(h.USER_INFO);
        e && _.deepEqual(t, e) || function (t, n) {
          var e = s().appKey(),
            i = f.getSdkType(),
            r = y().getId(),
            o = y().getIdType();
          if (e && i && r && o) {
            o = {
              ak: s().appKey(),
              sdt: f.getSdkType(),
              uin: t.nickName,
              uia: t.avatar,
              uig: t.gender,
              uit: t.country,
              uip: t.province,
              uic: t.city,
              uil: t.language,
              id: y().getId(),
              it: y().getIdType()
            }, o = JSON.stringify(o);
            o = Ie.encode(o);
            f.request({
              url: h.ENDPOINT + h.USERINFO_URL,
              method: "POST",
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              data: "ui=" + o,
              success: function (e) {
                a().v("用户信息上传成功: ", t);
                n && n(e && e.data && 200 === e.data.code)
              },
              fail: function () {
                a().e("用户信息上传失败: ", t);
                n && n(!1)
              }
            })
          }
        }(t, function (e) {
          e && U().set(h.USER_INFO, t)
        })
      }
    })
  }
}

function Me(e, t) {
  this.id = e;
  this.ts = Date.now();
  var n = typeof t;
  if ("string" == n && t) this[e] = t;
  else if ("object" == n)
    for (var i in t) !{}.hasOwnProperty.call(t, i) || (this[i] = t[i])
}

function Ve() {
  var r = !1,
    n = !1,
    o = 0;
  this.init = function (e) {
    a().v("sdk version: " + h.IMPL_VERSION);
    r ? a().v("Lib重复实例化") : U().load(function () {
      a().v("cache初始化成功: ", U().getAll());
      ! function () {
        y().setUseOpenid && y().setUseOpenid(s().useOpenid());
        y().init(function () {
          z.instance().init();
          a().v("Header初始化成功")
        })
      }();
      r = !0;
      "function" == typeof e && e();
      a().tip("SDK集成成功")
    })
  };
  this.resume = function (e) {
    if (r && !n) {
      a().v("showOptions: ", e);
      var t;
      n = !0;
      s().enableVerify() && e && e.query && (t = e.query._ttn, ce = t || ce);
      this._resume(e)
    }
  };
  this._resume = function (e) {
    be().load();
    var t = te().resume(e),
      e = te().getCurrentSessionId();
    G().setSessionId(e);
    t && be().add(J.HALF_SESSION, {}, function () {
      y().setUseOpenid && y().setUseOpenid(s().useOpenid());
      if (s().useOpenid() && s().autoGetOpenid() && !y().getId()) {
        a().v("get id async");
        ! function t(n, i) {
          if (y().getId() || n <= 0) return;
          y().getOpenIdAsync(s().appKey(), function (e) {
            if (e) {
              a().v("获取id成功");
              be().send()
            } else {
              a().v("获取openid失败,启动重试,剩余可用次数", n - 1);
              setTimeout(function () {
                t(n - 1, i)
              }, i)
            }
          })
        }(10, 3e3)
      } else {
        a().v("session auto send");
        be().send()
      }
    })
  };
  this.pause = function (e) {
    if (r) {
      n = !1;
      o = 0;
      te().pause();
      s().uploadUserInfo() && Le().update();
      be().send(J.CLOSE_SESSION, {}, function () {
        be().save();
        U().save();
        a().v("cache save success");
        "function" == typeof e && e()
      })
    }
  };
  this.setOpenid = function (e) {
    a().v("setOpenId: %s", e);
    y().setOpenid(e);
    be().send()
  };
  this.setUnionid = function (e) {
    a().v("setUnionid: %s", e);
    y().setUnionid(e)
  };
  this.setUserid = function (e, t) {
    a().v("setUserid: %s", e, t);
    y().setUserid(e, t)
  };
  this.setAnonymousid = function (e) {
    a().v("setAnonymousId: %s", e);
    y().setAnonymousid(e);
    be().send()
  };
  this.setAppVersion = function (e) {
    e && "string" != typeof e ? a().w("setAppVersion方法只接受字符串类型参数") : z.instance().setAppVersion(e)
  };
  this.setAlipayUserid = function (e) {
    if (e && "string" != typeof e) a().w("setAlipayUserid方法只接受字符串类型参数");
    else {
      a().v("setAlipayUserid: %s", e);
      y().setAlipayUserid(e)
    }
  };
  this.setDeviceId = function (e) {
    if ("string" == typeof e) {
      y().setDeviceId(e);
      return e
    }
  };
  this.setSuperProperty = function (e) {
    if (e && "string" != typeof e) a().w("超级属性只支持字符串类型");
    else {
      var t = this;
      if (z.instance().getSuperProperty() !== e) {
        z.instance().setSuperProperty(e);
        t.pause(function () {
          t.resume()
        })
      }
    }
  };
  this.trackEvent = function (e, t) {
    if (r) {
      a().v("event: ", e, t);
      if (function (e, t) {
          if (e && "string" == typeof e) {
            var n = ["id", "ts", "du"],
              i = {};
            n.forEach(function (e) {
              i[e] = 1
            });
            if (i[e]) a().e("eventId不能与以下保留字冲突: " + n.join(","));
            else if (e.length > h.MAX_EVENTID_LENGTH) a().e("The maximum length of event id shall not exceed " + h.MAX_EVENTID_LENGTH);
            else {
              if (!t || "object" == typeof t && !Array.isArray(t) || "string" == typeof t) {
                if ("object" == typeof t) {
                  var r, o = 0;
                  for (r in t)
                    if ({}.hasOwnProperty.call(t, r)) {
                      if (r.length > h.MAX_PROPERTY_KEY_LENGTH) {
                        a().e("The maximum length of property key shall not exceed " + h.MAX_PROPERTY_KEY_LENGTH);
                        return
                      }
                      if (o >= h.MAX_PROPERTY_KEYS_COUNT) {
                        a().e("The maximum count of properties shall not exceed " + h.MAX_PROPERTY_KEYS_COUNT);
                        return
                      }
                      if (i[r]) {
                        a().e("属性中的key不能与以下保留字冲突: " + n.join(","));
                        return
                      }
                      o += 1
                    }
                }
                return 1
              }
              a().e("please check trackEvent properties. properties should be string or object(not include Array)")
            }
          } else a().e('please check trackEvent id. id should be "string" and not null')
        }(e, t)) {
        var n = new Me(e, t);
        G().addEvent(n);
        var i = !!ce,
          e = i ? 0 : h.EVENT_SEND_DEFAULT_INTERVAL,
          t = Date.now();
        if (n = t, e = e, "number" != typeof o || "number" != typeof e || (o <= 0 || e < n - o)) {
          o = t;
          be().send(J.EKV, {
            noCache: i
          }, function () {})
        }
      }
    }
  };
  this.trackShare = function (e) {
    if (r) try {
      if (-1 < f.getSdkType().indexOf("game")) {
        e = T().add(e, !0);
        a().v("shareQuery: ", e)
      } else {
        e = T().add(e, !1);
        a().v("sharePath: ", e.path)
      }
    } catch (e) {
      a().v("shareAppMessage: ", e)
    }
    return e
  };
  this.trackPageStart = function (e) {
    r && m().addPageStart(e)
  };
  this.trackPageEnd = function (e) {
    r && m().addPageEnd(e)
  };
  this.onShareAppMessage = function (e) {
    var t = this;
    f.onShareAppMessage(function () {
      return t.trackShare(e())
    })
  };
  this.shareAppMessage = function (e) {
    this.trackShare(e);
    f.shareAppMessage(e)
  }
}
var xe = [];

function je() {}
je.prototype = {
  createMethod: function (e, t, n) {
    try {
      e[t] = n && n[t] ? function () {
        return n[t].apply(n, arguments)
      } : function () {
        xe.push([t, [].slice.call(arguments)])
      }
    } catch (e) {
      a().v("create method errror: ", e)
    }
  },
  installApi: function (e, t) {
    try {
      for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","), i = 0, r = n.length; i < r; i++) this.createMethod(e, n[i], t);
      if (t)
        for (i = 0, r = xe.length; i < r; i++) {
          var o = xe[i];
          try {
            t[o[0]].apply(t, o[1])
          } catch (e) {
            a().v("impl[v[0]].apply error: ", o[0], e)
          }
        }
    } catch (e) {
      a().v("install api errror: ", e)
    }
  }
};
var Ke = [h.ENDPOINT, h.ENDPOINTB];

function Ge(t, e) {
  var n, i;
  0 === t || 1 === t && e ? n = h.ENDPOINT : 2 === t && e ? n = h.ENDPOINTB : e && (n = Ke[t]);
  if (t >= Ke.length || e) {
    e && (i = n, h.ENDPOINT = i);
    e && a().v("命中可用服务", n);
    e || a().tip_w("未命中可用服务")
  } else f.request({
    url: h.ENDPOINT + "/uminiprogram_logs/ckdh",
    success: function (e) {
      200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code ? Ge(t + 1, !0) : Ge(t + 1, !1)
    },
    fail: function () {
      Ge(t + 1, !1)
    }
  })
}({
  init: function (e) {
    h.ENDPOINTB && setTimeout(function () {
      Ge(0, !1)
    }, e)
  }
}).init(3e3);
var Fe = new je,
  He = {
    _inited: !1,
    _log: a(),
    preinit: function (e) {
      if (e && "object" == typeof e)
        for (var t in e) h[t] = e[t];
      return h
    },
    use: function (e, t) {
      e && _.isFunction(e.install) ? e.install(He, t) : _.isFunction(e) && e(He, t);
      return He
    },
    messager: c,
    init: function (e) {
      if (this._inited) a().v("已经实例过，请避免重复初始化");
      else if (e)
        if (e.appKey) {
          "boolean" != typeof e.useOpenid && (e.useOpenid = !0);
          s().set(e);
          a().setDebug(e.debug);
          this._inited = !0;
          var t = this;
          c.emit(c.messageType.CONFIG_LOADED, e);
          try {
            var n = new Ve;
            a().v("成功创建Lib对象");
            n.init(function () {
              a().v("Lib对象初始化成功");
              Fe.installApi(t, n);
              a().v("安装Lib接口成功");
              c.emit(c.messageType.UMA_LIB_INITED, e)
            })
          } catch (e) {
            a().w("创建Lib对象异常: " + e)
          }
        } else a().err("请确保传入正确的appkey");
      else a().err("请正确设置相关信息！")
    }
  };
try {
  Fe.installApi(He, null)
} catch (e) {
  a().w("uma赋值异常: ", e)
}
var qe = {
    FETCH_URL: "https://ucc.umeng.com/v1/mini/fetch",
    ABLOG_URL: "https://pslog.umeng.com/mini_ablog",
    SDK_VERSION: "2.6.3",
    MOBILE_NETWORK_NONE: "none",
    MOBILE_NETWORK_2G: "2g",
    MOBILE_NETWORK_3G: "3g",
    MOBILE_NETWORK_4G: "4g",
    MOBILE_NETWORK_5G: "5g",
    MOBILE_NETWORK_WIFI: "wifi",
    IMPRINT: "imprint"
  },
  Be = {},
  Ye = Array.isArray;
Be.isArray = Ye || function (e) {
  return "[object Array]" === toString.call(e)
};
Be.isObject = function (e) {
  return e === Object(e) && !Be.isArray(e)
};
Be.isEmptyObject = function (e) {
  if (Be.isObject(e)) {
    for (var t in e)
      if (hasOwnProperty.call(e, t)) return !1;
    return !0
  }
  return !1
};
Be.isUndefined = function (e) {
  return void 0 === e
};
Be.isString = function (e) {
  return "[object String]" === toString.call(e)
};
Be.isDate = function (e) {
  return "[object Date]" === toString.call(e)
};
Be.isNumber = function (e) {
  return "[object Number]" === toString.call(e)
};
Be.each = function (e, t, n) {
  if (null != e) {
    var i = {},
      r = Array.prototype.forEach;
    if (r && e.forEach === r) e.forEach(t, n);
    else if (e.length === +e.length) {
      for (var o = 0, s = e.length; o < s; o++)
        if (o in e && t.call(n, e[o], o, e) === i) return
    } else
      for (var a in e)
        if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return
  }
};
Be.buildQuery = function (e, t) {
  var n, i, r = [];
  void 0 === t && (t = "&");
  Be.each(e, function (e, t) {
    n = encodeURIComponent(e.toString());
    i = encodeURIComponent(t);
    r[r.length] = i + "=" + n
  });
  return r.join(t)
};
Be.JSONDecode = function (e) {
  if (e) {
    try {
      return JSON.parse(e)
    } catch (e) {
      console.error("JSONDecode error", e)
    }
    return null
  }
};
Be.JSONEncode = function (e) {
  try {
    return JSON.stringify(e)
  } catch (e) {
    console.error("JSONEncode error", e)
  }
};
var We = Object.create(null);

function Je(n) {
  a().v("开始构建 fetch body");
  f.getSystemInfo(function (t) {
    f.getNetworkInfo(function (e) {
      e = (e = (e = e || {}).networkType) === qe.MOBILE_NETWORK_NONE ? "unknown" : e.toUpperCase();
      We.access = e;
      ! function (e, t) {
        var n = e.brand || "";
        We.deviceType = "Phone";
        We.sdkVersion = qe.SDK_VERSION;
        We.appkey = s().appKey();
        We.sdkType = f.getSdkType();
        We.umid = y().getId();
        if (e) {
          We.language = e.language || "";
          We.os = e.OS;
          We.osVersion = e.OSVersion;
          We.deviceName = e.deviceName;
          We.platformVersion = e.platformVersion;
          We.platformSdkVersion = e.platformSDKVersion;
          We.deviceBrand = n;
          e = e.resolution.split("*");
          if (Be.isArray(e)) {
            We.resolutionHeight = Number(e[0]);
            We.resolutionWidth = Number(e[1])
          }
        }! function (e) {
          if (e) {
            We.installTime = e.install_datetime && Date.parse(e.install_datetime);
            We.scene = e.install_scene;
            We.channel = e.install_channel;
            We.campaign = e.install_campaign
          }
        }(Ee.getImpObj());
        t && t(We)
      }(t, n)
    })
  })
}
var Xe = Object.create(null),
  ze = null,
  Qe = !1,
  Ze = {
    minFetchIntervalSeconds: 43200
  };

function $e(e) {
  e && Be.each(e, function (e) {
    Xe[e.k] = e
  })
}

function et() {
  var t = this;
  this.STORAGE_NAME = null;
  c.once(c.messageType.CONFIG_LOADED, function (e) {
    a().v("云配初始化开始...");
    t.init(e)
  })
}
var tt = {
    install: function (e, t) {
      e.rc || (e.rc = new et);
      e.messager.once(e.messager.messageType.CONFIG_LOADED, function () {
        e._log.v("plugin rc installed")
      });
      return e.rc
    }
  },
  nt = !(et.prototype = {
    setDefaultValues: function (e) {
      Qe && Be.isObject(e) && Be.each(e, function (e, t) {
        Xe[t] && Xe[t].v || (Xe[t] = {
          v: e
        })
      })
    },
    getValue: function (t) {
      a().v("从配置项中读取 value, 当前配置为: ", Xe);
      a().v("待读取的 key : ", t);
      try {
        if (!Qe) return;
        var e = Xe[t] || {};
        a().v("读取相应配置ing..., 结果为: ", e);
        if (Be.isNumber(e.e) && Be.isNumber(e.g)) {
          a().v("读取到相应配置, 开始数据上报...");
          ! function (e) {
            var t = {
              appkey: s().appKey(),
              sdkType: f.getSdkType(),
              expId: e && e.e,
              groupId: e && e.g,
              clientTs: Date.now(),
              key: e && e.k,
              value: e && e.v,
              umid: y().getId()
            };
            try {
              f.request({
                url: qe.ABLOG_URL,
                method: "POST",
                data: [t],
                success: function (e) {
                  e && 200 === e.statusCode ? a().v("上传数据成功", t) : a().w("ablog 请求成功, 返回结果异常 ", e)
                },
                fail: function (e) {
                  a().w("ablog 请求数据错误 ", t, e)
                }
              })
            } catch (e) {
              a().w("urequest 调用错误", e)
            }
          }(e)
        }
        return e.v
      } catch (e) {
        a().w("getValue error, key: ", t)
      }
    },
    active: function (e) {
      try {
        if (!Qe) return;
        var t, n;
        e && e.params && (t = e.params);
        e && e.callback && (n = e.callback);
        a().v("激活配置项: ", t);
        if (t) {
          a().v("本地已缓存的配置项: ", Xe);
          $e(t);
          a().v("合并后的配置项: ", Xe);
          n && n(Xe);
          a().v("active 结束")
        } else {
          a().v("配置项为空!! 读取本地配置...");
          f.getStorage(this.STORAGE_NAME, function (e) {
            if (e) {
              $e((e = Be.JSONDecode(e) || {}).params);
              a().v("当前本地配置项为: ", Xe);
              n && n(Xe);
              a().v("active 结束")
            } else a().v("当前本地配置项为空, 退出激活")
          })
        }
      } catch (e) {
        a().w("SDK active 错误", e)
      }
    },
    init: function (e) {
      if (e.appKey) {
        ze = e.appKey;
        this.STORAGE_NAME = "um_remote_config_{{" + ze + "}}"
      }
      if (ze)
        if (Qe) a().w("SDK 已经初始化, 请避免重复初始化");
        else {
          Qe = !0;
          this.setOptions(e);
          this.active()
        }
      else a().err("请检查您的小程序 appKey, appKey 不能为空")
    },
    setOptions: function (e) {
      if (Be.isObject(e)) {
        e = e.minFetchIntervalSeconds;
        Be.isNumber(e) && (Ze.minFetchIntervalSeconds = Math.max(e, 5))
      }
    },
    fetch: function (e) {
      if (Qe && this.STORAGE_NAME) {
        var i, r;
        e && e.active && (i = e.active);
        e && e.callback && (r = e.callback);
        var o = this;
        f.getStorage(this.STORAGE_NAME, function (e) {
          a().v("开始读缓存 data is ", e);
          if ((e = Be.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * Ze.minFetchIntervalSeconds) {
            a().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch");
            r && r(e.params)
          } else Je(function (t) {
            a().v("缓存数据不存在, 构建 fetch body :", t);
            try {
              f.request({
                url: qe.FETCH_URL,
                method: "POST",
                data: t,
                success: function (e) {
                  if (e && 200 === e.statusCode && e.data && e.data.cc) {
                    a().v("fetch 请求成功, 响应数据: ", e.data);
                    var t = Object.create(null);
                    Be.each(e.data.cc, function (e) {
                      t[e.k] = e
                    });
                    var n = {
                      ts: Date.now(),
                      params: t
                    };
                    a().v("开始缓存 fetch 请求的云配置结果...");
                    f.setStorage(o.STORAGE_NAME, Be.JSONEncode(n), function (e) {
                      a().v("缓存云配置成功, 缓存数据为: ", n);
                      a().v("缓存云配置成功, 成功消息为: ", e);
                      a().v("云配拉取数据是否自动激活: ", i);
                      if (e && i) {
                        a().v("激活云配置...");
                        o.active({
                          params: t,
                          callback: r
                        })
                      }
                    })
                  } else {
                    a().w("fetch 请求成功,返回结果异常 ", e.data);
                    r && r()
                  }
                },
                fail: function (e) {
                  a().w("fetch请求数据错误 ", t, e);
                  r && r()
                }
              })
            } catch (e) {
              a().w("urequest调用错误", e)
            }
          })
        })
      }
    }
  }),
  Ye = {
    install: function (t, e) {
      t.wxpluginwraper || (t.wxpluginwraper = function (e) {
        if (!nt) {
          e.onAppShow && e.onAppShow(function (e) {
            t.resume(e)
          });
          e.onAppHide && e.onAppHide(function (e) {
            t.pause(e)
          });
          nt = !0
        }
      })
    }
  },
  it = "",
  rt = {};

function ot(e) {
  e && (it = e)
}

function st() {
  return function (e, t) {
    if (!e) return "";
    var n, i = [];
    for (n in t) "_um_ssrc" !== n && "_um_sts" !== n && i.push(n + "=" + t[n]);
    var r = i.join("&");
    return r ? e + "?" + r : e
  }(it, rt[it])
}

function at(e, n) {
  if (e.onShareAppMessage) {
    var i = e.onShareAppMessage;
    e.onShareAppMessage = function (e) {
      var t = i.call(this, e) || {},
        e = st();
      !t.path && e && (t.path = e);
      e = n.trackShare.call(this, t);
      return void 0 === e ? t : e
    }
  }
}

function ut(e, t, n) {
  var i = e[t];
  e[t] = function (e) {
    n.call(this, e);
    i && i.call(this, e)
  }
}

function ct(e) {
  try {
    He.resume(e, !0)
  } catch (e) {
    a().v("onAppShow: ", e)
  }
}

function ft() {
  try {
    He.pause()
  } catch (e) {
    a().v("onAppHide: ", e)
  }
}

function pt() {
  try {
    ot(this.route);
    He.trackPageStart(this.route)
  } catch (e) {
    a().v("onPageShow: ", e)
  }
}

function dt(e) {
  try {
    ot(this.route);
    e && (t = this.route, n = e, t && (rt[t] = n));
    a().v("Page onLoad: ", this.route, e)
  } catch (e) {
    a().v("onPageLoad: ", e)
  }
  var t, n
}

function ht() {
  try {
    He.trackPageEnd(this.route)
  } catch (e) {
    a().v("onPageHide: ", e)
  }
}
try {
  var lt = App;
  App = function (e) {
    ut(e, "onLaunch", function () {
      ! function (e) {
        try {
          He.init(e)
        } catch (e) {
          a().v("onAppLaunch: ", e)
        }
      }(e.umengConfig)
    });
    ut(e, "onShow", ct);
    ut(e, "onHide", ft);
    lt(e)
  }
} catch (e) {
  a().w("App重写异常")
}
try {
  var gt = Page;
  Page = function (e) {
    ut(e, "onShow", pt);
    ut(e, "onHide", ht);
    ut(e, "onUnload", ht);
    ut(e, "onLoad", dt);
    at(e, He);
    gt(e)
  }
} catch (e) {
  a().w("Page重写异常")
}
try {
  var _t = Component;
  Component = function (t) {
    try {
      t.methods = t.methods || {};
      var e = t.methods;
      ut(e, "onShow", pt);
      ut(e, "onHide", ht);
      ut(e, "onUnload", ht);
      ut(e, "onLoad", dt);
      at(e, He);
      _t(t)
    } catch (e) {
      _t(t)
    }
  }
} catch (e) {
  a().w("Component重写异常")
}
var vt = He.init;
He.init = function (e) {
  if (e && e.useOpenid) {
    a().tip_w(a().repeat("!"));
    a().tip_w("openid已开启，请确保使用setOpenid设置openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取");
    a().tip_w(a().repeat("!"))
  }
  vt.call(He, e)
};
He.use(tt);
He.use(Ye);
wx.uma = He;
module.exports = He;
