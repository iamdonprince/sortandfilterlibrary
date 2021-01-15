# sortandfilterdata

This is A Node.js module that returns sorted array and filtered array.

## Installation

```sh
npm install sortandfilterdata --save
yarn add sortandfilterdata
```

## Usage

### Javascript

```javascript
var sortandfilterdata = require("sortandfilterdata");
var sortedArray = sortandfilterdata.sortArray(arr, "sortBy", desc);
var sortedArray = sortandfilterdata.filterArray(arr, inputValue);
```

```sh
Output would be an sorted array or filtered array.
```

### TypeScript

```typescript
import { sortArray, filterArray } from "mypluralize";
var sortedArray = sortArray(arr, "sortBy", desc);
var sortedArray = filterArray(arr, inputValue);
```

````sh
Output would be an sorted array or filtered array.
``

## Funtionc Paramerters

```paramerters
arr // it should be an array
sortBy // it should be what value you want sort your array example 'name or age'
desc  //do u want to an in descenending or ascending value should be in boolean (true or flase)

```
````
