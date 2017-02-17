'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _identifiers = require('./identifiers');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Types = require('./Types');

var _split = require('./split');

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnItem = function (_React$Component) {
    _inherits(ColumnItem, _React$Component);

    function ColumnItem() {
        _classCallCheck(this, ColumnItem);

        return _possibleConstructorReturn(this, (ColumnItem.__proto__ || Object.getPrototypeOf(ColumnItem)).apply(this, arguments));
    }

    _createClass(ColumnItem, [{
        key: 'resolveDropArea',
        value: function resolveDropArea(position) {
            var value = this.props.value;

            if ((0, _identifiers.isIdentifier)(value)) {
                return this.item.getWrappedInstance().resolveDropArea(position);
            } else {
                return (0, _split2.default)(_reactDom2.default.findDOMNode(this), position);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var className = _props.className;
            var value = _props.value;

            var other = _objectWithoutProperties(_props, ['className', 'value']);

            var theme = this.context.floatyContext.theme;


            return _react2.default.createElement(
                'div',
                _extends({ className: (0, _classnames2.default)(theme['floaty-column-item'], className) }, other),
                (0, _identifiers.isIdentifier)(value) ? _react2.default.createElement(_Item2.default, { ref: function ref(r) {
                        return _this2.item = r;
                    }, id: value }) : value
            );
        }
    }]);

    return ColumnItem;
}(_react2.default.Component);

ColumnItem.propTypes = {
    value: _react2.default.PropTypes.any.isRequired
};
ColumnItem.contextTypes = {
    floatyContext: _Types.floatyContextType
};
exports.default = ColumnItem;
;