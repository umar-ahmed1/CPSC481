const attractionData = {
    "zipper": {
        "title": "The Zipper", 
        "description": "Popular at carnivals and fairs in the United States, Canada, Australia, Mexico and New Zealand," +  
                       " the Zipper features strong vertical G-forces, numerous spins, and a noted sense of unpredictability.", 
        "waitTime": "35 minutes"
    }
}


function loadAttraction(attractionData) {
    document.getElementById('title').textContent = attractionData.zipper.title;
    document.getElementById('description').textContent = attractionData.zipper.description;
    document.getElementById('waitTime').textContent = attractionData.zipper.waitTime;
}

loadAttraction(attractionData);