import axios from "axios";
import {
  ClientApiGetUserFriendsResult,
  ClientApiGetUserGuildsResult,
  ClientApiGetUserInfoResult,
} from "../../typings/api/client/ClientApi";
import { ClientApiList } from "./ApiList";

export class ClientApi {
  static async GetUserInfo(token: string): Promise<ClientApiGetUserInfoResult> {
    try {
      const res = await axios({
        method: "GET",
        url: ClientApiList.GetUserInfoUrl,
        headers: {
          Authorization: `${token}`,
        },
        params: {
          with_mutual_guilds: false,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async GetUserGuilds(
    token: string
  ): Promise<ClientApiGetUserGuildsResult> {
    const res = await axios({
      method: "GET",
      url: ClientApiList.GetUserGuildsUrl,
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data;
  }
  static async GetUserFriends(
    token: string
  ): Promise<ClientApiGetUserFriendsResult> {
    const res = await axios({
      method: "GET",
      url: ClientApiList.GetUserFriendsUrl,
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.data;
  }
}
