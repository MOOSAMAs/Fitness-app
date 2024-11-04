import { clientModel } from "../../../dataBases/models/client.model.js"
import { handleError } from "../../middleware/handleError.js"
import { messageError } from "../../utils/customError.js"
import * as handle from "../handlers/controller.handle.js";

const addClient = handleError(async (req, res, next) => {
    const findClient = await clientModel.findOne({trainer: req.body.trainer});
    if (findClient) {
        return next(new messageError('You already enrolled with this trainer', 401));
    }

    const result = new clientModel({
        user: req.user._id,
        trainer: req.body.trainer
    });
    await result.save();
    res.status(200).json({ message: 'client added', result });
});

const getAllClients = handle.getAllDocuments(clientModel)

const getSpecificClient = handle.getOneDocument(clientModel)

const updateClient = handle.updateDocument(clientModel)

const deleteClient = handle.deleteDocument(clientModel)

export {
    addClient,
    getAllClients,
    getSpecificClient,
    updateClient,
    deleteClient
};