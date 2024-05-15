window.onload = function () {
  const btnGetPosts = document.querySelector("#btnGetPosts");

  const listContainer = document.querySelector("#listContainer");

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const posts = await response.json();

      posts.forEach((post) => {
        const lieElment = document.createElement("li");
        lieElment.innerHTML = post.title;
        listContainer.append(lieElment);
      });
    } catch (err) {
      console.error(err);
    }
  };

  btnGetPosts.addEventListener("click", function () {
    fetchPosts();
  });
};
