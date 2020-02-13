$(document).ready(function () {
    $('#searchBtn').on('click', function(e){
        e.preventDefault()
        const apiKey = "ZvsSFTtQnGfK74nSoaS7B1j64JpiMpfA"
        let query = $('#search').val()
        searchGiphy(query, apiKey)
    })

    async function searchGiphy(query, apiKey){
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`)
        let randNum = getRandomInt(24)
        let gifURL = (res.data.data[`${randNum}`].images.downsized_large.url)
        add(gifURL)
        $("input[type='text']").val("")
    }

    function add(gifURL){
        $('#display').append(`<img src="${gifURL}" width=400px height=400px>`)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    $('#removeBtn').on('click', function(e){
        e.preventDefault()
        $('#display').children().remove()
    })
})