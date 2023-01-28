const express = require('express')
const router = express.Router()

let methodOverride = require("method-override")
router.use(methodOverride('_method'))

const ingredientCtrl = require('../controllers/ingredient')

//Routes

router.post("/ingredient/create", ingredientCtrl.ingr_create_post)

router.get("/ingredient/index", ingredientCtrl.ingr_index_get)
router.get("/ingredient/details", ingredientCtrl.ingr_details_get)

router.get("/ingredient/edit", ingredientCtrl.ingr_edit_get)
router.put("/ingredient/update", ingredientCtrl.ingr_update_put)

router.delete("/ingredient/delete", ingredientCtrl.ingr_delete_get)


module.exports = router