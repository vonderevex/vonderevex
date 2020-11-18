var imgs = ['images/3.JPG',
    'images/4.JPG',
    'images/5.JPG'
]

let output = ''
console.log(imgs[0])

var docFrag = document.createDocumentFragment();


imgs.forEach(function(url) {
    output += ` <div class="col-lg-3 col-md-4 col-xs-6 thumb"><a class="thumbnail gallery" href="#" data-image-id="" data-toggle="modal" data-title="" data-image="${url}" data-target="#image-gallery"> <img class = "img-thumbnail" src = "${url}" alt = "Another alt text" ></a></div>`
});
let picture = document.getElementById('kepek')
picture.innerHTML = output