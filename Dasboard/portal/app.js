const express = require('express');
const path = require('path'); // Node.js built-in path module
const os = require('os'); // Node.js built-in OS module
const app = express();
const PORT = 8000;
// const fs = require('fs'); // Node.js built-in file system module

app.use(express.static(path.join(__dirname, 'public'))); // Serve files from the 'public' directory

app.listen(PORT, () => {
    // Get all network interfaces
    const networkInterfaces = os.networkInterfaces();

    // Find the first non-internal IPv4 address
    let serverIP = 'localhost';
    for (const interfaceName in networkInterfaces) {
        const interface = networkInterfaces[interfaceName];
        for (const entry of interface) {
            if (!entry.internal && entry.family === 'IPv4') {
                serverIP = entry.address;
                break;
            }
        }
        if (serverIP !== 'localhost') break;
    }

    console.log(`Express static server running on:`);
    console.log(`- Local: http://localhost:${PORT}`);
    console.log(`- Network: http://${serverIP}:${PORT}`);
});