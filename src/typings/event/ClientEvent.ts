import { Client } from "../../class/client/Client";
import { PromisOrTypeOrNull } from "../baseType/type";

export interface ClientEvent {
  ready: (client: Client) => PromisOrTypeOrNull<unknown>;
}
