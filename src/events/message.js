module.exports = async (client, message) => {
    // Ignore all bots & Checks if message starts with Prefix
    if (message.author.bot || !message.content.startsWith(process.env.PREFIX)) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    //Returns if Command doesnt exist
    if (!cmd) return;
    // Run the command
    cmd.run(client, message);

};