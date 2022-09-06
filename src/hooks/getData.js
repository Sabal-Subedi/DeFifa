export const Fetchdata = async (dataToSend) => {
  console.log(dataToSend);
  console.log(JSON.stringify(dataToSend));
  if (dataToSend.Type === "POST") {
    const response = await fetch(dataToSend.FetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const cooptive = await response.json();
    console.log(cooptive);
    return cooptive;
  } else {
    const response = await fetch(dataToSend.FetchURL);
    const cooptive = await response.json();
    console.log(cooptive);
    return cooptive;
  }
};
