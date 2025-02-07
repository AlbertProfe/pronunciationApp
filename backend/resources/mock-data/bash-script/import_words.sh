#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "jq is required but not installed. Please install jq and try again."
    exit 1
fi

# Read the JSON file and process each word object
jq -c '.[]' data.json | while read -r word; do
    # Send POST request for each word
    curl -X POST \
         -H "Content-Type: application/json" \
         -d "$word" \
         http://localhost:8080/api/words/createWord
    
    echo -e  "\nWord processed"
    echo "----------"
    
    # Optional: Add a small delay between requests to avoid overwhelming the server
    sleep 0.5
done

echo -e  "\nAll words have been posted"


