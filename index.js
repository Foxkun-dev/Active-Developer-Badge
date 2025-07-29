import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, Events } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Kiểm tra phản hồi của bot!'),
  new SlashCommandBuilder()
    .setName('active')
    .setDescription('Gửi link nhận huy hiệu Active Developer')
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);
(async () => {
  try {
    console.log('🔄 Đang đăng ký slash commands...');
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );
    console.log('✅ Slash commands đã đăng ký!');
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`✅ Bot đã đăng nhập với tên ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong!');
  }

  if (interaction.commandName === 'active') {
    await interaction.reply('🔗 Link claim huy hiệu: https://discord.com/developers/active-developer');
  }
});

client.login(TOKEN);
