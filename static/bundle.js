(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z\"/>\n</svg>";

},{}],2:[function(require,module,exports){
module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 288 272.5\" enable-background=\"new 0 0 288 272.5\" xml:space=\"preserve\">\n<g opacity=\"0.3\">\n\t<path fill=\"#FFFFFF\" d=\"M154.6,272.5H16.2c-8.9,0-16.2-7.3-16.2-16.2V139.1c0-8.9,7.3-16.2,16.2-16.2h123.2v2H16.2c-7.8,0-14.2,6.4-14.2,14.2v117.2c0,7.8,6.4,14.2,14.2,14.2h138.4V272.5z\"/>\n\t<path fill=\"#FFFFFF\" d=\"M16.6,223.9h-2.4c-1.7,0-3.2-1.4-3.2-3.2v-46.1c0-1.7,1.4-3.2,3.2-3.2h2.4c1.7,0,3.2,1.4,3.2,3.2v46.1C19.7,222.5,18.3,223.9,16.6,223.9z M14.2,173.6c-0.6,0-1.2,0.5-1.2,1.2v46.1c0,0.6,0.5,1.2,1.2,1.2h2.4c0.6,0,1.2-0.5,1.2-1.2v-46.1c0-0.6-0.5-1.2-1.2-1.2H14.2z\"/>\n</g>\n<g>\n\t<path fill=\"#FFFFFF\" d=\"M277.2,272.5h-128c-6,0-10.8-4.9-10.8-10.8V10.8c0-6,4.9-10.8,10.8-10.8h128c6,0,10.8,4.9,10.8,10.8v250.9C288,267.7,283.2,272.5,277.2,272.5z M149.2,2c-4.9,0-8.8,4-8.8,8.8v250.9c0,4.9,4,8.8,8.8,8.8h128c4.9,0,8.8-4,8.8-8.8V10.8c0-4.9-4-8.8-8.8-8.8H149.2z\"/>\n\t<path fill=\"#FFFFFF\" d=\"M227,259.9h-27.6c-2.9,0-5.2-2.4-5.2-5.2V250c0-2.9,2.4-5.2,5.2-5.2H227c2.9,0,5.2,2.4,5.2,5.2v4.6C232.2,257.6,229.9,259.9,227,259.9z M199.4,246.8c-1.8,0-3.2,1.5-3.2,3.2v4.6c0,1.8,1.5,3.2,3.2,3.2H227c1.8,0,3.2-1.5,3.2-3.2V250c0-1.8-1.5-3.2-3.2-3.2H199.4z\"/>\n\t<path fill=\"#FFFFFF\" d=\"M236.2,19.7h-46.1c-1.7,0-3.2-1.4-3.2-3.2v-2.4c0-1.7,1.4-3.2,3.2-3.2h46.1c1.7,0,3.2,1.4,3.2,3.2v2.4C239.4,18.3,238,19.7,236.2,19.7z M190.2,13.1c-0.6,0-1.2,0.5-1.2,1.2v2.4c0,0.6,0.5,1.2,1.2,1.2h46.1c0.6,0,1.2-0.5,1.2-1.2v-2.4c0-0.6-0.5-1.2-1.2-1.2H190.2z\"/>\n</g>\n<path fill=\"#FFFFFF\" d=\"M50.8,84.8h-2c0-24.4,19.8-44.2,44.2-44.2v2C69.8,42.6,50.8,61.5,50.8,84.8z\"/>\n<polygon fill=\"#FFFFFF\" points=\"87.6,49.3 86.2,47.8 92.5,41.6 86.2,35.3 87.6,33.9 95.3,41.6 \"/>\n</svg>";

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAssets = exports.setProgress = exports.setReady = undefined;

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setReady = exports.setReady = function setReady(ready) {
  return {
    type: _keys2.default.SET_READY,
    ready: ready
  };
};

var setProgress = exports.setProgress = function setProgress(progress) {
  return {
    type: _keys2.default.SET_PROGRESS,
    progress: progress
  };
};

var setAssets = exports.setAssets = function setAssets(assets) {
  return {
    type: _keys2.default.SET_ASSETS,
    assets: assets
  };
};

},{"./keys":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // App
  SET_READY: 'SET_READY',
  SET_PROGRESS: 'SET_PROGRESS',
  SET_ASSETS: 'SET_ASSETS'
};

},{}],5:[function(require,module,exports){
/**
 * This component is based on 'Preloader' npm module
 * Refer https://www.npmjs.com/package/preloader for more information
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactF = require('react-f1');

var _reactF2 = _interopRequireDefault(_reactF);

var _states = require('./states');

var _states2 = _interopRequireDefault(_states);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _preloader = require('preloader');

var _preloader2 = _interopRequireDefault(_preloader);

var _reactSvgInline = require('react-svg-inline');

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _loader = require('../../../raw-assets/svg/loader.svg');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_React$Component) {
  _inherits(Preloader, _React$Component);

  function Preloader(props) {
    _classCallCheck(this, Preloader);

    var _this = _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).call(this, props));

    _this.onProgress = _this.onProgress.bind(_this);
    _this.setDone = _this.setDone.bind(_this);
    _this.state = {
      state: 'out'
    };
    return _this;
  }

  _createClass(Preloader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setAssets([].concat(_toConsumableArray(this.props.assets)));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      Promise.all([this.setTimer(), this.setLoader()]).then(this.setDone);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      this.animateIn(done);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      this.animateIn(done);
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      this.animateOut(done);
    }
  }, {
    key: 'animateIn',
    value: function animateIn(done) {
      this.setState({
        state: 'idle',
        onComplete: done
      });
    }
  }, {
    key: 'animateOut',
    value: function animateOut(done) {
      this.setState({
        state: 'out',
        onComplete: done
      });
    }
  }, {
    key: 'setTimer',
    value: function setTimer() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
          //console.log('Preloader: min time is up')
        }, _this2.props.minDisplayTime);
      });
    }
  }, {
    key: 'setLoader',
    value: function setLoader() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.loader = (0, _preloader2.default)(_this3.props.options);
        _this3.props.assets.forEach(function (file) {
          return _this3.add(file);
        });
        _this3.loader.on('progress', _this3.onProgress);
        _this3.loader.on('complete', function () {
          return _this3.onComplete(resolve);
        });
        _this3.load();
      });
    }

    /**
     * Generic asset loader function - determines loader to be used based on file-extension
     * @param url (String) - URL of asset
     * @param options (Object) - Custom options to override the global options created at instantiation
     */

  }, {
    key: 'add',
    value: function add(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.loader.add(url, options);
    }

    /**
     * Retrieve loaded asset from loader
     * @param url (String) - URL of asset
     * @returns {*} - Asset instance
     */

  }, {
    key: 'get',
    value: function get(url) {
      return this.loader.get(url);
    }

    /**
     * Begin loading process
     */

  }, {
    key: 'load',
    value: function load() {
      this.loader.load();
    }

    /**
     * Stop loading process
     */

  }, {
    key: 'stopLoad',
    value: function stopLoad() {
      this.loader.stopLoad();
    }
  }, {
    key: 'onProgress',
    value: function onProgress(val) {
      this.props.setProgress(val);
      //console.log('Preloader progress:', val);
    }
  }, {
    key: 'onComplete',
    value: function onComplete(done) {
      this.props.setProgress(1);
      done();
      //console.log('Preloader: assets are loaded');
    }
  }, {
    key: 'setDone',
    value: function setDone() {
      this.props.setReady(true);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = Object.assign({}, this.props.style);

      return _react2.default.createElement(
        _reactF2.default,
        {
          id: 'preloader',
          'data-f1': 'container',
          style: style,
          go: this.state.state,
          onComplete: this.state.onComplete,
          states: (0, _states2.default)(this.props),
          transitions: (0, _transitions2.default)(this.props)
        },
        _react2.default.createElement(
          'div',
          { className: 'loader-icon' },
          _react2.default.createElement(_reactSvgInline2.default, { svg: _loader2.default })
        )
      );
    }
  }]);

  return Preloader;
}(_react2.default.Component);

Preloader.propTypes = {
  assets: _react2.default.PropTypes.array.isRequired,
  setProgress: _react2.default.PropTypes.func,
  setReady: _react2.default.PropTypes.func.isRequired,
  setAssets: _react2.default.PropTypes.func,
  windowWidth: _react2.default.PropTypes.number,
  windowHeight: _react2.default.PropTypes.number,
  style: _react2.default.PropTypes.object,
  minDisplayTime: _react2.default.PropTypes.number,
  options: _react2.default.PropTypes.object
};

Preloader.defaultProps = {
  setProgress: function setProgress(f) {
    return f;
  },
  setAssets: function setAssets(f) {
    return f;
  },
  assets: [],
  style: {},
  minDisplayTime: 1500, // in milliseconds
  options: {
    xhrImages: false,
    loadFullAudio: false,
    loadFullVideo: false,
    onProgress: function onProgress(f) {
      return f;
    },
    onComplete: function onComplete(f) {
      return f;
    }
  }
};

exports.default = Preloader;

},{"../../../raw-assets/svg/loader.svg":1,"./states":6,"./transitions":7,"preloader":"preloader","react":"react","react-f1":"react-f1","react-svg-inline":"react-svg-inline"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return {
    out: {
      container: {
        style: {
          opacity: 0
        }
      }
    },
    idle: {
      container: {
        style: {
          opacity: 1
        }
      }
    }
  };
};

;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return [{ from: 'out', to: 'idle', bi: true, animation: { duration: 0.8 } }];
};

;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSvgInline = require('react-svg-inline');

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _rotate = require('../../../raw-assets/svg/rotate.svg');

var _rotate2 = _interopRequireDefault(_rotate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RotateScreen = (_temp = _class = function (_React$Component) {
  _inherits(RotateScreen, _React$Component);

  function RotateScreen(props) {
    _classCallCheck(this, RotateScreen);

    return _possibleConstructorReturn(this, (RotateScreen.__proto__ || Object.getPrototypeOf(RotateScreen)).call(this, props));
  }

  _createClass(RotateScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {}
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.width !== this.props.width;
    }
  }, {
    key: 'render',
    value: function render() {
      var isLandscape = this.props.width > this.props.height;
      var style = {
        visibility: isLandscape ? 'visible' : 'hidden'
      };

      return _react2.default.createElement(
        'div',
        { id: 'rotate', style: style },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'rotate-icon' },
            _react2.default.createElement(_reactSvgInline2.default, { svg: _rotate2.default })
          ),
          _react2.default.createElement(
            'p',
            null,
            'Please rotate your device',
            _react2.default.createElement('br', null),
            'into portrait mode.'
          )
        )
      );
    }
  }]);

  return RotateScreen;
}(_react2.default.Component), _class.propTypes = {}, _temp);
exports.default = RotateScreen;

},{"../../../raw-assets/svg/rotate.svg":2,"react":"react","react-svg-inline":"react-svg-inline"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);
  if ("development" === 'development') window.Perf = _reactAddonsPerf2.default;
  document.body.className = (0, _classnames2.default)(document.body.className, _detect2.default.classes);

  (0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: history },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _App2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Landing2.default })
      )
    )
  ), container);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPerf = require('react-addons-perf');

var _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _detect = require('../util/detect');

var _detect2 = _interopRequireDefault(_detect);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _App = require('../sections/App');

var _App2 = _interopRequireDefault(_App);

var _Landing = require('../sections/Landing/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, _store2.default);

},{"../sections/App":13,"../sections/Landing/Landing":14,"../store":17,"../util/detect":18,"classnames":"classnames","react":"react","react-addons-perf":"react-addons-perf","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],10:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _framework = require('./framework');

var _framework2 = _interopRequireDefault(_framework);

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ("development" === 'development') require('./util/stats')();

(0, _domready2.default)(_framework2.default);

},{"./framework":9,"./util/stats":21,"babel-polyfill":"babel-polyfill","domready":"domready"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assets = exports.ready = exports.progress = undefined;

var _keys = require('../actions/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var progress = exports.progress = function progress() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments[1];

  switch (action.type) {
    case _keys2.default.SET_PROGRESS:
      return action.progress;
    default:
      return state;
  }
};

var ready = exports.ready = function ready() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _keys2.default.SET_READY:
      return action.ready;
    default:
      return state;
  }
};

var list = [];
var assets = exports.assets = function assets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : list;
  var action = arguments[1];

  switch (action.type) {
    case _keys2.default.SET_ASSETS:
      return action.assets;
    default:
      return state;
  }
};

},{"../actions/keys":4}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preloader = require('../../components/Preloader/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

var _Rotate = require('../../components/Rotate/Rotate');

var _Rotate2 = _interopRequireDefault(_Rotate);

var _reactTransitionGroupPlus = require('react-transition-group-plus');

var _reactTransitionGroupPlus2 = _interopRequireDefault(_reactTransitionGroupPlus);

var _detect = require('../../util/detect');

var _detect2 = _interopRequireDefault(_detect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onResize = _this.onResize.bind(_this);
    _this.state = {
      width: 960,
      height: 570
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onResize',
    value: function onResize() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.props.ready ? _react2.default.cloneElement(this.props.children, {
        key: this.props.section,
        width: this.state.width,
        height: this.state.height
      }) : _react2.default.createElement(_Preloader2.default, {
        assets: this.props.assets,
        setProgress: this.props.onProgress,
        setReady: this.props.onReady,
        setAssets: this.props.onSetAssets,
        windowWidth: this.state.width,
        windowHeight: this.state.height
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'app' },
        _react2.default.createElement(
          _reactTransitionGroupPlus2.default,
          { id: 'content', component: 'div', transitionMode: 'out-in' },
          this.getContent()
        ),
        _detect2.default.isPhone ? _react2.default.createElement(_Rotate2.default, { width: this.state.width, height: this.state.height }) : undefined
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.defaultProps = {
  assets: [],
  progress: 0,
  ready: false
};

exports.default = App;

},{"../../components/Preloader/Preloader":5,"../../components/Rotate/Rotate":8,"../../util/detect":18,"react":"react","react-transition-group-plus":"react-transition-group-plus"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _App2 = require('./App');

var _App3 = _interopRequireDefault(_App2);

var _app = require('../../actions/app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var section = ownProps.location.pathname.split('/').filter(Boolean)[0] || 'landing';
  return {
    progress: state.progress,
    ready: state.ready,
    assets: state.assets,
    section: section
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProgress: function onProgress(val) {
      return dispatch((0, _app.setProgress)(val));
    },
    onReady: function onReady(val) {
      return dispatch((0, _app.setReady)(val));
    },
    onSetAssets: function onSetAssets(val) {
      return dispatch((0, _app.setAssets)(val));
    }
  };
};

var _default = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, undefined, { withRef: true }), _dec(_class = function (_App) {
  _inherits(_default, _App);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.displayName = "App";
    return _this;
  }

  return _default;
}(_App3.default)) || _class);

exports.default = _default;

},{"../../actions/app":3,"./App":12,"react":"react","react-redux":"react-redux"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactF = require('react-f1');

var _reactF2 = _interopRequireDefault(_reactF);

var _states = require('./states');

var _states2 = _interopRequireDefault(_states);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing(props) {
    _classCallCheck(this, Landing);

    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

    _this.state = {
      state: 'out'
    };
    return _this;
  }

  _createClass(Landing, [{
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      this.setState({
        state: 'idle',
        onComplete: done
      });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      this.setState({
        state: 'out',
        onComplete: done
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = { width: this.props.width, height: this.props.height };
      return _react2.default.createElement(_reactF2.default, {
        go: this.state.state,
        onComplete: this.state.onComplete,
        states: (0, _states2.default)(this.props),
        transitions: (0, _transitions2.default)(this.props),
        style: style,
        id: 'Landing',
        'data-f1': 'container'
      });
    }
  }]);

  return Landing;
}(_react2.default.Component);

Landing.defaultProps = {
  width: 960,
  height: 570
};

exports.default = Landing;

},{"./states":15,"./transitions":16,"react":"react","react-f1":"react-f1"}],15:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return [{ from: 'out', to: 'idle', bi: true, animation: { duration: 1 } }];
};

;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _app = require('../reducers/app');

var appReducers = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)(_extends({}, appReducers, {
  routing: _reactRouterRedux.routerReducer
}));

exports.default = (0, _redux.createStore)(reducer, "development" === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(_reduxThunk2.default));

},{"../reducers/app":11,"react-router-redux":"react-router-redux","redux":"redux","redux-thunk":"redux-thunk"}],18:[function(require,module,exports){
'use strict';

var MobileDetect = require('mobile-detect');
var ua = navigator.userAgent;
var md = new MobileDetect(ua);
var utilOS = require('./util-os');
var utilBrowser = require('./util-browser');
var env = "development" || 'development';

var checkDevice = function checkDevice() {
  var device = 'desktop';
  if (md.mobile() && md.phone()) {
    device = 'phone';
  } else if (md.mobile() && md.tablet()) {
    device = 'tablet';
  }
  return device;
};

var checkVendor = function checkVendor() {
  return navigator.vendor ? navigator.vendor.toLowerCase() : "";
};

var checkBrowser = function checkBrowser() {
  var browser = 'unknown';
  var uaLower = ua.toLowerCase();
  var msie = uaLower.indexOf('msie') >= 0;
  var trident = uaLower.indexOf('trident/') >= 0;

  if (msie || trident) {
    browser = 'ie';
  } else if (uaLower.indexOf('firefox') >= 0) {
    browser = 'firefox';
  } else if (uaLower.indexOf("safari") >= 0 && checkVendor().indexOf("apple") >= 0 || env.indexOf('dev') >= 0 && uaLower.indexOf("iphone") >= 0 && uaLower.indexOf("chrome") < 0) {
    browser = 'safari';
  } else if (uaLower.indexOf("chrome") >= 0 && checkVendor().indexOf("google") >= 0) {
    browser = 'chrome';
  }
  return browser;
};

var checkDevicePixelRatio = function checkDevicePixelRatio() {
  var pxlRatio = window.devicePixelRatio;
  if (utilOS.os() === 'iOS' && window.innerWidth >= 375 && window.devicePixelRatio < 3) pxlRatio = 3;
  return pxlRatio;
};

var checkManufacturer = function checkManufacturer() {
  var man = 'unknown';
  if (md.phone()) {
    man = md.phone();
  } else if (md.tablet()) {
    man = md.tablet();
  }
  return man.toLowerCase();
};

var getClasses = function getClasses() {
  var classes = [checkDevice(), 'x' + checkDevicePixelRatio(), checkBrowser(), utilBrowser.checkVersion(), utilOS.os().replace(/\s/g, '_').toLocaleLowerCase()];
  if (md.mobile()) classes.push(checkManufacturer());
  return classes.filter(function (cur) {
    return !!cur;
  });
};

module.exports = {
  device: checkDevice(),
  vendor: checkVendor(),
  os: utilOS.os(),
  osVersion: utilOS.osVersion(),
  browser: checkBrowser(),
  browserVersion: utilBrowser.checkVersion(),
  manufacturer: checkManufacturer(),
  devicePixelRatio: checkDevicePixelRatio(),
  classes: getClasses(),
  isMobile: md.mobile() ? true : false,
  isPhone: md.phone() ? true : false,
  isTablet: md.tablet() ? true : false,
  isDesktop: md.phone() || md.tablet() ? false : true,
  isChrome: checkBrowser().indexOf("chrome") >= 0 && checkVendor().indexOf("google") >= 0,
  isIE: !!(ua.toLowerCase().indexOf('msie') >= 0 || ua.toLowerCase().indexOf('trident/') >= 0),
  isEdge: ua.toLowerCase().indexOf('edge') >= 0,
  isFirefox: checkBrowser().indexOf('firefox') >= 0,
  isSafari: checkBrowser().indexOf("safari") >= 0 && checkVendor().indexOf("apple") >= 0,
  md: md,
  get orientation() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var aspectRatio = w / h;
    if (aspectRatio < 1) {
      return 'portrait';
    } else {
      return 'landscape';
    }
  }
};

},{"./util-browser":19,"./util-os":20,"mobile-detect":"mobile-detect"}],19:[function(require,module,exports){
'use strict';

var ua = navigator.userAgent.toLowerCase();
var appVersion = navigator.appVersion.toLowerCase();
var vendor = navigator.vendor ? navigator.vendor.toLowerCase() : "";

/**
 * This function will return whether this UtilBrowser we're running on is Internet Explorer.
 *
 * @method checkIE
 * @return {Boolean} If this function returns true we're running on Internet Explorer, false if not.
 */
module.exports.checkIE = function () {
  var msie = ua.indexOf('msie') >= 0;
  var trident = ua.indexOf('trident/') >= 0;
  return !!(msie || trident);
};

/**
 * This function will return whether this UtilBrowser we're running on is Internet Explorer.
 *
 * @method checkIE
 * @return {Boolean} If this function returns true we're running on Internet Explorer, false if not.
 */
module.exports.checkFirefox = function () {
  return ua.indexOf('firefox') >= 0;
};

/**
 * This function will return whether this UtilBrowser we're running on is Safari.
 *
 * @method checkSafari
 * @return {Boolean} If this function returns true we're running on Safari, false if not.
 */
module.exports.checkSafari = function () {
  return ua.indexOf("safari") >= 0 && vendor.indexOf("apple") >= 0;
};

/**
 * This function will return whether this UtilBrowser we're running on is Chrome.
 *
 * @method checkChrome
 * @return {Boolean} If this function returns true we're running on Chrome, false if not.
 */
module.exports.checkChrome = function () {
  return ua.indexOf("chrome") >= 0 && vendor.indexOf("google") >= 0;
};

/**
 * This function will return whether this computer we're running on is Windows.
 *
 * @method checkWindows
 * @return {Boolean} If this function returns true we're running on Windows, false if not.
 */
module.exports.checkWindows = function () {
  return appVersion.indexOf("win") >= 0;
};

/**
 * This function will return whether this computer we're running on is Mac.
 *
 * @method checkMac
 * @return {Boolean} If this function returns true we're running on Mac, false if not.
 */
module.exports.checkMac = function () {
  return appVersion.indexOf("mac os x") >= 0;
};

/**
 * This function will return the version number of the browser we are using.
 *
 * @method checkVersion
 * @return {Number} The version number of the browser.
 */
module.exports.checkVersion = function () {
  // http://stackoverflow.com/questions/5916900/detect-version-of-browser
  var tem;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return tem[1] || '';
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem != null) {
      return tem[1];
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return M[1];
};

},{}],20:[function(require,module,exports){
'use strict';

var userAgentOS = [{ s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ }, { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ }, { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ }, { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ }, { s: 'Windows Vista', r: /Windows NT 6.0/ }, { s: 'Windows Server 2003', r: /Windows NT 5.2/ }, { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ }, { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ }, { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ }, { s: 'Windows 98', r: /(Windows 98|Win98)/ }, { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ }, { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: 'Windows CE', r: /Windows CE/ }, { s: 'Windows 3.11', r: /Win16/ }, { s: 'Android', r: /Android/ }, { s: 'Open BSD', r: /OpenBSD/ }, { s: 'Sun OS', r: /SunOS/ }, { s: 'Linux', r: /(Linux|X11)/ }, { s: 'iOS', r: /(iPhone|iPad|iPod)/ }, { s: 'Mac OS X', r: /Mac OS X/ }, { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: 'QNX', r: /QNX/ }, { s: 'UNIX', r: /UNIX/ }, { s: 'BeOS', r: /BeOS/ }, { s: 'OS/2', r: /OS\/2/ }, { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];

var ua = navigator.userAgent;

var os = function () {
  var operatingSystem;
  for (var id in userAgentOS) {
    var cs = userAgentOS[id];
    if (cs.r.test(ua)) {
      operatingSystem = cs.s;
      break;
    }
  }
  return operatingSystem;
}();

var osVersion = function () {
  var version = 'Unknown';

  if (/Windows/.test(os)) {
    version = os.replace(/^Windows /, '');
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS X':
      version = /Mac OS X (10[\.\_\d]+)/.exec(ua)[1];
      break;

    case 'Android':
      version = /Android ([\.\_\d]+)/.exec(ua)[1];
      break;

    case 'iOS':
      version = /OS (\d+)_(\d+)_?(\d+)?/.exec(ua);
      version = version[1] + '.' + version[2] + '.' + (version[3] | 0);
      break;
  }

  return version;
}();

module.exports.os = function () {
  return os;
};

module.exports.osVersion = function () {
  return osVersion;
};

},{}],21:[function(require,module,exports){
'use strict';

var Stats = require('stats.js');
module.exports = function () {
  var stats = new Stats();
  stats.domElement.style.cssText = 'position:fixed;right:0;bottom:100px;z-index:10000';
  document.body.appendChild(stats.domElement);
  var loop = function loop() {
    stats.update();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
};

},{"stats.js":"stats.js"}]},{},[10]);
