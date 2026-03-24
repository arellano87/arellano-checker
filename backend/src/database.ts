import { Client } from 'pg';

const client = new Client({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

async function connect() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (err) {
        console.error('Connection error', err.stack);
    }
}

// Call connect function to establish connection
connect();

export default client;