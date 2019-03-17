(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/search.73d9d6f8.png"},168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(43),__webpack_require__(44),__webpack_require__(325);var classCallCheck=__webpack_require__(160),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(161),createClass_default=__webpack_require__.n(createClass),possibleConstructorReturn=__webpack_require__(162),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(163),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),assertThisInitialized=__webpack_require__(22),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),inherits=__webpack_require__(164),inherits_default=__webpack_require__.n(inherits),defineProperty=__webpack_require__(16),defineProperty_default=__webpack_require__.n(defineProperty),react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__(21),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),taggedTemplateLiteral=(__webpack_require__(152),__webpack_require__(331),__webpack_require__(65)),taggedTemplateLiteral_default=__webpack_require__.n(taggedTemplateLiteral),styled_components_browser_esm=__webpack_require__(66);function _templateObject3(){var data=taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=taggedTemplateLiteral_default()(["\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 10px;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=taggedTemplateLiteral_default()(["\n  margin-left: 10px;\n  cursor: pointer;\n"]);return _templateObject=function(){return data},data}var SearchIcon=styled_components_browser_esm.a.div(_templateObject()),CloseIcon=styled_components_browser_esm.a.div(_templateObject2()),Container=styled_components_browser_esm.a.div(_templateObject3()),BaseInput=function(_ref){var type=_ref.type,placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,name=_ref.name,isSearch=_ref.isSearch,onClear=_ref.onClear,icons=_ref.icons,min=_ref.min,max=_ref.max;return react_default.a.createElement(Container,null,react_default.a.createElement("input",{type:type,placeholder:placeholder,value:{simpleInput:{filterValue:function filterValue(value){return value}},integerInput:{filterValue:function filterValue(value){return value>=min?value<max?value:Number.parseInt(max):Number.parseInt(min)}},floatInput:{filterValue:function filterValue(value){return value>=min?value<max?value:max:min}},searchInput:{filterValue:function filterValue(value){return value}}}[name].filterValue(value),onChange:onChange,name:name,min:min,max:max,style:{padding:"7px",border:"1px solid grey",borderRadius:"2px"}}),isSearch?react_default.a.createElement(SearchIcon,{onClick:function onClick(e){return e.preventDefault()}},react_default.a.createElement("img",{src:icons.search.src})):null,isSearch?null:react_default.a.createElement(CloseIcon,{onClick:onClear},"×"))};BaseInput.displayName="BaseInput",BaseInput.propTypes={isSearch:prop_types_default.a.bool},BaseInput.defaultProps={isSearch:!1},BaseInput.__docgenInfo={description:"",methods:[],displayName:"BaseInput",props:{isSearch:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/BaseInput.jsx"]={name:"BaseInput",docgenInfo:BaseInput.__docgenInfo,path:"src/components/Inputs/BaseInput.jsx"});var SimpleInput=function(_ref){var placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,name=_ref.name,onClear=_ref.onClear;return react_default.a.createElement(BaseInput,{type:"text",placeholder:placeholder,value:value,onChange:onChange,name:name,onClear:onClear})};SimpleInput.displayName="SimpleInput",SimpleInput.propTypes={value:prop_types_default.a.string.isRequired,onChange:prop_types_default.a.func.isRequired,placeholder:prop_types_default.a.string,name:prop_types_default.a.string},SimpleInput.__docgenInfo={description:"",methods:[],displayName:"SimpleInput",props:{value:{type:{name:"string"},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""},placeholder:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/SimpleInput.jsx"]={name:"SimpleInput",docgenInfo:SimpleInput.__docgenInfo,path:"src/components/Inputs/SimpleInput.jsx"});__webpack_require__(158);var lodash=__webpack_require__(45),IntegerInput=function(_ref){var placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,name=_ref.name,onClear=_ref.onClear,min=_ref.min,max=_ref.max,deleteDots=function(value){var valueArray=value.split(""),indexOfDot=Object(lodash.indexOf)(valueArray,".");return-1===indexOfDot?valueArray.join(""):valueArray.slice(0,indexOfDot).join("")};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(BaseInput,{value:function checkValue(value){return Number.isInteger(+value)?0==+value?value:+deleteDots(value):parseFloat(deleteDots(value))}(value),onChange:onChange,type:"number",placeholder:placeholder,name:name,onClear:onClear,min:min,max:max}))};IntegerInput.displayName="IntegerInput",IntegerInput.propTypes={value:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]).isRequired,onChange:prop_types_default.a.func.isRequired,placeholder:prop_types_default.a.string,name:prop_types_default.a.string,onClear:prop_types_default.a.func,min:prop_types_default.a.number,max:prop_types_default.a.number},IntegerInput.__docgenInfo={description:"",methods:[],displayName:"IntegerInput",props:{value:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""},placeholder:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},onClear:{type:{name:"func"},required:!1,description:""},min:{type:{name:"number"},required:!1,description:""},max:{type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/IntegerInput.jsx"]={name:"IntegerInput",docgenInfo:IntegerInput.__docgenInfo,path:"src/components/Inputs/IntegerInput.jsx"});var SearchInput=function(_ref){var placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,name=_ref.name,icons=_ref.icons;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(BaseInput,{type:"search",placeholder:placeholder,value:value,onChange:onChange,name:name,isSearch:!0,icons:icons}))};SearchInput.displayName="SearchInput",SearchInput.propTypes={value:prop_types_default.a.string.isRequired,onChange:prop_types_default.a.func.isRequired,placeholder:prop_types_default.a.string,name:prop_types_default.a.string},SearchInput.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{value:{type:{name:"string"},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""},placeholder:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/SearchInput.jsx"]={name:"SearchInput",docgenInfo:SearchInput.__docgenInfo,path:"src/components/Inputs/SearchInput.jsx"});var FloatInput=function(_ref){var placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,name=_ref.name,onClear=_ref.onClear,min=_ref.min,max=_ref.max,precision=_ref.precision,withPrecision=function(value){var valueArray=value.split(""),indexOfDot=Object(lodash.indexOf)(valueArray,".");return-1===indexOfDot?valueArray.join(""):valueArray.slice(0,indexOfDot+precision+1).join("")};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(BaseInput,{value:function checkValue(value){return Number.isInteger(+value)?0==+value?withPrecision(value):+withPrecision(value):parseFloat(withPrecision(value))}(value),onChange:onChange,type:"number",placeholder:placeholder,name:name,onClear:onClear,min:min,max:max}))};FloatInput.displayName="FloatInput",FloatInput.propTypes={value:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]).isRequired,onChange:prop_types_default.a.func.isRequired,placeholder:prop_types_default.a.string,name:prop_types_default.a.string,onClear:prop_types_default.a.func,min:prop_types_default.a.number,max:prop_types_default.a.number,precision:prop_types_default.a.number},FloatInput.__docgenInfo={description:"",methods:[],displayName:"FloatInput",props:{value:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""},placeholder:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},onClear:{type:{name:"func"},required:!1,description:""},min:{type:{name:"number"},required:!1,description:""},max:{type:{name:"number"},required:!1,description:""},precision:{type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/FloatInput.jsx"]={name:"FloatInput",docgenInfo:FloatInput.__docgenInfo,path:"src/components/Inputs/FloatInput.jsx"});var Example_ref=react_default.a.createElement("h2",null,"Simple input"),_ref2=react_default.a.createElement("h2",null,"Integer input"),_ref3=react_default.a.createElement("h2",null,"Float input"),_ref4=react_default.a.createElement("h2",null,"Search input"),Example_Example=function(_React$Component){function Example(){var _getPrototypeOf2,_this;classCallCheck_default()(this,Example);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Example)).call.apply(_getPrototypeOf2,[this].concat(args))),defineProperty_default()(assertThisInitialized_default()(_this),"state",{inputValue:"",integerValue:"",floatValue:"",searchQuery:""}),defineProperty_default()(assertThisInitialized_default()(_this),"checkValues",function(value,max,min){var intValue=Number.parseFloat(value),intMax=Number.parseFloat(max),intMin=Number.parseFloat(min),valueArr=value.split("");return intValue>=intMin?intValue<intMax?valueArr.slice(0,valueArr.length).join(""):max:min}),defineProperty_default()(assertThisInitialized_default()(_this),"onInputValueChange",function(e){_this.setState({inputValue:e.target.value})}),defineProperty_default()(assertThisInitialized_default()(_this),"onNumberValueChange",function(value){return function(e){var checkedValue=_this.checkValues(e.target.value,e.target.getAttribute("max"),e.target.getAttribute("min"));_this.setState(defineProperty_default()({},value,0==+checkedValue?"":checkedValue))}}),defineProperty_default()(assertThisInitialized_default()(_this),"onSearch",function(e){_this.setState({searchQuery:e.target.value})}),defineProperty_default()(assertThisInitialized_default()(_this),"clearInput",function(inputValue){return function(){_this.setState(defineProperty_default()({},inputValue,""===_this.state[inputValue]?"error":""))}}),_this}return inherits_default()(Example,_React$Component),createClass_default()(Example,[{key:"render",value:function render(){return react_default.a.createElement(react_default.a.Fragment,null,Example_ref,react_default.a.createElement(SimpleInput,{placeholder:"simple input",value:this.state.inputValue,onChange:this.onInputValueChange,onClear:this.clearInput("inputValue"),name:"simpleInput"}),_ref2,react_default.a.createElement(IntegerInput,{placeholder:"16",value:this.state.integerValue,onChange:this.onNumberValueChange("integerValue"),onClear:this.clearInput("integerValue"),name:"integerInput",min:0,max:100.5}),_ref3,react_default.a.createElement(FloatInput,{placeholder:"00.00",value:this.state.floatValue,onChange:this.onNumberValueChange("floatValue"),onClear:this.clearInput("floatValue"),name:"floatInput",precision:2,min:0,max:100.5}),_ref4,react_default.a.createElement(SearchInput,{placeholder:"search input",value:this.state.searchQuery,onChange:this.onSearch,name:"searchInput",icons:this.props.icons}))}}]),Example}(react_default.a.Component);Example_Example.displayName="Example";__webpack_exports__.a=Example_Example;Example_Example.__docgenInfo={description:"",methods:[{name:"checkValues",docblock:null,modifiers:[],params:[{name:"value",type:null},{name:"max",type:null},{name:"min",type:null}],returns:null},{name:"onInputValueChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onNumberValueChange",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"onSearch",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"clearInput",docblock:null,modifiers:[],params:[{name:"inputValue",type:null}],returns:null}],displayName:"Example"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Example.jsx"]={name:"Example",docgenInfo:Example_Example.__docgenInfo,path:"src/components/Example.jsx"})},170:function(module,exports,__webpack_require__){__webpack_require__(171),__webpack_require__(250),module.exports=__webpack_require__(251)},251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(322)},module)}.call(this,__webpack_require__(120)(module))},322:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64),_src_components_Example__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(168),_static_search_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(167),_static_search_png__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_static_search_png__WEBPACK_IMPORTED_MODULE_3__),withStorySource=__webpack_require__(323).withStorySource,__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport Example from '../../src/components/Example';\n\nimport SearchImage from '../static/search.png';\n\nconst Search = {\n  src: SearchImage,\n};\n\nconst Icons = {\n  search: Search,\n};\n\nstoriesOf('Input', module).add('all inputs', () => <Example icons={Icons} />);\n",__ADDS_MAP__={"input--all-inputs":{startLoc:{col:31,line:15},endLoc:{col:76,line:15}}},Icons={search:{src:_static_search_png__WEBPACK_IMPORTED_MODULE_3___default.a}},_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Example__WEBPACK_IMPORTED_MODULE_2__.a,{icons:Icons});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Input",module).addDecorator(withStorySource("import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport Example from '../../src/components/Example';\n\nimport SearchImage from '../static/search.png';\n\nconst Search = {\n  src: SearchImage,\n};\n\nconst Icons = {\n  search: Search,\n};\n\nstoriesOf('Input', module).add('all inputs', () => <Example icons={Icons} />);\n",__ADDS_MAP__)).add("all inputs",function(){return _ref})}.call(this,__webpack_require__(120)(module))}},[[170,1,2]]]);
//# sourceMappingURL=main.6a9758ad79465fae78d9.bundle.js.map