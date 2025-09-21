import "dotenv/config";
import { Client, Collection, GatewayIntentBits, Interaction } from "discord.js";

// Import dinámico de comandos
import * as mapa from "./commands/mapa";
import * as comp from "./commands/comp";
import * as comp_mapa from "./commands/comp_mapa";
import * as comps_mapa_all from "./commands/comps_mapa_all";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = new Collection<string, any>();
[m apa, comp, comp_mapa, comps_mapa_all].forEach((mod: any) => {
  commands.set(mod.data.name, mod);
});

client.once("ready", () => {
  console.log(`✅ Bot online como ${client.user?.tag}`);
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const cmd = commands.get(interaction.commandName);
  if (!cmd) return;
  try {
    await cmd.execute(interaction);
  } catch (err) {
    console.error(err);
    if (interaction.deferred || interaction.replied) {
      await interaction.followUp({ content: "❌ Error ejecutando el comando.", ephemeral: true });
    } else {
      await interaction.reply({ content: "❌ Error ejecutando el comando.", ephemeral: true });
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
