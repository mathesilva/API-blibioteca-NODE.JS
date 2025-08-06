import mongoose from "mongoose";  
import { autorSchema } from "./Autor.js";


const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema // Referência ao schema de Autor
}, { versionKey: false });

const livro = mongoose.model("livrarias", livroSchema);

export default livro;