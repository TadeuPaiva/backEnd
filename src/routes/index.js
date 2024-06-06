const { Router } = require("express");

const usersRoutes = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionRoutes = require("./sessions.routes");

const routes = Router();
// arquivos na 'tabela'
routes.use("/users", usersRoutes);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);
routes.use("/sessions", sessionRoutes);

module.exports = routes;