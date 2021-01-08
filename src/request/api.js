import { get, post } from './http'
export const api1 = p1 => get('', p1)
export const api3 = p => post('', p)