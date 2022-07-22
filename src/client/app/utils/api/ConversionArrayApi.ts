/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import ApiBackend from './ApiBackend';

export default class ConversionArrayApi {
	private readonly backend: ApiBackend;

	constructor(backend: ApiBackend) {
		this.backend = backend;
	}

	public async getConversionArray(): Promise<boolean[][]> {
		return await this.backend.doGetRequest<boolean[][]>('/api/conversion-array');
	}

	public async updateCik(): Promise<void>{
		// OED does not have a perfect request since this neither sends nor received infomation.
		// This uses the put that does not expect any response (<void>) and then sends undefined as the data.
		return await this.backend.doPutRequest<void>('/api/conversion-array/update-cik', undefined)
	}
}
