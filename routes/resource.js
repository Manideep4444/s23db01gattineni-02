var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kangaroo_controller = require('../controllers/kangaroo');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// kangaroo ROUTES ///
// POST request for creating a kangaroo.
router.post('/kangaroo', kangaroo_controller.kangaroo_create_post);
// DELETE request to delete kangaroo.
router.delete('/kangaroo/:id', kangaroo_controller.kangaroo_delete);
// PUT request to update kangaroo.
router.put('/kangaroo/:id', kangaroo_controller.kangaroo_update_put);
// GET request for one kangaroo.
router.get('/kangaroo/:id', kangaroo_controller.kangaroo_detail);
// GET request for list of all kangaroo items.
router.get('/kangaroo', kangaroo_controller.kangaroo_list);
module.exports = router;