import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Define the file path for the JSON file
    const filePath = path.join(process.cwd(), 'knowledge-base.json');
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Read the JSON file content
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Return the data in the response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Catch and return any errors that occur
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
