const knex = require("../database/knex");

class NotesController {
    async create(requeste, response) {

        const { title, description, tags, links } = requeste.body;
        const { user_id } = requeste.params;

        const [notes_id] = await knex('notes').insert({
            title,
            description,
            user_id
        });

        const linksInsert = links.map(link => {
            return{
                notes_id,
                url: link
            }
        });

        await knex("links").insert(linksInsert)


        const tagsInsert = tags.map(name => {
            return{
                notes_id,
                name,
                user_id
            }
        });

        await knex("tags").insert(tagsInsert)


        response.json();
    }


    async show (requeste, response){

        const { id } = requeste.params;

        const note = await knex("notes").where({ id }).first();
        const tags = await knex("tags").where({ notes_id: id}).orderBy("name");
        const links = await knex("links").where({ notes_id: id}).orderBy("created_at");

        return response.json({
            ...note,
            tags,
            links
        })
    }
}


module.exports = NotesController