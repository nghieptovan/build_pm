/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar origBoard;\nvar huPlayer = 'O';\nvar aiPlayer = 'X';\nvar winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];\nvar cells = document.querySelectorAll('.cell');\nstartGame();\n\nfunction startGame() {\n  document.querySelector(\".endgame\").style.display = \"none\";\n  origBoard = Array.from(Array(9).keys());\n\n  for (var i = 0; i < cells.length; i++) {\n    cells[i].innerText = '';\n    cells[i].style.removeProperty('background-color');\n    cells[i].addEventListener('click', turnClick, false);\n  }\n\n  var r = confirm(\"Bạm muốn đi trước không?\");\n\n  if (!r) {\n    botGo();\n  }\n}\n\nfunction turnClick(square) {\n  if (typeof origBoard[square.target.id] == 'number') {\n    turn(square.target.id, huPlayer);\n    botGo();\n  }\n}\n\nfunction botGo() {\n  if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);\n  checkWin(origBoard, huPlayer);\n  checkTie();\n}\n\nfunction turn(squareId, player) {\n  origBoard[squareId] = player;\n  document.getElementById(squareId).innerText = player;\n  var gameWon = checkWin(origBoard, player);\n  if (gameWon) gameOver(gameWon);\n}\n\nfunction checkWin(board, player) {\n  var plays = board.reduce(function (a, e, i) {\n    return e === player ? a.concat(i) : a;\n  }, []);\n  var gameWon = null;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = winCombos.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _step$value = _slicedToArray(_step.value, 2),\n          index = _step$value[0],\n          win = _step$value[1];\n\n      if (win.every(function (elem) {\n        return plays.indexOf(elem) > -1;\n      })) {\n        gameWon = {\n          index: index,\n          player: player\n        };\n        break;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return gameWon;\n}\n\nfunction gameOver(gameWon) {\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = winCombos[gameWon.index][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var index = _step2.value;\n      document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? \"blue\" : \"red\";\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  for (var i = 0; i < cells.length; i++) {\n    cells[i].removeEventListener('click', turnClick, false);\n  }\n\n  declareWinner(gameWon.player == huPlayer ? \"May mắn thôi.\" : \"Cần luyện tập thêm.\", \"Xin thua lần nữa\");\n}\n\nfunction declareWinner(who, txt) {\n  document.querySelector(\".endgame\").style.display = \"block\";\n  document.querySelector(\".endgame .text\").innerText = who;\n}\n\nfunction emptySquares() {\n  return origBoard.filter(function (s) {\n    return typeof s == 'number';\n  });\n}\n\nfunction bestSpot() {\n  var asss = minimax(origBoard, aiPlayer);\n  return asss.index;\n}\n\nfunction checkTie() {\n  if (emptySquares().length == 0) {\n    for (var i = 0; i < cells.length; i++) {\n      cells[i].style.backgroundColor = \"green\";\n      cells[i].removeEventListener('click', turnClick, false);\n    }\n\n    declareWinner(\"Cầm hòa được rồi!\", \"Chơi lại lần nữa\");\n    return true;\n  }\n\n  return false;\n}\n\nfunction minimax(newBoard, player) {\n  var availSpots = emptySquares();\n\n  if (checkWin(newBoard, huPlayer)) {\n    return {\n      score: -10\n    };\n  } else if (checkWin(newBoard, aiPlayer)) {\n    return {\n      score: 10\n    };\n  } else if (availSpots.length === 0) {\n    return {\n      score: 0\n    };\n  }\n\n  var moves = [];\n\n  for (var i = 0; i < availSpots.length; i++) {\n    var move = {};\n    move.index = newBoard[availSpots[i]];\n    newBoard[availSpots[i]] = player;\n\n    if (player == aiPlayer) {\n      var result = minimax(newBoard, huPlayer);\n      move.score = result.score;\n    } else {\n      var result = minimax(newBoard, aiPlayer);\n      move.score = result.score;\n    }\n\n    newBoard[availSpots[i]] = move.index;\n    moves.push(move);\n  }\n\n  var bestMove;\n\n  if (player === aiPlayer) {\n    var bestScore = -10000;\n\n    for (var i = 0; i < moves.length; i++) {\n      if (moves[i].score > bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  } else {\n    var bestScore = 10000;\n\n    for (var i = 0; i < moves.length; i++) {\n      if (moves[i].score < bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  }\n\n  return moves[bestMove];\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });