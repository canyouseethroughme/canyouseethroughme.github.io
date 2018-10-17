
let urlParams = new URLSearchParams(window.location.search);
let template = document.querySelector("section");
let id = urlParams.get("id");

fetch("http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/projects/" + id)
    .then(e => e.json())
    .then(showSinglePost)


function showSinglePost(aPost) {

    console.log(aPost);
    document.querySelector(".title2").innerHTML = aPost.title.rendered;
    document.querySelector(".content").innerHTML = aPost.content.rendered;



    if (aPost.acf.my_projects_images.url != "") {//img is there
        document.querySelector(".project-img").setAttribute("src", aPost.acf.my_projects_images.url);
    }

    if (aPost.acf.urlToProject != "") {
        document.querySelector(".linkwebsite").setAttribute("href", aPost.acf.urlToProject);
    }
}

