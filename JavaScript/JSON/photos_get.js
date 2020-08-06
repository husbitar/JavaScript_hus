const urlToFetch = `${url}${city}&limit=20&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
   
   const jsonResponse = await response.json();
   //console.log(jsonResponse);
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
     console.log(venues);
   return venues;
    }
    