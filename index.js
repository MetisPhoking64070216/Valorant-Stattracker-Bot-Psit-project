const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config()

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

const random_num = () =>{
    return Math.floor(Math.random() * 15);
}

client.on('ready', ()=>{
    console.log('your bot is ready')
})

client.on('messageCreate', msg=>{
    let agents = ['Astra', 'Breach', 'Brimstone', 'Cypher', 'Jett', 'Killjoy', 'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru']
    if (msg.content == '/r agents'){
        msg.reply(agents[random_num()])
    }

})

client.login(process.env.TOKEN)