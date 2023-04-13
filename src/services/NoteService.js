import createHttp from "./Base.services";
const authHttp = createHttp(true);
export const getNotes = (user) => 
    authHttp.get(`/account/notes/${user}`);