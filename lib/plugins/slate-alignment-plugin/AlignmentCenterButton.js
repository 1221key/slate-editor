'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _button = require('../../components/button');

var _AlignmentUtils = require('./AlignmentUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentCenterButton = function AlignmentCenterButton(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type;
  return _react2.default.createElement(
    _button.Button,
    {
      style: style,
      type: type,
      onClick: function onClick(e) {
        return onChange((0, _AlignmentUtils.alignmentMarkStrategy)(value.change(), 'center'));
      },
      className: (0, _classnames2.default)('slate-alignment-plugin--button', { active: (0, _AlignmentUtils.hasMark)(value) && (0, _AlignmentUtils.getMark)(value).data.get('align') === 'center' }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'align-center' })
  );
};

exports.default = AlignmentCenterButton;