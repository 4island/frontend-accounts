const BASE_PATH_API = 'http://localhost:4000/api/bank/'

export const api = {
    async searchAccounts(value) {
        let response = await fetch(`${BASE_PATH_API}${value}`)
            .then(result => result.json());
        return [...response] 
    },
    async searchAccount(clientId, accountId) {
        let response = await fetch(`${BASE_PATH_API}account/${clientId}/${accountId}`)
            .then(result => result.json());
        console.log('responseee acounttttttt', response);
        return response
    }
}