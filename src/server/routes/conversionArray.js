/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const express = require('express');
const { log } = require('../log');
const { getConnection } = require('../db');
const { createPik, redoCik } = require('../services/graph/redoCik');

const router = express.Router();

/**
 * Route for getting the conversion array.
 */
router.get('/', async (req, res) => {
	const conn = getConnection();
	try {
		// Creates the Pik array which is true if there is a conversion in Cik.
		const pik = await createPik(conn);
		res.json(pik);
	} catch (err) {
		log.error(`Error while performing GET conversion array query: ${err}`, err);
	}
});

/*
 *	Route for updating the conversion array
 */
 router.put('/update-cik', async (req, res) => {
	const conn = getConnection();
	try {
		await redoCik(conn);
	} catch(err) {
		log.error('Failed to update cik.', err);
		res.status(500).json({ message: 'Unable to update cik', err});
	}
	res.status(200).json({ message: `Successfully updated cik`});
})

module.exports = router;
