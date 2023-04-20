const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!BASE_API_URL) {
    throw new Error(`NEXT_PUBLIC_BASE_API_URL not found in .env file`);
}

export const envConfig = {
    BASE_API_URL,
};
