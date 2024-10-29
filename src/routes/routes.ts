import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, deleteProduct, getProducts, getProductsById, updateAvailability, updateProduct } from "../handlers/product";
import { handleInputErrors } from "../middlewares/errors";

const router = Router();

//Routing
router.get("/", getProducts);

router.get("/:id", 
    param('id').isInt().withMessage('not valid ID'),
    handleInputErrors,
    getProductsById);

router.put("/:id", 
    param('id').isInt().withMessage('not valid ID'),
    body("name")
    .notEmpty()
    .withMessage("Name´s product cannot be empty"),
   body("price")
    .isNumeric()
    .withMessage("Price  must be a number")
    .notEmpty()
    .withMessage("Price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Product price must be greather than 0"),
   body("availability")
    .notEmpty()
    .isBoolean().withMessage("Availability value not valid"),
    param('id').isInt().withMessage('not valid ID'),
    handleInputErrors,
    updateProduct);

router.patch("/:id", 
  param('id').isInt().withMessage('not valid ID'),
  handleInputErrors,
  updateAvailability
);

router.delete("/:id", 
  param('id').isInt().withMessage('not valid ID'),
  handleInputErrors,
  deleteProduct
);

router.post("/", 
   body("name")
    .notEmpty()
    .withMessage("Name´s product cannot be empty"),
   body("price")
    .isNumeric()
    .withMessage("Price  must be a number")
    .notEmpty()
    .withMessage("Price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Product price must be greather than 0"),
    handleInputErrors,
    createProduct
    
);

export default router;
