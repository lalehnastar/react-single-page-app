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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import libraries, files, styles as needed
var react_1 = __importStar(require("react"));
require("./App.css");
var axios_1 = __importDefault(require("axios"));
var react_confetti_1 = __importDefault(require("react-confetti"));
var SlideOut_js_1 = __importDefault(require("./components/SlideOut.js"));
require("./components/SlideOut.css");
// delay
var delay = 2;
function App() {
    var _this = this;
    var _a = react_1.useState([]), clicked = _a[0], setClicked = _a[1];
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState([]), users = _d[0], setUsers = _d[1];
    var _e = react_1.useState(''), searchName = _e[0], setsearchName = _e[1];
    react_1.useEffect(function () {
        // acess to the API http://jsonplaceholder.typicode.com/users using get request with axios package
        var loadUsers = function () { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, axios_1.default.get("http://jsonplaceholder.typicode.com/users")];
                    case 1:
                        response = _a.sent();
                        setUsers(response.data);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        loadUsers();
    }, []);
    // configurable delay creates a network slowdown on site for 2s
    react_1.useEffect(function () {
        var timer = setTimeout(function () { return setShow(true); }, delay * 1000);
        return function () {
            clearTimeout(timer);
        };
    }, []);
    function toClick() {
        alert(users);
    }
    return (<div className="App">


      {show ? <div><h2 id="h2_one">{delay} seconds passed, congradulations, now filter based on your favorite name </h2>
        <react_confetti_1.default width={1000} height={50}/>
        <br></br>
        <br></br>
         <SlideOut_js_1.default />
      
        
     
        <input type="text" placeholder="Search names..." onChange={function (e) { return setsearchName(e.target.value); }}/></div> :
            <div><h2 id="h2_two">Please wait {delay} seconds</h2></div>}
      {loading ? (<h4>Loading...</h4>) : (
        //select the desirable names using filter method
        users.filter(function (value) {
            if (searchName === "") {
                return value;
            }
            else if (value.name.toLowerCase().includes(searchName.toLocaleLowerCase())) {
                return value;
            }
        })
            //map through the list, pop up as List View
            .map(function (item) { return <ul><li key={item.id}> {item.name}<button onClick={toClick}>click</button>
      </li>
     </ul>; }))}
     
           <div>
          
      </div>
 
      </div>);
}
exports.default = App;
