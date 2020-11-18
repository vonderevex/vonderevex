var imgs = ['images/1.JPG',
    'images/2.JPG',
    'images/3.JPG',
    'images/4.JPG',
    'images/5.JPG',
    'images/6.JPG',
    'images/7.JPG',
    'images/8.JPG',
    'images/9.JPG',
    'images/10.JPG',
    'images/11.JPG',
    'images/12.JPG',
    'images/13.JPG',
    'images/14.JPG',
    'images/15.JPG',
    'images/16.JPG',
    'images/17.JPG',
    'images/18.JPG',
    'images/19.JPG',
    'images/20.JPG',
    'images/21.JPG',
    'images/22.JPG',
    'images/23.JPG',
    'images/24.JPG',
    'images/25.JPG',
    'images/26.JPG',
    'images/27.JPG',
    'images/28.JPG',
    'images/29.JPG',
    'images/30.JPG',
    'images/31.JPG',
    'images/32.JPG',
    'images/33.JPG',
    'images/34.JPG',
    'images/35.JPG',
    'images/36.JPG',
    'images/38.JPG'
]

let output = ''
console.log(imgs[0])

var docFrag = document.createDocumentFragment();


imgs.forEach(function(url) {
    output += ` <div class="col-lg-3 col-md-4 col-xs-6 thumb"><a class="thumbnail gallery" href="#" data-image-id="" data-toggle="modal" data-title="" data-image="${url}" data-target="#image-gallery"> <img class = "img-thumbnail" src = "${url}" alt = "Kutyaink" ></a></div>`
});
let picture = document.getElementById('kepek')
picture.innerHTML = output