import {Button, Grid, TextField} from "@mui/material";
import Layout from "src/components/Layout";
import Api from "src/libs/api/client"
import {useState, ChangeEvent, Dispatch, SetStateAction} from "react";
import {useStateType} from "@/libs/types/reactTypes";
import {onChangeType} from "@/libs/types/materialUiTypes";
import { useRouter } from 'next/router';

export default function LoginPage({}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)

    const router = useRouter();

    const handleFieldUpdate = (event: onChangeType, setter: useStateType) => {
        setter(event.target.value)
    }

    const handleConnection = async () => {
        if (!login || !password) {
            setShowError(true)
            console.log('il manque un champ')
            return
        }

        setShowError(false)

        const response = await Api.Authenticate(login, password)

        if (response.token)
            await router.push('/')

    }

    return (
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <TextField
                    variant="standard"
                    label="identifiant"
                    value={login}
                    sx={{m: 1}}
                    onChange={(event) => handleFieldUpdate(event, setLogin)}
                />
                <TextField
                    variant="standard"
                    label="mot de passe"
                    value={password}
                    sx={{m: 1}}
                    onChange={(event) => handleFieldUpdate(event, setPassword)}
                />
                <Button variant={"contained"} sx={{m: 1}} onClick={handleConnection}>
                    Se connecter
                </Button>
                {showError ? 'Merci de remplir tous les champs' : ''}
            </Grid>
    )
}