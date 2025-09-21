import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { MAPAS, COMPS_BY_MAP, random } from "../data";

const render = (mapa: string, comp: string[]) =>
  `🧩 Compo sugerida para **${mapa}**:\n${comp.map(a => `• ${a}`).join("\n")}`;

export const data = new SlashCommandBuilder()
  .setName("comp")
  .setDescription("Sugerencia aleatoria de comp y mapa.");

export async function execute(interaction: ChatInputCommandInteraction) {
  const mapa = random(MAPAS);
  const comp = random(COMPS_BY_MAP[mapa]);
  await interaction.reply(render(mapa, comp));
}
