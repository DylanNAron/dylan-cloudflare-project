


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	
 const response = await fetch('https://cfw-takehome.developers.workers.dev/api/variants');
 const urls = await response.json();
 console.log(urls);

 const random = Math.round(Math.random());
 console.log(random);

 const urlsParsed = urls.variants;
 const url = urlsParsed[random];
 //console.log(url);
 const response2 = await fetch(url);
 //console.log(response2);
 return response2;

  
}




