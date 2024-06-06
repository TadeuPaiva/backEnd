const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController(); // como e uma classe usamos o new para instanciar e armazenar dentro da const

const sessionRoutes = Router();
sessionRoutes.post("/", sessionsController.create);

module.exports = sessionRoutes;