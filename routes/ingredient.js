const express = require('express')
const router = express.Router()
const isLoggedIn = require('../helper/isLoggedIn')

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const ingredientCtrl = require('../controllers/ingredient')


//Routes

router.post("/ingredient/create", isLoggedIn, ingredientCtrl.ingr_create_post)

router.get("/ingredient/index", ingredientCtrl.ingr_index_get)
router.get("/ingredient/details", ingredientCtrl.ingr_details_get)

router.get("/ingredient/edit", isLoggedIn, ingredientCtrl.ingr_edit_get)
router.put("/ingredient/update", isLoggedIn, ingredientCtrl.ingr_update_put)

router.delete("/ingredient/delete", isLoggedIn, ingredientCtrl.ingr_drop_delete)


module.exports = router