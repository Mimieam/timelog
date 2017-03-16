import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import { filterByYears, filterByWeeks } from './components/TaskHandler.js'


  var tar = [{
    "text": "sdasdsdasdasdasdasd",
    "when": "2017-02-26T05:13:33.062Z",
    "status": "completed"
  }, {
    "id": "4b8e045f-5a17-4624-81dd-1750217949bd",
    "text": "asdfdsaf",
    "when": "2017-03-16T02:41:12.432Z",
    "status": "completed",
    "month": 3,
    "weekOfTheMonth": 3,
    "weekOfTheYear": 11
  }, {
    "id": "d4768ae7-5e9e-441c-81fc-d05a6124bbea",
    "text": "testing something",
    "when": "2014-02-28T17:28:34.720Z",
    "status": "completed",
    "month": 2,
    "weekOfTheMonth": 5,
    "weekOfTheYear": 9
  }, {
    "id": "d4768ae7-5e9e-441c-81fc-d05a6124bbea",
    "text": "done adding new data to reducer",
    "when": "2014-03-28T17:28:34.720Z",
    "status": "completed",
    "month": 2,
    "weekOfTheMonth": 5,
    "weekOfTheYear": 9
  }, {
    "id": "c9812040-5f8b-4fbf-8414-51dae191a99f",
    "text": "ls",
    "when": "2017-03-16T02:48:57.061Z",
    "status": "completed",
    "month": 3,
    "weekOfTheMonth": 3,
    "weekOfTheYear": 11
  }
  ]

it('filters by years', () => {

  filterByYears(tar)
});

it('filters by Weeks', () => {

  filterByWeeks(filterByYears(tar))
});