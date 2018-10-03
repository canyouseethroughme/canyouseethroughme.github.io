let template = document.querySelector("#projectTemplate").content;
let list = document.querySelector("#projectList");
let page = 1;
let lookingForData = false;

function fetchProjects() {
    lookingForData = true;

    let urlParams = new URLSearchParams(window.location.search);

    let catid = urlParams.get("category");
    let endpoint = "http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/projects?_embed&per_page=2&page=" + page
    if (catid) { // DRY
        endpoint = "http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/projects?_embed&per_page=2&page=" + page + "&categories=" + catid
    }



    fetch(endpoint)
        .then(e => e.json())
        .then(showProjects);


}

function showProjects(data) {
    console.log(data)
    lookingForData = false;
    data.forEach(showSingleProject);
}

function showSingleProject(aProject) {
    let clone = template.cloneNode(true);
    clone.querySelector("p").innerHTML = aProject.title.rendered;

    if (aProject.acf.my_projects_images.url != "") {//img is there
        clone.querySelector(".project-img").setAttribute("src", aProject.acf.my_projects_images.url);
    }



    list.appendChild(clone);
}
fetchProjects();

let button = document.querySelector(".button-more");

button.addEventListener('click', buttonPress);


function buttonPress() {
    console.log("Button has been clicked")
    page++;
    fetchProjects();

}