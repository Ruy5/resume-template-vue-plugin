export default async function(url) {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        const base64 = buffer.toString('base64');
        return base64;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}