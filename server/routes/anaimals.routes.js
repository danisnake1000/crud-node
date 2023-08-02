import { Router } from "express";
import {
  getList,
  getLists,
  creatList,
  deleteList,
  updateList,
} from "../controllers/animals.controller.js";

const router = Router();

router.get("/animals", getLists);

router.get("/animals/:id", getList);

router.post("/animals", creatList);

router.put("/animals/:id", updateList);

router.delete("/animals/:id", deleteList);
export default router;
