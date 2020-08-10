const express = require("express");
const router = express.Router();
const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

/*
router.params takes name and function as argument
whenever any route will be clicked and if contaain the name then corresponding
router.parama callback function will be called and from that callback function
extract the result and attach to the req object which will be used further
-> router.param will be excecuted first 
-> then router.get post etc will be called
*/

// params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// actual routers goes here
// create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

// read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

// update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

// delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
