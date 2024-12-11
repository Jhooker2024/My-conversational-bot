from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Load the knowledge base (this can be your JSON file)
with open('knowledge-base.json', 'r') as file:
    knowledge_base = json.load(file)

# Endpoint to process user queries
@app.route('/process-query', methods=['POST'])
def process_query():
    user_query = request.json.get('query', '')
    response = handle_query(user_query)
    return jsonify({'response': response})

# Function to handle user queries (simple keyword matching)
def handle_query(query):
    # Simple logic to check query against the knowledge base
    if 'pricing' in query.lower():
        return knowledge_base['faq']['pricing']
    elif 'contact' in query.lower():
        return knowledge_base['faq']['contact']
    else:
        return knowledge_base['welcome']

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)