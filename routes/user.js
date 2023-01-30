const express = require('express')
const router = express.Router()

router.use(express.json());

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const userCtrl = require('../controllers/user')

// TEMP USER CREATE/POST

router.post("/user/create", userCtrl.user_create_post)

router.get("/user/details/:id", userCtrl.user_details_get)
router.get("/user/index", userCtrl.user_index_get)

router.put("/user/update", userCtrl.user_update_put)

router.delete("/user/delete", userCtrl.user_drop_delete)


module.exports = router