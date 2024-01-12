const {
  GITHUB_CLIENT_ID: GITHUB_CLIENT_ID_RAW,
  GITHUB_CLIENT_SECRET: GITHUB_CLIENT_SECRET_RAW,
  GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID_RAW,
  GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET_RAW,
  DISCORD_CLIENT_ID: DISCORD_CLIENT_ID_RAW,
  DISCORD_CLIENT_SECRET: DISCORD_CLIENT_SECRET_RAW,
  COOKIE_DOMAIN: COOKIE_DOMAIN_RAW,
} = process.env;

if (!COOKIE_DOMAIN_RAW) throw new Error('COOKIE_DOMAIN is not defined');

if (!GITHUB_CLIENT_ID_RAW || !GITHUB_CLIENT_SECRET_RAW)
  throw new Error('Failed to initialize Github authentication');

if (!GOOGLE_CLIENT_ID_RAW || !GOOGLE_CLIENT_SECRET_RAW)
  throw new Error('Failed to initialize Google authentication');

if (!DISCORD_CLIENT_ID_RAW || !DISCORD_CLIENT_SECRET_RAW)
  throw new Error('Failed to initialize Discord authentication');

const GITHUB_CLIENT_ID: string = GITHUB_CLIENT_ID_RAW;
const GITHUB_CLIENT_SECRET: string = GITHUB_CLIENT_SECRET_RAW;
const GOOGLE_CLIENT_ID: string = GOOGLE_CLIENT_ID_RAW;
const GOOGLE_CLIENT_SECRET: string = GOOGLE_CLIENT_SECRET_RAW;
const DISCORD_CLIENT_ID: string = DISCORD_CLIENT_ID_RAW;
const DISCORD_CLIENT_SECRET: string = DISCORD_CLIENT_SECRET_RAW;
const COOKIE_DOMAIN: string = COOKIE_DOMAIN_RAW;

export {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  COOKIE_DOMAIN,
};