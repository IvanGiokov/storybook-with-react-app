(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),_Card__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(170));__webpack_exports__.default={component:_Card__WEBPACK_IMPORTED_MODULE_3__.a,title:"Card"};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_3__.a,Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Default.args={data:{name:"Tickets Opened",subTitle:"last 7 days",current:123,values:[123,321,123,123]}},Default.parameters=Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Card {...args} />"}},Default.parameters)},111:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),_Task__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(171));__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_3__.a,title:"Task"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_3__.a,Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(D_dev_GitHub_storyBookReactTutorial_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters)},170:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21);__webpack_require__(0);function Card(_ref){var data=_ref.data;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"column",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:data.name}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:data.subTitle}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:data.current})]})})}Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{data:{type:{name:"shape",value:{name:{name:"string",required:!0},subTitle:{name:"string",required:!0},current:{name:"number",required:!0},values:{name:"arrayOf",value:{name:"number"},required:!0}}},required:!1,description:"Composition of the card"}}},__webpack_exports__.a=Card,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Card.js"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"src\\components\\Card.js"})},171:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21);__webpack_require__(0);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon-star"})})})]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src\\components\\Task.js"})},492:function(module,exports,__webpack_require__){__webpack_require__(493),__webpack_require__(692),__webpack_require__(693),__webpack_require__(937),__webpack_require__(938),__webpack_require__(944),__webpack_require__(945),__webpack_require__(942),__webpack_require__(940),__webpack_require__(946),__webpack_require__(939),__webpack_require__(941),__webpack_require__(947),module.exports=__webpack_require__(933)},588:function(module,exports){},693:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(351)},721:function(module,exports){},932:function(module,exports,__webpack_require__){},933:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(351).configure)([__webpack_require__(934)],module,!1)}).call(this,__webpack_require__(196)(module))},934:function(module,exports,__webpack_require__){var map={"./Card.stories.js":110,"./CardList.stories.js":948,"./Task.stories.js":111,"./TaskList.stories.js":943};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=934},943:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var toConsumableArray=__webpack_require__(172),objectSpread2=__webpack_require__(16),jsx_runtime=__webpack_require__(21),Task=(__webpack_require__(0),__webpack_require__(171)),es=__webpack_require__(471),redux=__webpack_require__(472),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{tasks:state.tasks.map((function(task){return task.id===action.id?Object(objectSpread2.a)(Object(objectSpread2.a)({},task),{},{state:taskState}):task}))})}}Object(redux.a)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=Object(jsx_runtime.jsxs)("div",{className:"loading-item",children:[Object(jsx_runtime.jsx)("span",{className:"glow-checkbox"}),Object(jsx_runtime.jsxs)("span",{className:"glow-text",children:[Object(jsx_runtime.jsx)("span",{children:"Loading"})," ",Object(jsx_runtime.jsx)("span",{children:"cool"})," ",Object(jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return Object(jsx_runtime.jsxs)("div",{className:"list-items",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]});if(0===tasks.length)return Object(jsx_runtime.jsx)("div",{className:"list-items",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-check"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Sit back and relax"})]})});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return Object(jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if it's in loading state"},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:"The list of tasks"},onPinTask:{type:{name:"func"},required:!0,description:"Event to change the task to pinned"},onArchiveTask:{type:{name:"func"},required:!0,description:"Event to change the task to archived"}}};Object(es.a)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src\\components\\TaskList.js"});var Task_stories=__webpack_require__(111),TaskList_stories_Template=(__webpack_exports__.default={component:PureTaskList,title:"TaskList",decorators:[function(story){return Object(jsx_runtime.jsx)("div",{style:{padding:"3rem"},children:story()})}]},function Template(args){return Object(jsx_runtime.jsx)(PureTaskList,Object(objectSpread2.a)({},args))}),Default=TaskList_stories_Template.bind({});Default.args={tasks:[Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"1",title:"Task 1"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"2",title:"Task 2"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"3",title:"Task 3"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"4",title:"Task 4"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"5",title:"Task 5"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=TaskList_stories_Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(toConsumableArray.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=TaskList_stories_Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=TaskList_stories_Template.bind({});Empty.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Loading.args),{},{loading:!1}),Default.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureTaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(objectSpread2.a)({storySource:{source:"args => <PureTaskList {...args} />"}},Empty.parameters)},947:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(956),types=__webpack_require__(954),esm=__webpack_require__(4),parameters=(__webpack_require__(932),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},948:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(16),jsx_runtime=__webpack_require__(21),Card=(__webpack_require__(0),__webpack_require__(170));function CardList(_ref){var zendesk=_ref.zendesk;return Object(jsx_runtime.jsx)("div",{className:"cards",children:zendesk.map((function(cardData,index){return Object(jsx_runtime.jsx)(Card.a,{data:cardData},index)}))})}CardList.__docgenInfo={description:"",methods:[],displayName:"CardList",props:{zendesk:{type:{name:"arrayOf",value:{name:"custom",raw:"Card.propTypes.data"}},required:!0,description:"The list of tasks"}}};var components_CardList=CardList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\CardList.js"]={name:"CardList",docgenInfo:CardList.__docgenInfo,path:"src\\components\\CardList.js"});var Card_stories=__webpack_require__(110),Default=(__webpack_exports__.default={component:components_CardList,title:"CardList"},function Template(args){return Object(jsx_runtime.jsx)(components_CardList,Object(objectSpread2.a)({},args))}.bind({}));Default.args={zendesk:[Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Tickets Opened",subTitle:"last 7 days",current:123,values:[123,321,123,123]}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Tickets Closed",subTitle:"last 7 days",current:123,values:[123,321,123,123]}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Average Solved Time",subTitle:"last 7 days",current:123,values:[123,321,123,123]}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Average First Response",subTitle:"last 7 days",current:123,values:[123,321,123,123]}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Tickets With Activity",subTitle:"last 7 days",current:123,values:[123,321,123,123]}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Card_stories.Default.args.data),{},{name:"Tickets Opened And Closed",subTitle:"last 7 days",current:123,values:[123,321,123,123]})]},Default.parameters=Object(objectSpread2.a)({storySource:{source:"args => <CardList {...args} />"}},Default.parameters)}},[[492,2,3]]]);