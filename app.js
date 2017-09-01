


function fetchData(num) {
    if(num) {
        document.getElementById('result').innerHTML = "";
        var root = 'https://jsonplaceholder.typicode.com';  
        $.ajax({
            url: root + '/posts/',
            method: 'GET'
        }).then(function(posts) {
            buildData(posts)
        });
    } 
}

function buildData(posts) {
    var results = document.createElement('div');
    posts.forEach(function(post) {
        var el = document.createElement('div');
        var title = document.createElement('h1')
        title.innerHTML = post.title;
        
        var description = document.createElement('p');
        description.innerHTML = post.body;
        
        el.appendChild(title);
        el.appendChild(description);

        results.appendChild(el)
    });
    document.getElementById('result').appendChild(results)

}

document.getElementById("search").addEventListener('keyup', doSearch);



function doSearch(e) {
    fetchData(e.target.value)
}