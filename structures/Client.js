const {CommandoClient} = require('discord.js-commando');
const Database = require('../structures/PostgreSQL');

class BotClient extends CommandoClient {
	constructor(options) {
		super(options);
		this.database = Database.db;

		Database.start();
	}
}

module.exports = BotClient;
