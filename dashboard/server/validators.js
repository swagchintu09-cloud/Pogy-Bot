import { z } from "zod";

export const guildPatchSchema = z.object({
  prefix: z.string().min(1).max(5).optional(),
  disabledCommands: z.array(z.string()).optional(),
  disabledChannels: z.array(z.string()).optional(),
  automod: z.any().optional(),
  welcome: z.any().optional(),
  greet: z.any().optional(),
  autorole: z.any().optional(),
  tickets: z.any().optional(),
  applications: z.any().optional(),
  dashboard: z.any().optional()
});

export const antiNukePatchSchema = z.object({
  enabled: z.boolean().optional(),
  punishment: z.enum(["ban", "kick", "removeroles"]).optional(),
  whitelistusers: z.array(z.string()).optional(),
  logchannelid: z.string().nullable().optional(),
  antivanity: z.boolean().optional(),
  thresholds: z.any().optional(),
  responses: z.any().optional()
});
