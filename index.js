mainbtn.addEventListener('click',()=>{
    mainselector()
})

async function mainselector(){
    const value1 = document.getElementById('farmtype').value
    const value2 = document.getElementById('Land').value
    const ouutputcntnr = document.getElementById('answerwrthy')
    console.log(value1)
    console.log(value2)
    if (value1 === 'Vegitables') {
        if (value2 === 'Dry') {
            var sentences = [
                'First cultivate that land, then get some tractors and gear.',
                'Prepare the land for cultivation and bring in the tractors and equipment.',
                'Start by cultivating the land, then acquire the necessary tractors and tools.'
            ];
            ouutputcntnr.innerText = sentences[Math.floor(Math.random() * sentences.length)];
        } else if (value2 === 'arable') {
            var sentences = [
                'The land is already cultivated, so get some tractors and build a small warehouse nearby.',
                'Since the land is already cultivated, focus on acquiring tractors and setting up a nearby warehouse.',
                'With the land already cultivated, proceed to get tractors and establish a small warehouse in the vicinity.'
            ];
            ouutputcntnr.innerText = sentences[Math.floor(Math.random() * sentences.length)];
        } else {
            console.error('An error');
        }
    } else if (value1 === 'animals') {
        if (value2 === 'Dry') {
            var sentences = [
                'First, cultivate the land to provide lush grass for the animals, then get the animals and nutritious foods for them.',
                'Ensure the land is cultivated with lush grass before bringing in the animals and providing nutritious foods.',
                'Cultivate the land to create a suitable environment with lush grass for the animals, then acquire the animals and nutritious foods.'
            ];
            ouutputcntnr.innerText = sentences[Math.floor(Math.random() * sentences.length)];
        } else if (value2 === 'arable') {
            var sentences = [
                'With the land having grass as food for animals, proceed to get the required animals and provide nutritious foods for them.',
                'Now that the land has grass for the animals, acquire the necessary animals and provide nutritious foods.',
                'Ensure the land has grass for the animals, then get the animals you need and provide them with nutritious foods.'
            ];
            ouutputcntnr.innerText = sentences[Math.floor(Math.random() * sentences.length)];
        } else {
            console.error('An error');
        }
    } else {
        console.error('An error');
    }
    
}
mwlbflb.addEventListener('click', () => {
    window.location.href = 'https://flubel.tech';
});
