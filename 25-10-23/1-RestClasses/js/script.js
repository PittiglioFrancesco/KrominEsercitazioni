import { RestClient, RestClientAsync } from "./RestClient.js";

const baseUrl = 'http://dms.cyberdelia.eu/api/v1/';

const userCrud = new RestClient(`${baseUrl}user/`);

userCrud.create();
userCrud.read(1);
userCrud.update({lastname: "Di Giorgio"}, 30);
userCrud.delete(32);