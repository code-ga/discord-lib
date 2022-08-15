import { ClientEvent } from "../../typings/event/ClientEvent";
import BaseClient from "./BaseClient";
import { ClientClassInput } from "../../typings/class/ClientClassInput";
import { getDefaultClientConfig } from "../../util/class/client/DefaultClientConfig";
import { ClientApi } from "../../api/client/ClientApi";
import { ClientApiGetUserInfoResult } from "../../typings/api/client/ClientApi";
import { GuildClass } from "../guild/Guild";
import { UserClass } from "../user/User";

declare interface Client extends BaseClient {
  on<U extends keyof ClientEvent>(event: U, listener: ClientEvent[U]): this;

  emit<U extends keyof ClientEvent>(
    event: U,
    ...args: Parameters<ClientEvent[U]>
  ): boolean;
}

class Client extends BaseClient {
  private token: string;
  AllOption: ClientClassInput;
  user?: ClientApiGetUserInfoResult;
  guild: GuildClass[];
  friend: UserClass[];
  constructor(config: ClientClassInput = {}) {
    super();
    if (typeof config !== "object" || config === null) {
      throw new TypeError("invalid config for client type");
    }
    this.AllOption = {
      ...getDefaultClientConfig(),
      ...config,
    };
  }
  async login(token?: string): Promise<string> {
    if (!token) {
      throw new Error("token is required");
    }
    this.token = token;
    this.user = await ClientApi.GetUserInfo(this.token);
    this.guild = (
      await ClientApi.GetUserGuilds(this.token)
    ).guild_affinities.map((guild) => {
      return new GuildClass(guild.guild_id, token);
    });
    this.friend = (
      await ClientApi.GetUserFriends(this.token)
    ).user_affinities.map((friend) => {
      return new UserClass(friend.user_id, token);
    });
    this.emit("ready", this);

    return token;
  }
}
export { Client };
