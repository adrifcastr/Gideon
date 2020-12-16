/**
 * @param {Discord.Message} message
 */
export async function run(message) {
    const tag = '**Leaks of any kind must be marked as spoiler aswell, and also be clearly declared as leaks at the beginning of the message.**\n**"Leak" refers to any information regarding the plot or any other type of content of any upcoming Arrowverse episode.**\n**Theories do count as leaks aswell and therefore mustn\'t be posted without the above mentioned steps of clarification.**';
    return message.channel.send(tag);
}

export let help = {
    name: 'leaks',
    type: 'tags',
    help_text: 'leaks',
    help_desc: 'Leaks Tag',
    owner: false,
    voice: false,
    timevault: true,
    nsfw: false,
    args: {},
    roles: [],
    user_perms: [],
    bot_perms: []
};