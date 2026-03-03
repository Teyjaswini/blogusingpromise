const blogForm = document.getElementById("blogForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const blogContainer = document.getElementById("blogContainer");

const blogs = [];

// Submit Event
blogForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const blogObj = {
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    };

    createBlog(blogObj)
        .then(() => getBlogs())
        .then((data) => {
            displayBlogs(data);

            Swal.fire({
                title: "Blog Added Successfully!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });

            blogForm.reset();
        })
        .catch((err) => {
            Swal.fire({
                title: err,
                icon: "error",
                timer: 1500,
                showConfirmButton: false
            });
        });
});

// Create Blog (Promise)
function createBlog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.2;

            if (!error) {
                blogs.unshift(blog);
                resolve("Blog created");
            } else {
                reject("Failed to create blog");
            }
        }, 1000);
    });
}

// Fetch Blogs (Promise)
function getBlogs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.2;

            if (!error) {
                resolve(blogs);
            } else {
                reject("Failed to fetch blogs");
            }
        }, 800);
    });
}

// Display Blogs
function displayBlogs(data) {
    let result = "";

    data.forEach((blog) => {
        result += `
            <div class="card mb-3">
                <div class="card-header">
                    <h5 class="m-0">${blog.title}</h5>
                </div>
                <div class="card-body">
                    <p class="m-0">${blog.content}</p>
                </div>
            </div>
        `;
    });

    blogContainer.innerHTML = result;
}