import type { NextAuthConfig } from "next-auth";
import Discord, { DiscordProfile } from "next-auth/providers/discord";

const scopes = ["identify", "guilds", "guilds.members.read"].join(" ");
const serverId = "898474249906421771";
const roles = ["1102379679987539978", "898474250254565444"];

export default {
  providers: [
    Discord({
      authorization: {
        params: {
          scope: scopes,
        },
      },
      async profile(profile: DiscordProfile, tokens) {
        let isAuthorized = false;

        const response = await fetch(
          `https://discord.com/api/users/@me/guilds/${serverId}/member`,
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        );

        const memberData = await response.json();

        isAuthorized = memberData.roles.some((role: string) =>
          roles.includes(role)
        );

        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
          isAuthorized: isAuthorized,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // @ts-ignore
      if (account.provider === "discord") {
        // @ts-ignore
        return user.isAuthorized;
      }
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return { ...session, user: { ...session.user, ...token } };
    },
  },
} as NextAuthConfig;
