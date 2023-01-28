const express = require('express')
const router = express.Router()

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const userCtrl = require('../controllers/user')

router.get("/user/details", userCtrl.user_details_get)
router.put("/user/put", userCtrl.user_update_put)
router.delete("/user/delete", userCtrl.user_drop_delete)


module.exports = router
