import axios from "axios";

const EthermineApi = axios.create({
    baseURL: 'https://api.ethermine.org/'
})

export async function getPoolStats() {
    const response = await EthermineApi.get('poolStats') 
    return response.data
}

export async function getDashboard(address) {
    const response = await EthermineApi.get(`miner/${address}/dashboard`)
    return response.data
}

export async function getPayouts(address) {
    const response = await EthermineApi.get(`miner/${address}/payouts`)
    return response.data
}

export async function getCurrentStats(address) {
    const response = await EthermineApi.get(`miner/${address}/currentStats`)
    return response.data
}