async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

function summarizeText() {
    const inputText = document.getElementById("inputText").value;
    
    query( inputText )
        .then(result => {
        
            document.getElementById("summary").innerText = result[0].summary_text;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}