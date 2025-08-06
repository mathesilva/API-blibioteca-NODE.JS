import {autor} from "../models/Autor.js";

class autorController {
    static async listarAutores(req, res) {
        try {
        const listarAutores = await autor.find({});
        res.status(200).json(listarAutores);} 
        catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar os Autores`});
        }
    };

    static async listarAutorPorId(req, res) {
        try {
        const id = req.params.id;
        const autorEncontrado = await autor.findById(id);
        res.status(200).json(autorEncontrado);} 
        catch (error) {
            res.status(500).json({message: `${error.message} - falha ao requerir o autor`});
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar o Autor`});
        }
    }

    static async atualizarAutor(req, res) {
        try {
        const id = req.params.id.trim();
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Autor atualizado com sucesso!"});} 
        catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar seu Autor`});
        }
    };

    static async deletarAutor(req, res) {
        try {
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({message: "Autor removido com sucesso!"});} 
        catch (error) {
            res.status(500).json({message: `${error.message} - falha ao remover o Autor`});
        }
    };
};




export default autorController;