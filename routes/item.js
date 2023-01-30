const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.use(express.json());

// const isLoggedIn = require("../helper/isLoggedIn")

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

// Controller
const itemCtrl = require('../controllers/item')

// Routes
// router.get("/item/add", itemCtrl.item_create_get);
// router.get("/custom_bento/add", itemCtrl.bento_create_get);

router.post("/item/create", itemCtrl.item_create_post);
router.post("/bento/create", itemCtrl.bento_create_post);


router.get("/menu", itemCtrl.item_index_get);
router.get("/item/details", itemCtrl.item_details_get);

router.get("/menu/edit", itemCtrl.item_edit_get);
router.put("/menu/update", itemCtrl.item_update_put);

router.delete("/item/delete", itemCtrl.item_drop_delete);

module.exports = router