/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { versionApi } from '../utils/api';
import { Thunk, ActionType } from '../types/redux/actions';
import * as t from '../types/redux/version';

/*
* Defines function that performs the API call to retrieve the current version of the app,
* and dispatches the corresponding action types.
* This function will be called on app initialization.
*/
 
export function requestVersion(): t.RequestVersion {
    return { type: ActionType.RequestVersion };
}
 
export function receiveVersion(data: string): t.ReceiveVersion {
    return { type: ActionType.ReceiveVersion, data };
}

export function fetchVersion(): Thunk {
	return async dispatch => {
		dispatch(requestVersion());
		// Returns the version string
		const version = await versionApi.getVersion();
		return dispatch(receiveVersion(version));
	};
}