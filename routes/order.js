const express = require('express')
const router = express.Router()

router.use(express.json());

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const orderCtrl = require('../controllers/order')

router.post("/order/create", orderCtrl.order_create_post)

router.get("/order/history", orderCtrl.order_index_get)
router.get("/order/details", orderCtrl.order_details_get)

router.get("/order/edit", orderCtrl.order_edit_get)
router.put("/order/update", orderCtrl.order_update_put)

module.exports = router