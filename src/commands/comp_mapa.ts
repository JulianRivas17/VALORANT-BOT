import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { MAPAS, COMPS_BY_MAP, random } from "../data";

export const data = new SlashCommandBuilder()
  .setName("comp_mapa")
  .setDescription("Sugerencia de comp para un mapa específico.")
  .addStringOption(opt =>
    opt.setName("mapa")
      .setDescription("Mapa")
      .setRequired(true)
      .addChoices(...MAPAS.map(m => ({ name: m, value: m })))
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  const mapa = interaction.options.getString("mapa", true);
  const pool = COMPS_BY_MAP[mapa];
  if (!pool) return interaction.reply(`No tengo comps para **${mapa}** aún.`);
  const comp = random(pool);
  await interaction.reply(`🧩 Compo sugerida para **${mapa}**:\n${comp.map(a => `• ${a}`).join("\n")}`);
}
