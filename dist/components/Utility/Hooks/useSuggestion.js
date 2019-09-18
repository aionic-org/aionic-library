var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useState, useEffect } from 'react';

function useSuggestion(initialItemListSelected, updateParent, autoClearOnSelect, inputID) {
	var _useState = useState(false),
	    _useState2 = _slicedToArray(_useState, 2),
	    showSuggestion = _useState2[0],
	    setShowSuggestion = _useState2[1];

	var _useState3 = useState([]),
	    _useState4 = _slicedToArray(_useState3, 2),
	    itemList = _useState4[0],
	    setItemList = _useState4[1];

	var _useState5 = useState(initialItemListSelected),
	    _useState6 = _slicedToArray(_useState5, 2),
	    itemListSelected = _useState6[0],
	    setItemListSelected = _useState6[1];

	useEffect(function () {
		setItemListSelected(initialItemListSelected);
	}, [initialItemListSelected]);

	var handleSelect = function handleSelect(e) {
		var target = e.currentTarget;

		// Check if item is already selected
		var newItemID = Number(target.dataset.id);
		var itemIdx = itemListSelected.findIndex(function (item) {
			return item.id === newItemID;
		});

		if (itemIdx === -1) {
			var newItem = itemList.find(function (item) {
				return item.id === newItemID;
			});

			var newItems = itemListSelected.slice();
			newItems.push(newItem);

			setItemListSelected(newItems);
			setShowSuggestion(false);
			updateParent(newItems);

			document.getElementById(inputID).value = autoClearOnSelect ? '' : target.dataset.displayname;
		} else {
			document.getElementById(inputID).value = '';
			setShowSuggestion(false);
		}
	};

	var handleRemove = function handleRemove(e) {
		var target = e.currentTarget;

		var itemToRemoveID = Number(target.dataset.id);
		var itemToRemoveIdx = itemListSelected.findIndex(function (item) {
			return item.id === itemToRemoveID;
		});

		if (itemToRemoveIdx >= 0) {
			var newItems = itemListSelected.slice();
			newItems.splice(itemToRemoveIdx, 1);

			setItemListSelected(newItems);
			updateParent(newItems);
		}
	};

	return [itemList, itemListSelected, setItemList, showSuggestion, setShowSuggestion, handleSelect, handleRemove];
}

export default useSuggestion;