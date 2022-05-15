const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

router.post("/create", userController.createUser)
router.get("/getCookie", userController.getCookie)
router.get("/logout", userController.logout)
router.post("/login", userController.login)
router.post("/addToLibrary", userController.addToLibrary)
router.get("/getFaves/:userId", userController.getFaves)
router.get("/getHaveRead/:userId", userController.getHaveRead)
router.get("/getWillRead/:userId", userController.getWillRead)
router.put("/deleteBookInLibrary", userController.deleteBookInLibrary)


module.exports = router