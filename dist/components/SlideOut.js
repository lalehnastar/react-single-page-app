"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_slideout_1 = __importDefault(require("@ijsto/react-slideout"));
var Slideout = function () {
    var _a = react_1.useState(false), slideOutIsOpen = _a[0], setSlideOutIsOpen = _a[1];
    var openSlideOut = function () {
        setSlideOutIsOpen(true);
    };
    var closeSlideOut = function () {
        setSlideOutIsOpen(false);
    };
    return (<div className="slideout">
      <button onClick={openSlideOut}>Favorites</button>
      <react_slideout_1.default isOpen={slideOutIsOpen} onClose={closeSlideOut}>
        
      </react_slideout_1.default>
    </div>);
};
exports.default = Slideout;
