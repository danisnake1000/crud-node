import pool from "../db.js";

export const getLists = async (req, res) => {
  try {
    
    const [result] = await pool.query("SELECT * FROM animals");
    res.json(result);
  } catch (error) {
    return res.status(500).json({mensages: [error.message]});
  }
};

export const getList = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM animals WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0)
    return res.status(404).json({ message: "Not found" });
  res.json(result[0]);
};

export const creatList = async (req, res) => {
  const { nombre, edad, sexo, raza } = req.body;
  const [result] = await pool.query(
    "INSERT INTO animals(nombre,edad,sexo,raza) VALUES (?,?,?,?)",
    [nombre, edad, sexo, raza]
  );
  res.json({
    id: result.insertId,
    nombre,
    edad,
    sexo,
    raza,
  });
};

export const updateList = async (req, res) => {
  const resul = await pool.query("UPDATE animals SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(resul);
};

export const deleteList = async (req, res) => {
  const [result] = await pool.query("DELETE FROM animals WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0)
    return res.status(404).json({ mensage: "not found" });
  return res.sendStatus(204);
};
