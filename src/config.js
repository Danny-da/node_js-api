import { config } from "dotenv"; // LEE EL ACHIVO ENV

config()
export const PORT = process.env.PORT || 3000// FORMA DE LEER UNA VARIABLE DE ENTORNO

export const DB_USER  = process.env.DB_USER || 'root'
export const DB_HOST  = process.env.DB_HOST || 'localhost'
export const DB_DATABASE  = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || '3306'
