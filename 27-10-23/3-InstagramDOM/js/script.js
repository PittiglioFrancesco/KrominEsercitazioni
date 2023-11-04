import { UserAPI, PostsAPI } from "./RestClient.js";

const userApi = new UserAPI("http://dms.cyberdelia.eu/api/v1/user");
const postsApi = new PostsAPI("http://dms.cyberdelia.eu/api/v1/post");

const createPost = async (post) => {
  const userInfo = await userApi.readUserInfo(post.ownerId);

  const card = document.createElement("div");
  card.classList.add("row", "card", "col-sm-12", "col-xl-10");

  const headContainer = document.createElement("div");
  headContainer.classList.add(
    "row",
    "justify-space-between",
    "align-center",
    "col-sm-12"
  );

  const headLeft = document.createElement("div");
  headLeft.classList.add(
    "left",
    "row",
    "justify-space-between",
    "align-center"
  );

  const circle = document.createElement("div");
  circle.classList.add("circle");
  const profileImg = document.createElement("img");
  profileImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png";
  circle.appendChild(profileImg);

  const accountName = document.createElement("div");
  accountName.classList.add("page-name");
  accountName.textContent = userInfo.accountName;

  const postDate = document.createElement("div");
  postDate.classList.add("post-date");
  const convertedDate = new Date(post.createdAt);
  postDate.textContent = convertedDate.toLocaleDateString();

  const headRight = document.createElement("div");
  headRight.classList.add("right");

  const other = document.createElement("div");
  other.classList.add("other");
  other.textContent = "other";

  const imgRow = document.createElement("div");
  imgRow.classList.add("row", "col-sm-12");

  const img = document.createElement("img");
  img.src = post.imgSrc;

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("row");

  const description = document.createElement("div");
  description.classList.add("descrizione");
  const p = document.createElement("p");
  p.textContent = post.description;
  description.appendChild(p);

  imgRow.appendChild(img);
  headLeft.appendChild(circle);
  headLeft.appendChild(accountName);
  headLeft.appendChild(postDate);
  headRight.appendChild(other);
  headContainer.appendChild(headLeft);
  headContainer.appendChild(headRight);
  card.appendChild(headContainer);
  card.appendChild(imgRow);
  card.appendChild(description);

  return card;
};

const allPosts = await postsApi.readAll();

const allGoodPosts = allPosts.filter((post) => post.title !== "Test Post");

allGoodPosts.forEach(async (post) => {
  const thisPost = await createPost(post);
  document.getElementById("post-area").appendChild(thisPost);
});