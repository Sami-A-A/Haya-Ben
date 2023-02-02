const express = require('express')
const router = express.Router()
const isLoggedIn = require("../helper/isLoggedIn");

router.use(express.json());

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const userCtrl = require('../controllers/user')

// TEMP USER CREATE/POST

router.get("/user/details", isLoggedIn, userCtrl.user_details_get)
router.get("/user/index", isLoggedIn, userCtrl.user_index_get)

router.get("/user/edit", isLoggedIn, userCtrl.user_edit_get)
router.put("/user/update", isLoggedIn, userCtrl.user_update_put)

router.delete("/user/delete", isLoggedIn, userCtrl.user_drop_delete)


module.exports = router