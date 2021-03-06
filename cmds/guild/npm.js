import Util from '../../Util.js';
import exec from 'child_process';

/**
 * @param {Discord.Interaction} interaction
 * @param {object[]} args
 */
export async function run(interaction, args) {
    if (args[0].value === 'i') {
        interaction.reply('running `npm install` please check <#622415301144870932> for console output!');
        const install = exec.exec('npm install');

        install.stdout.on('data', data => Util.log('```\n' + data + '```'));

        install.stdout.on('end', async () => {
            await interaction.reply('`npm install` ran succesfully!\nNow respawning all shards... :white_check_mark:');
            process.gideon.shard.respawnAll();
        });
    }

    if (args[0].value === 'u') {
        interaction.reply('running `npm update` please check <#622415301144870932> for console output!');
        const update = exec.exec('npm update');

        update.stdout.on('data', data => Util.log('```\n' + data + '```'));

        update.stdout.on('end', async () => {
            await interaction.reply('`npm update` ran succesfully!\nNow respawning all shards... :white_check_mark:');
            process.gideon.shard.respawnAll();
        });
    }

    if (args[0].value === 'af') {
        interaction.reply('running `npm audit fix` please check <#622415301144870932> for console output!');
        const update = exec('npm audit fix');

        update.stdout.on('data', data => Util.log('```\n' + data + '```'));

        update.stdout.on('end', async () => {
            await interaction.reply('`npm audit fix` ran succesfully!\nNow respawning all shards... :white_check_mark:');
            process.gideon.shard.respawnAll();
        });
    }
}

export let help = {
    id: '788813462343647284',
    owner: false,
    nsfw: false,
    roles: ['621399916283035658'],
    user_perms: [],
    bot_perms: []
}; 
