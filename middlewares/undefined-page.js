import { PageError } from "../utils/custom-errors.js";
import { StatusCodes } from "http-status-codes";

export default function undefinedPage(req, _res) {
    // throws an error, this will be caught by the errorHandler middleware
    throw new PageError(`Page '${req.path}' does not exist`, StatusCodes.NOT_FOUND);
}