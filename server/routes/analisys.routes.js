import { Router } from "express";
import {
  getList,
  getLists,
  creatList,
  deletetList,
  updateList,
} from "../controllers/analisys.controller.js";

const router = Router();

router.getLists('/analisys',getLists)

router.get("/analisys/:id", getList);

router.post("/analisys", creatList);

router.put("/analisys/:id", updateList);

router.delete("/analisys/:id", deletetList);
export default router;
