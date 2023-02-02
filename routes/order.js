const express = require('express')
const router = express.Router()
const isLoggedIn = require("../helper/isLoggedIn");

router.use(express.json());

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const orderCtrl = require('../controllers/order')

router.post("/order/create", orderCtrl.order_create_post)

router.get("/order/history", isLoggedIn, orderCtrl.order_index_get)
router.get("/order/details", isLoggedIn, orderCtrl.order_details_get)

router.get("/order/edit",isLoggedIn, orderCtrl.order_edit_get)
router.put("/order/update",isLoggedIn, orderCtrl.order_update_put)

module.exports = router