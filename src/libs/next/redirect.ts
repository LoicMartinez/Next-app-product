import {NextRouter, useRouter} from "next/router";
import {getLocalStorage} from "@/libs/localStorage";
import { cookies } from 'next/headers'; // Import cookies

export async function redirect(router: NextRouter) {
    const userToken = getLocalStorage('token')

    // @ts-ignore
    await router.push('/', undefined, {locale: userToken} )
}