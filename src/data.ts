export type Comp = [string, string, string, string, string];

export const MAPAS = [
  "Abyss", "Ascent", "Bind", "Corrode", "Haven", "Lotus", "Sunset"
] as const;

export const COMPS_BY_MAP: Record<string, Comp[]> = {
  Ascent: [
    ["Jett", "Omen", "Sova", "KAY/O", "Killjoy"],
    ["Jett", "Omen", "Skye", "KAY/O", "Killjoy"],
    ["Jett", "Astra", "Sova", "KAY/O", "Killjoy"],
    ["Reyna", "Omen", "Sova", "KAY/O", "Cypher"],
    ["Jett", "Omen", "Sova", "Skye", "Cypher"]
  ],
  Bind: [
    ["Raze", "Viper", "Brimstone", "Skye", "Cypher"],
    ["Raze", "Viper", "Brimstone", "Fade", "Cypher"],
    ["Raze", "Viper", "Brimstone", "Skye", "Killjoy"],
    ["Raze", "Viper", "Harbor", "Skye", "Cypher"],
    ["Raze", "Viper", "Brimstone", "KAY/O", "Cypher"]
  ],
  Haven: [
    ["Jett", "Omen", "Sova", "Breach", "Killjoy"],
    ["Jett", "Omen", "Sova", "Breach", "Cypher"],
    ["Raze", "Omen", "Sova", "Breach", "Killjoy"],
    ["Jett", "Astra", "Sova", "Breach", "Cypher"],
    ["Jett", "Omen", "Skye", "Breach", "Killjoy"]
  ],
  Lotus: [
    ["Raze", "Omen", "Viper", "Fade", "Killjoy"],
    ["Jett", "Omen", "Viper", "Skye", "Killjoy"],
    ["Raze", "Astra", "Viper", "Fade", "Killjoy"],
    ["Raze", "Omen", "Viper", "Skye", "Cypher"],
    ["Jett", "Omen", "Viper", "Breach", "Killjoy"]
  ],
  Sunset: [
    ["Raze", "Omen", "Skye", "KAY/O", "Cypher"],
    ["Jett", "Omen", "Skye", "KAY/O", "Killjoy"],
    ["Raze", "Omen", "Skye", "Sova", "Cypher"],
    ["Jett", "Omen", "Skye", "KAY/O", "Cypher"],
    ["Raze", "Astra", "Skye", "KAY/O", "Cypher"]
  ],
  Abyss: [
    ["Yoru", "Astra", "Omen", "Sova", "KAY/O"],
    ["Jett", "Omen", "Sova", "KAY/O", "Cypher"],
    ["Raze", "Astra", "Skye", "Sova", "Cypher"],
    ["Jett", "Omen", "Skye", "KAY/O", "Killjoy"],
    ["Yoru", "Omen", "Sova", "KAY/O", "Cypher"]
  ],
  Corrode: [
    ["Jett", "Omen", "Skye", "KAY/O", "Killjoy"],
    ["Raze", "Omen", "Skye", "Sova", "Cypher"],
    ["Jett", "Astra", "Skye", "KAY/O", "Cypher"],
    ["Raze", "Omen", "Sova", "KAY/O", "Killjoy"],
    ["Jett", "Omen", "Skye", "Fade", "Killjoy"]
  ]
};

export function random<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
