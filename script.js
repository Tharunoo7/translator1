function translateText() {
    let text = document.getElementById("inputText").value;
    let sourceLang = document.getElementById("sourceLang").value;
    let targetLang = document.getElementById("targetLang").value;

    let apiKey = "YOUR_API_KEY"; // Replace with your Google Cloud API Key
    let url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    let requestBody = {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: "text"
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        let translatedText = data.data.translations[0].translatedText;
        document.getElementById("outputText").innerText = translatedText;
    })
    .catch(error => console.error("Error:", error));
}
