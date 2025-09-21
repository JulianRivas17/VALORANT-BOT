import "dotenv/config";
import { REST, Routes } from "discord.js";

// Cargar definiciones
import { data as mapa } from "./commands/mapa";
import { data as comp } from "./commands/comp";
import { data as comp_mapa } from "./commands/comp_mapa";
import { data as comps_mapa_all } from "./commands/comps_mapa_all";

const commands = [mapa, comp, comp_mapa, comps_mapa_all].map(c => c.toJSON());

async function main() {
  const token = process.env.DISCORD_TOKEN!;
  const appId = process.env.DISCORD_APP_ID!;
  const guildId = process.env.DISCORD_GUILD_ID;

  const rest = new REST({ version: "10" }).setToken(token);

  const scope = process.argv[2]; // "guild" | "global"
  if (scope === "guild") {
    if (!guildId) throw new Error("Falta DISCORD_GUILD_ID para registro guild.");
    const data = await rest.put(Routes.applicationGuildCommands(appId, guildId), { body: commands });
    console.log("✅ Comandos de guild registrados:", (data as any[]).length);
  } else {
    const data = await rest.put(Routes.applicationCommands(appId), { body: commands });
    console.log("✅ Comandos globales registrados:", (data as any[]).length);
  }
}

main().catch(err => {
  console.error("❌ Error registrando comandos:", err);
  process.exit(1);
});
