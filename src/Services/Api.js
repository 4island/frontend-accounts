const BASE_PATH_API = 'http://localhost:4000/api/bank/'

export const api = {
    async searchAccounts(clientId) {
        let response = await fetch(`${BASE_PATH_API}${clientId}`)
            .then(result => result.json());
        return [...response]
    },
    async searchAccount(clientId, accountId) {
        let response = await fetch(`${BASE_PATH_API}account/${clientId}/${accountId}`)
            .then(result => result.json());
        return response
    },
    async getTransfers(clientId) {
        let response = await fetch(`${BASE_PATH_API}transfer/${clientId}`)
            .then(result => result.json());
        return response
    },
    async postTransfer(object) {
        let response = await fetch(`${BASE_PATH_API}transfer`,
            {
                method: 'POST',
                body: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        return response
    }
}