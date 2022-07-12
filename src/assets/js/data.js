document.addEventListener("DOMContentLoaded", () => {
    try {
        const postsContainer = document.querySelector("[data-blog]");
        let firstTime = false;

        loadData();

        // Getting data by FETCH
        async function getData() {
            // const response = await fetch('https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.theverge.com%2F2022%2F4%2F20%2F23030327%2Fgarmin-vivosmart-5-fitness-tracker-wearables', {
            //     method: 'GET',
            //     headers: {
            //         'X-RapidAPI-Host': 'extract-news.p.rapidapi.com',
            //         'X-RapidAPI-Key': '038c8dc9b6msh6f55cd1ef8586fcp1edb12jsn7676f2e7f9e9'
            //     }
            // })

            // let data;

            // if (response.status == 200) {
            //     data = await response.json();
            //     loadData(data.article);
            // } else {
            //     data = "Error";
            //     console.error("Error with loading data!")
            // }
        }

        // Parsing Data
        function parseData(data) {
            const post = document.getElementById("postPreview").cloneNode(true);

            // Inner elements inside a clone
            let postMedia = post.querySelector("#postMedia");
            let postTags = post.querySelector("#postTags");
            let postTitle = post.querySelector("#postTitle");
            let postTime = post.querySelector("#postTime");
            let postName = post.querySelector("#postName");

            let postPhoto = post.querySelector("#postPhoto");
            let postText = post.querySelector("#postText");

            // Image/Video/Music
            postMedia.textContent = "";
            if (data.video !== undefined) {
                const embed = document.createElement("div");
                const iframe = document.createElement("iframe");
                embed.classList.add("embed");
                iframe.src = data.video;

                embed.appendChild(iframe);
                postMedia.appendChild(embed);
            } else if (data.music !== undefined) {
                const embed = document.createElement("div");
                const iframe = document.createElement("iframe");
                embed.classList.add("embed");
                iframe.src = data.music;

                embed.appendChild(iframe);
                postMedia.appendChild(embed);
            } else {
                const a = document.createElement("a");
                const img = document.createElement("img");
                img.src = data.top_image;
                a.target = "_blank"
                a.classList.add("post__image");
                a.href = data.source_url;

                a.appendChild(img);
                postMedia.appendChild(a);
            }

            // Title
            postTitle.textContent = data.title;
            postTitle.href = data.source_url;

            // Text
            data.text = data.text.slice(0, 500);
            postText.textContent = data.text.slice(0, +data.text.lastIndexOf('. ') + 1);

            // Author + Time
            console.log(postName)
            if (postName !== null) {
                postName.textContent = data.authors[0];
            }
            postTime.textContent = new Date(data.published).getDay() + " " + new Date(data.published).toLocaleString('en', { month: 'short' }) + " " + new Date(data.published).getFullYear();
            if (postPhoto !== null) {
                if (data.author_photo == undefined) {
                    postPhoto.src = "https://placehold.jp/170x170.png";
                } else {
                    postPhoto.src = data.author_photo;
                }
            }

            // Tags
            postTags.textContent = ``;
            data.tags == undefined ? data.tags = [] : data.tags = data.tags;
            if (data.tags.length !== 0) {
                for (let i = 0; i < data.tags.length; i++) {
                    const tag = document.createElement("a");
                    tag.href = data.tags[i];
                    tag.classList.add("blog__tag");
                    tag.textContent = data.tags[i];

                    postTags.insertAdjacentElement("beforeend");
                }
            } else {
                postTags.insertAdjacentHTML('beforeend', `<a href="#other" class="blog__tag">OTHER</a>`);
            }

            // Insert Element
            postsContainer.insertAdjacentElement('beforeend', post);
        }


        // Loading Data
        function loadData(data) {
            if (!firstTime) {
                for (let i = 0; i < localStorage.length; i++) {
                    console.log(localStorage.length)
                    firstTime = true;
                    let oldData = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1 - i)));
                    parseData(oldData);
                }
                return;
            } else {
                if (data == undefined || data.title.toLowerCase() == postsContainer.lastElementChild.querySelector(".post__title").textContent.toLowerCase()) {
                    return;
                }
                localStorage.setItem(data.title, JSON.stringify(data));
                parseData(data);
            }
        }

        getData();
    } catch (err) {
        console.log(err)
    }

})