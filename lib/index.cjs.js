'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = _interopDefault(require('typy'));

class Task{async execute(){return 42}}

const typeCheckup=a=>!!t(a).isArray&&a.reduce((a,b)=>a&&b instanceof Task,!0);

const runner=a=>new Promise((b,c)=>{if(!typeCheckup(a))return console.error("The runner is not configure to run a list of tasks.",a),c(new Error("wrong type"));const d=a.reduce((a,b)=>a.then(a=>b.execute().then(Array.prototype.concat.bind(a))),Promise.resolve([]));return b(d)});

var index = {runner,Task,typeCheckup};

module.exports = index;
