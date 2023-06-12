import { Router } from "express";
import { getSession, destroySession, testLogin } from "../controllers/session.controller.js";

const routerSession = Router()

routerSession.get('/', getSession)
routerSession.post('/testlogin', testLogin)
routerSession.get('/logout', destroySession)

export default routerSession