export interface ClientApiGetUserInfoResult {
  user: {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: null;
    banner_color: string;
    accent_color: number;
    bio: string;
  };
  connected_accounts: {
    type: string;
    id: string;
    name: string;
    verified: boolean;
  }[];
  premium_since: null;
  premium_guild_since: null;
  user_profile: {
    bio: string;
    accent_color: number;
  };
}
export interface ClientApiGetUserGuildsResult {
  guild_affinities: {
    guild_id: string;
    affinity: number;
  }[];
}
export interface ClientApiGetUserFriendsResult {
  user_affinities: {
    user_id: string;
    affinity: number;
  }[];
  inverse_user_affinities: any[];
}
