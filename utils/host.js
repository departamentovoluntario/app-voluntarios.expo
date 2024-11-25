const ipHostDev = 'http://172.20.12.84:1338'
const ipHostProd = 'https://appmovil.cmsiglo21.app'

const URL_HOST = __DEV__ ? ipHostDev : ipHostProd

export const apiHost = URL_HOST
