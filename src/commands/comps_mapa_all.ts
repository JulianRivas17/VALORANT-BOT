import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { MAPAS, COMPS_BY_MAP } from "../data";

export const data = new SlashCommandBuilder()
  .setName("comps_mapa_all")
  .setDescription("Lista las 5 compos meta para un mapa.")
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
  const lines = pool.map((c, i) => `**#${i + 1}**\n${c.map(a => `• ${a}`).join("\n")}`).join("\n\n");
  await interaction.reply(`🗺️ **${mapa}** — 5 compos meta:\n\n${lines}`);
}
