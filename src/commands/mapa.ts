import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { MAPAS, random } from "../data";

export const data = new SlashCommandBuilder()
  .setName("mapa")
  .setDescription("Devuelve un mapa aleatorio del pool actual.");

export async function execute(interaction: ChatInputCommandInteraction) {
  const mapa = random(MAPAS);
  await interaction.reply(`🗺️ Mapa: **${mapa}**`);
}
