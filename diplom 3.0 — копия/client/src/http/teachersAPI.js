import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createTeachers = async (teachers) =>{
    const {data} = await $authHost.post('api/teachers', teachers)
    return data

}
export const fetchTeachers = async () =>{
    const {data} = await $host.get('api/teachers')
    return data

}

