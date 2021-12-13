const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')
const { MessageEmbed } = require('discord.js');

dotenv.config()

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

const random_due = () =>{
    return Math.floor(Math.random() * 5);
}
const random_sen = () =>{
    return Math.floor(Math.random() * 4);
}
const random_con = () =>{
    return Math.floor(Math.random() * 4);
}
const random_ini = () =>{
    return Math.floor(Math.random() * 4);
}

client.on('ready', ()=>{
    console.log('>>> Bot is ready <<<')
})

client.on('messageCreate', msg=>{
    let duelist_agent = ['Jett', 'Phoenix', 'Raze', 'Reyna', 'Yoru']
    let sentinel_agent = ['Sage', 'Killjoy', 'Cypher', 'Chamber']
    let controller_agent = ['Astra', 'Brimstone', 'Omen', 'Viper']
    let initiator_agent = ['KAY/O', 'Sova', 'Skye', 'Breach']
    if (msg.content == 'ra!duelist'){
        let char = duelist_agent[random_due()]
        if(char == "Jett"){
            let embed_due0 = new MessageEmbed()
                .setTitle("Jett!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#1b8dc5")
                .setDescription(">>เข้าร่วมรบในฐานะตัวแทนบ้านเกิดของเธอจากประเทศเกาหลีใต้ สไตล์การต่อสู้ที่แสนคล่องตัวและสง่างามของ Jett ทำให้เธอสามารถเผชิญหน้ากับความเสี่ยงในแบบที่ไม่มีใครทำได้ เธอวิ่งวนไปทั่วความชุลมุน เชือดเฉือนศัตรูก่อนที่พวกเขาจะรู้ว่าสิ่งใดได้โจมตีพวกเขา")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909444878491062282/V_AGENTS_587x900_Jett.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240202155511808/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_due0]});
        }
        if(char == 'Phoenix'){
            let embed_due1 = new MessageEmbed()
                .setTitle("Phoenix!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#c51b1b")
                .setDescription(">>ส่งเสียงทักทายมาจากสหราชอาณาจักร พลังของ Phoenix ส่องแสงเรืองรองด้วยสไตล์การต่อสู้ของเขา เผาไหม้สนามรบให้เป็นจุณด้วยแสงสว่างและเปลวไฟ ไม่ว่าเขาจะมีทีมคอยสนับสนุนหรือไม่ เขาก็จะรีบเข้าไปในสงครามด้วยความตั้งใจของเขาเองเสมอ ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909470536860565585/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240076418678794/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due1] });
        }
        if(char == 'Raze'){
            let embed_due2 = new MessageEmbed()
                .setTitle("Raze!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#d0841b")
                .setDescription(">>ระเบิดออกจากบราซิลด้วยบุคลิกภาพที่เข้ากับคนอื่นได้ง่ายและปืนอันใหญ่โตของเธอ ด้วยสไตล์การเล่นอันดุเดือด เธอจึงเก่งกาจในการกวาดล้างศัตรูและสร้างช่องว่างด้วยเสียง ตู้ม!!! จำนวนมหาศาล")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909725889540014090/V_AGENTS_587x900_ALL_Raze_2.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240136988598302/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due2] });
        }
        if(char == 'Reyna'){
            let embed_due3 = new MessageEmbed()
                .setTitle("Reyna!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#7512ab")
                .setDescription(">>หล่อหลอมขึ้นมาจากใจกลางเม็กซิโก Reyna กุมอำนาจในการต่อสู้เดียว โผล่ออกมาพร้อมกับทำการสังหารแทบทุกครั้ง ความสามารถของเธอนั้นถูกจำกัดด้วยทักษะของเธอ ซึ่งทำให้ประสิทธิภาพของเธอนั้นขึ้นอยู่กับการเล่น")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909727027270144000/V_AGENTS_587x900_Reyna.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/899636681051885628/910152192420347904/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due3] });
        }
        if(char == 'Yoru'){
            let embed_due4 = new MessageEmbed()
                .setTitle("Yoru!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#00357a")
                .setDescription(">>ชายหนุ่มชาวญี่ปุ่นผู้สามารถเคลื่อนย้ายข้ามมิติโลกแห่งความเป็นจริงเพื่อแฝงตัวไปในกองทัพของศัตรูได้อย่างแนบเนียน ด้วยเล่ห์กลและความดุดันที่เทียบเท่ากัน เขาสามารถโค่นศัตรูได้ก่อนที่พวกมันจะได้ทันตั้งตัวเสียด้วยซ้ำ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909727631207977000/V_AGENTS_587x900_yoru.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910239881081548832/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due4] });
            
        }
    }
    
    if (msg.content == 'ra!sentinel'){
        let char = sentinel_agent[random_sen()]
        if(char == 'Sage'){
            let embed_sen0 = new MessageEmbed()
                .setTitle("Sage!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#14b37e")
                .setDescription(">>เป็นเสมือนดั่งป้อมปราการของจีน เธอมอบความปลอดภัยแก่ตัวเองและเพื่อนร่วมทีมในทุกที่ที่เธอไปโดยอาศัยความสามารถในการชุบชีวิตเพื่อนร่วมทีมและการป้องกันการโจมตี เธอจึงเป็นศูนย์กลางของความสงบท่ามกลางสนามรบอันดุเดือด")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910147153563906119/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240966538059806/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen0]});
        }
        if(char == 'Killjoy'){
            let embed_sen1 = new MessageEmbed()
                .setTitle("Killjoy!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#c1c431")
                .setDescription(">>อัจฉริยะแห่งประเทศเยอรมัน Killjoy เข้าควบคุมสนามรบได้อย่างง่ายดายด้วยกองทัพปัญญาประดิษฐ์ของเธอ หากความเสียหายจากอุปกรณ์ของเธอหยุดศัตรูไม่ได้ ดีบัฟจากหุ่นยนต์ของเธอจะทำให้มันง่ายขึ้นเอง")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910149868268433458/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240883738300456/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen1]});
        }
        if(char == 'Cypher'){
            let embed_sen2 = new MessageEmbed()
                .setTitle("Cypher!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#f2f2f2")
                .setDescription(">>นายหน้าขายข้อมูลแห่งโมร็อกโก เขาเป็นหน่วยเฝ้าระวังที่ทำงานคนเดียวเพื่อการตามติดความเคลื่อนไหวของศัตรูในทุกย่างก้าว ไม่มีความลับใดที่ปลอดภัย ไม่มีการหลบหลีกไหนที่รอดพ้นสายตา Cypher นั้นจับจ้องอยู่เสมอ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910151485784985651/V_AGENTS_587x900_Cypher.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910152628187574302/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen2]});
        }
        if(char == 'Chamber'){
            let embed_sen2 = new MessageEmbed()
                .setTitle("Chamber!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#E0EE3A")
                .setDescription(">>แต่งกายครบชุด อาวุธจัดเต็ม Chamber นักออกแบบอาวุธชาวฝรั่งเศสจะยับยั้งผู้บุกรุกด้วยความแม่นยำอย่างร้ายกาจ เขาใช้คลังแสงสั่งทำพิเศษของเขาเพื่ิอป้องกันพื้นที่ และเด็ดหัวศัตรูจากระยะไกล และมีแผนสำรองที่เหมาะสมสำหรับทุกแผนการ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919591065290416128/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919588611429642262/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen2]});
        }
    }
    if (msg.content == 'ra!controller'){
        let char = controller_agent[random_con()]
        if(char == "Astra"){
            let embed_con0 = new MessageEmbed()
                .setTitle("Astra!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#7a00f5")
                .setDescription(">>เอเจนท์ชาวกานาควบคุมพลังแห่งจักรวาลเพื่อปรับรูปแบบสนามรบให้เป็นไปตามความต้องการของเธอ ด้วยความสามารถในการควบคุมร่างดวงดาวของเธอและพรสวรรค์ในการวางแผนกลยุทธ์อย่างลึกซึ้ง เธอมักจะนำหน้าศัตรูอยู่หนึ่งก้าวเสมอ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394888229634149/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394152678731816/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_con0]});
        }
        if(char == 'Brimstone'){
            let embed_con1 = new MessageEmbed()
                .setTitle("Brimstone!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#805e00")
                .setDescription(">>ชายผู้เข้าร่วมจาก USA การโจมตีด้วย Orbital Arsenal ของ Brimstone ช่วยให้ทีมของเขาได้เปรียบเสมอ ทักษะในการส่ง Utility อย่างแม่นยำและจากระยะทางที่ไกลทำให้เขาเป็นผู้บัญชาการภาคพื้นดินที่ไม่มีใครเทียบได้ ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394836618735636/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394237860872202/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con1] });
        }
        if(char == 'Omen'){
            let embed_con2 = new MessageEmbed()
                .setTitle("Omen!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#001861")
                .setDescription(">>Omen ออกล่าในเงามืด ดั่งปีศาจแห่งความทรงจำ เขาทำให้ศัตรูตาสูญเสียการมองเห็น สามารถหายตัวข้ามสนาม แล้วก็ปล่อยให้ความหวาดระแวงเข้าครอบงำศัตรู ก่อให้เกิดความกลัวว่าเมื่อไหร่ที่เขาจะลงมืออีกครั้ง")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394740892135424/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394407197495326/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con2] });
        }
        if(char == 'Viper'){
            let embed_con3 = new MessageEmbed()
                .setTitle("Viper!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#00ad14")
                .setDescription(">>Viper สาวนักเคมีชาวอเมริกันใช้อุปกรณ์ทางเคมีที่เป็นพิษเพื่อควบคุมสนามรบและทำลายวิสัยทัศน์ของศัตรู หากไม่ใช่พิษที่สังหารเหยื่อของเธอ ก็คงเป็นเกมสงครามเย็นของเธอนั่นแหละ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394800962932776/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394315912642611/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con3] });
        }
    }
    if (msg.content == 'ra!initiator'){
        let char = initiator_agent[random_ini()]
        if(char == "KAY/O"){
            let embed_ini0 = new MessageEmbed()
                .setTitle("KAY/O!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.pngg")
                .setColor("#4940AB")
                .setDescription(">>KAY/O เป็นจักรกลสงครามที่ถูกสร้างขึ้นเพื่อวัตถุประสงค์เดียว: กำจัด Radiant ความสามารถในการยับยั้งพลังของศัตรูจะลดการตอบโต้จากคู่ต่อสู้ของเขาได้อย่างมาก และทำให้เขาและเพื่อนร่วมทีมเอาชนะศึกไปได้ในที่สุด")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919592771973681172/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919592801514172416/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_ini0]});
        }
        if(char == 'Sova'){
            let embed_ini1 = new MessageEmbed()
                .setTitle("Sova!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#1983E1")
                .setDescription(">>Sova เกิดในฤดูหนาวอันยาวนานของทุ่งทุนดราของรัสเซีย เขาติดตาม ตามล่า และกำจัดศัตรูได้อย่างมีประสิทธิภาพและแม่นยำด้วยธนูพิเศษที่เขาดัดแปลงขึ้นมาเองและความสามารถในการล่าชั้นเลิศ ต่อให้คุณวิ่งหนีไปสุดขอบฟ้า ก็จะไม่มีวันรอดพ้นจากเงื้อมมือของเขา")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919592599004790784/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919592563789406259/115.png")
                .setTimestamp()
        msg.reply({ embeds: [embed_ini1] });
        }
        if(char == 'Skye'){
            let embed_ini2 = new MessageEmbed()
                .setTitle("Skye!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#19E198")
                .setDescription(">>ส่งเสียงโห่ร้องจากออสเตรเลีย Skye และพวกสัตว์ร้ายของเธอเผาเส้นทางของศัตรูให้ลุกโชน ทีมของคุณจะแข็งแกร่งและปลอดภัยที่สุดเมื่ออยู่เคียงข้าง Skye ที่มาพร้อมกับสิ่งประดิษฐ์ของเธอที่ใช้ขัดขวางศัตรู และพลังที่สามารถฟื้นฟูผู้อื่น")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919593070239039498/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919593101616636044/115.png")
                .setTimestamp()
        msg.reply({ embeds: [embed_ini2] });
        }
        if(char == 'Breach'){
            let embed_ini3 = new MessageEmbed()
                .setTitle("Breach!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#C6932B")
                .setDescription(">>Breach สามารถยิงพลังระเบิดอันรุนแรงโดยมีพื้นที่ของศัตรูเป็นเป้าหมายในการเคลียร์เส้นทาง เขาจะสร้างความเสียหายและการก่อกวนเพื่อให้คู่แข่งต้องเผชิญกับอุปสรรคอันหฤโหดทุกครั้ง")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919593471596200047/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919593433948115064/115.png")
                .setTimestamp()
        msg.reply({ embeds: [embed_ini3] });
    }
}
    else {
        char = msg.content
        if(char == "v!Jett"){
            let embed_due0 = new MessageEmbed()
                .setTitle("Jett!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#1b8dc5")
                .setDescription(">>เข้าร่วมรบในฐานะตัวแทนบ้านเกิดของเธอจากประเทศเกาหลีใต้ สไตล์การต่อสู้ที่แสนคล่องตัวและสง่างามของ Jett ทำให้เธอสามารถเผชิญหน้ากับความเสี่ยงในแบบที่ไม่มีใครทำได้ เธอวิ่งวนไปทั่วความชุลมุน เชือดเฉือนศัตรูก่อนที่พวกเขาจะรู้ว่าสิ่งใดได้โจมตีพวกเขา")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909444878491062282/V_AGENTS_587x900_Jett.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240202155511808/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_due0]});
        }
        if(char == 'v!Phoenix'){
            let embed_due1 = new MessageEmbed()
                .setTitle("Phoenix!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#c51b1b")
                .setDescription(">>ส่งเสียงทักทายมาจากสหราชอาณาจักร พลังของ Phoenix ส่องแสงเรืองรองด้วยสไตล์การต่อสู้ของเขา เผาไหม้สนามรบให้เป็นจุณด้วยแสงสว่างและเปลวไฟ ไม่ว่าเขาจะมีทีมคอยสนับสนุนหรือไม่ เขาก็จะรีบเข้าไปในสงครามด้วยความตั้งใจของเขาเองเสมอ ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909470536860565585/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240076418678794/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due1] });
        }
        if(char == 'v!Raze'){
            let embed_due2 = new MessageEmbed()
                .setTitle("Raze!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#d0841b")
                .setDescription(">>ระเบิดออกจากบราซิลด้วยบุคลิกภาพที่เข้ากับคนอื่นได้ง่ายและปืนอันใหญ่โตของเธอ ด้วยสไตล์การเล่นอันดุเดือด เธอจึงเก่งกาจในการกวาดล้างศัตรูและสร้างช่องว่างด้วยเสียง ตู้ม!!! จำนวนมหาศาล")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909725889540014090/V_AGENTS_587x900_ALL_Raze_2.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240136988598302/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due2] });
        }
        if(char == 'v!Reyna'){
            let embed_due3 = new MessageEmbed()
                .setTitle("Reyna!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#7512ab")
                .setDescription(">>หล่อหลอมขึ้นมาจากใจกลางเม็กซิโก Reyna กุมอำนาจในการต่อสู้เดียว โผล่ออกมาพร้อมกับทำการสังหารแทบทุกครั้ง ความสามารถของเธอนั้นถูกจำกัดด้วยทักษะของเธอ ซึ่งทำให้ประสิทธิภาพของเธอนั้นขึ้นอยู่กับการเล่น")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909727027270144000/V_AGENTS_587x900_Reyna.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/899636681051885628/910152192420347904/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due3] });
        }
        if(char == 'v!Yoru'){
            let embed_due4 = new MessageEmbed()
                .setTitle("Yoru!!!")
                .setAuthor("DUELIST", "https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/909448046977384468/latest.png")
                .setColor("#00357a")
                .setDescription(">>ชายหนุ่มชาวญี่ปุ่นผู้สามารถเคลื่อนย้ายข้ามมิติโลกแห่งความเป็นจริงเพื่อแฝงตัวไปในกองทัพของศัตรูได้อย่างแนบเนียน ด้วยเล่ห์กลและความดุดันที่เทียบเท่ากัน เขาสามารถโค่นศัตรูได้ก่อนที่พวกมันจะได้ทันตั้งตัวเสียด้วยซ้ำ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/909727631207977000/V_AGENTS_587x900_yoru.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910239881081548832/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_due4] });
        }
        if(char == 'v!Sage'){
            let embed_sen0 = new MessageEmbed()
                .setTitle("Sage!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#14b37e")
                .setDescription(">>เป็นเสมือนดั่งป้อมปราการของจีน เธอมอบความปลอดภัยแก่ตัวเองและเพื่อนร่วมทีมในทุกที่ที่เธอไปโดยอาศัยความสามารถในการชุบชีวิตเพื่อนร่วมทีมและการป้องกันการโจมตี เธอจึงเป็นศูนย์กลางของความสงบท่ามกลางสนามรบอันดุเดือด")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910147153563906119/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240966538059806/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen0]});
            }
        if(char == 'v!Killjoy'){
            let embed_sen1 = new MessageEmbed()
                .setTitle("Killjoy!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#c1c431")
                .setDescription(">>อัจฉริยะแห่งประเทศเยอรมัน Killjoy เข้าควบคุมสนามรบได้อย่างง่ายดายด้วยกองทัพปัญญาประดิษฐ์ของเธอ หากความเสียหายจากอุปกรณ์ของเธอหยุดศัตรูไม่ได้ ดีบัฟจากหุ่นยนต์ของเธอจะทำให้มันง่ายขึ้นเอง")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910149868268433458/latest.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910240883738300456/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen1]});
            }
        if(char == 'v!Cypher'){
            let embed_sen2 = new MessageEmbed()
                .setTitle("Cypher!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#f2f2f2")
                .setDescription(">>นายหน้าขายข้อมูลแห่งโมร็อกโก เขาเป็นหน่วยเฝ้าระวังที่ทำงานคนเดียวเพื่อการตามติดความเคลื่อนไหวของศัตรูในทุกย่างก้าว ไม่มีความลับใดที่ปลอดภัย ไม่มีการหลบหลีกไหนที่รอดพ้นสายตา Cypher นั้นจับจ้องอยู่เสมอ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/910151485784985651/V_AGENTS_587x900_Cypher.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/910152628187574302/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen2]});
            }
        if(char == 'v!Chamber'){
            let embed_sen2 = new MessageEmbed()
                .setTitle("Chamber!!!")
                .setAuthor("SENTINEL", "https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png","https://cdn.discordapp.com/attachments/909444866050785310/910146566357123113/latest.png")
                .setColor("#E0EE3A")
                .setDescription(">>แต่งกายครบชุด อาวุธจัดเต็ม Chamber นักออกแบบอาวุธชาวฝรั่งเศสจะยับยั้งผู้บุกรุกด้วยความแม่นยำอย่างร้ายกาจ เขาใช้คลังแสงสั่งทำพิเศษของเขาเพื่ิอป้องกันพื้นที่ และเด็ดหัวศัตรูจากระยะไกล และมีแผนสำรองที่เหมาะสมสำหรับทุกแผนการ")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919591065290416128/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919588611429642262/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_sen2]});
            }
        if(char == "v!Astra"){
            let embed_con0 = new MessageEmbed()
                .setTitle("Astra!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#7a00f5")
                .setDescription(">>เอเจนท์ชาวกานาควบคุมพลังแห่งจักรวาลเพื่อปรับรูปแบบสนามรบให้เป็นไปตามความต้องการของเธอ ด้วยความสามารถในการควบคุมร่างดวงดาวของเธอและพรสวรรค์ในการวางแผนกลยุทธ์อย่างลึกซึ้ง เธอมักจะนำหน้าศัตรูอยู่หนึ่งก้าวเสมอ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394888229634149/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394152678731816/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_con0]});
            }
        if(char == 'v!Brimstone'){
            let embed_con1 = new MessageEmbed()
                .setTitle("Brimstone!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#805e00")
                .setDescription(">>ชายผู้เข้าร่วมจาก USA การโจมตีด้วย Orbital Arsenal ของ Brimstone ช่วยให้ทีมของเขาได้เปรียบเสมอ ทักษะในการส่ง Utility อย่างแม่นยำและจากระยะทางที่ไกลทำให้เขาเป็นผู้บัญชาการภาคพื้นดินที่ไม่มีใครเทียบได้ ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394836618735636/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394237860872202/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con1] });
            }
        if(char == 'v!Omen'){
            let embed_con2 = new MessageEmbed()
                .setTitle("Omen!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#001861")
                .setDescription(">>Omen ออกล่าในเงามืด ดั่งปีศาจแห่งความทรงจำ เขาทำให้ศัตรูตาสูญเสียการมองเห็น สามารถหายตัวข้ามสนาม แล้วก็ปล่อยให้ความหวาดระแวงเข้าครอบงำศัตรู ก่อให้เกิดความกลัวว่าเมื่อไหร่ที่เขาจะลงมืออีกครั้ง")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394740892135424/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394407197495326/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con2] });
            }
        if(char == 'v!Viper'){
            let embed_con3 = new MessageEmbed()
                .setTitle("Viper!!!")
                .setAuthor("CONTROLLER", "https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png","https://cdn.discordapp.com/attachments/504097968178331678/910393228434472990/16.png")
                .setColor("#00ad14")
                .setDescription(">>Viper สาวนักเคมีชาวอเมริกันใช้อุปกรณ์ทางเคมีที่เป็นพิษเพื่อควบคุมสนามรบและทำลายวิสัยทัศน์ของศัตรู หากไม่ใช่พิษที่สังหารเหยื่อของเธอ ก็คงเป็นเกมสงครามเย็นของเธอนั่นแหละ")
                .setImage("https://cdn.discordapp.com/attachments/898135091761541120/910394800962932776/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/898135091761541120/910394315912642611/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_con3] });
            }
        if(char == "v!KAY/O"){
            let embed_ini0 = new MessageEmbed()
                .setTitle("KAY/O!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.pngg")
                .setColor("#4940AB")
                .setDescription(">>KAY/O เป็นจักรกลสงครามที่ถูกสร้างขึ้นเพื่อวัตถุประสงค์เดียว: กำจัด Radiant ความสามารถในการยับยั้งพลังของศัตรูจะลดการตอบโต้จากคู่ต่อสู้ของเขาได้อย่างมาก และทำให้เขาและเพื่อนร่วมทีมเอาชนะศึกไปได้ในที่สุด")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919592771973681172/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919592801514172416/115.png")
                .setTimestamp()
            msg.reply({embeds: [embed_ini0]});
            }
        if(char == 'v!Sova'){
            let embed_ini1 = new MessageEmbed()
                .setTitle("Sova!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#1983E1")
                .setDescription(">>Sova เกิดในฤดูหนาวอันยาวนานของทุ่งทุนดราของรัสเซีย เขาติดตาม ตามล่า และกำจัดศัตรูได้อย่างมีประสิทธิภาพและแม่นยำด้วยธนูพิเศษที่เขาดัดแปลงขึ้นมาเองและความสามารถในการล่าชั้นเลิศ ต่อให้คุณวิ่งหนีไปสุดขอบฟ้า ก็จะไม่มีวันรอดพ้นจากเงื้อมมือของเขา")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919592599004790784/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919592563789406259/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_ini1] });
            }
        if(char == 'v!Skye'){
            let embed_ini2 = new MessageEmbed()
                .setTitle("Skye!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#19E198")
                .setDescription(">>ส่งเสียงโห่ร้องจากออสเตรเลีย Skye และพวกสัตว์ร้ายของเธอเผาเส้นทางของศัตรูให้ลุกโชน ทีมของคุณจะแข็งแกร่งและปลอดภัยที่สุดเมื่ออยู่เคียงข้าง Skye ที่มาพร้อมกับสิ่งประดิษฐ์ของเธอที่ใช้ขัดขวางศัตรู และพลังที่สามารถฟื้นฟูผู้อื่น")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919593070239039498/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919593101616636044/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_ini2] });
            }
        if(char == 'v!Breach'){
            let embed_ini3 = new MessageEmbed()
                .setTitle("Breach!!!")
                .setAuthor("INITIATOR", "https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png","https://cdn.discordapp.com/attachments/909444866050785310/919584565931155486/Initiator.png")
                .setColor("#C6932B")
                .setDescription(">>Breach สามารถยิงพลังระเบิดอันรุนแรงโดยมีพื้นที่ของศัตรูเป็นเป้าหมายในการเคลียร์เส้นทาง เขาจะสร้างความเสียหายและการก่อกวนเพื่อให้คู่แข่งต้องเผชิญกับอุปสรรคอันหฤโหดทุกครั้ง")
                .setImage("https://cdn.discordapp.com/attachments/909444866050785310/919593471596200047/326.png")
                .setThumbnail("https://cdn.discordapp.com/attachments/909444866050785310/919593433948115064/115.png")
                .setTimestamp()
            msg.reply({ embeds: [embed_ini3] });
}
    }
})

client.login(process.env.TOKEN)
