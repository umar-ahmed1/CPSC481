const attractionData = {
    "trick-riding": {
        "title": "Trick Riding", 
        "description": "Get ready for high-flying excitement as fearless motocross riders perform jaw-dropping stunts and flips " + 
                       "in our thrilling MX trick riding show at the Calgary Stampede!", 
        "waitTime": "28 minutes"
    }, 
    "zipper": {
        "title": "The Zipper", 
        "description": "Popular at carnivals and fairs in the United States, Canada, Australia, Mexico and New Zealand," +  
                       " the Zipper features strong vertical G-forces, numerous spins, and a noted sense of unpredictability.", 
        "waitTime": "35 minutes"
    },
    "nashville-north": {
        "title": "Nashville North", 
        "description": "Step into the heart of country music at Nashville North, the ultimate Stampede destination. This lively " +
                       "tent is where the party never stops, with live country bands, dancing, and a vibrant atmosphere that will " +
                       "have you two-stepping the night away", 
        "waitTime": "4 hours"
    },
    "show-home": {
        "title": "The Zipper", 
        "description": "Experience the epitome of luxury in our stunning show home. Immerse yourself in impeccable design, spacious " +
                       "living, and exquisite details that define modern comfort and style. This showcase of beauty and innovation " +
                       "offers a glimpse into your dream lifestyle.", 
        "waitTime": "1.5 hours"
    },
}


function loadAttraction(attractionData) {
    // get the query params for the attraction 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 

    // use the query params to get the data for the attraction 
    targetAttraction = attractionData[attraction]; 

    // update the document to show the correct data
    document.getElementById('title').textContent = targetAttraction.title;
    document.getElementById('description').textContent = targetAttraction.description;
    document.getElementById('waitTime').textContent = targetAttraction.waitTime;
}

loadAttraction(attractionData);