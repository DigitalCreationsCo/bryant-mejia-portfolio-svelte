export function handleError({ error, event }) {
    console.error('Error:', error);
    return {
        message: 'Internal Server Error',
        code: error?.code ?? 'UNKNOWN'
    };
}