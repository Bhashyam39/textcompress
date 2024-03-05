async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

const UpdateSummaryDiv = (data) => {
  document.getElementById("summary").innerText = data;
};

const AddToSummaryDiv = (data) => {
  document.getElementById("summary").appendChild(data);
};

function summarizeText() {
  const inputText = document.getElementById("inputText").value;

  if (inputText == "") {
    UpdateSummaryDiv("Please enter input");
    return "";
  }

  var divElement = document.createElement("div");

  divElement.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "text-4xl"
  );

  divElement.innerHTML = "processing...";

  AddToSummaryDiv(divElement);
  query(inputText)
    .then((result) => {
      UpdateSummaryDiv(result[0].summary_text);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
