const getData = async () => {
  try {
    const response = await axios.get(
      "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
    );
    console.log(response.data);
    document.getElementById('music-cover').src = response.data.album.images[0].url;
    document.getElementById('track-name').innerHTML = response.data.name;
    document.getElementById('artist-name').innerHTML = response.data.artists[0].name;
    document.getElementById('album-name').innerHTML = response.data.album.name;
  } catch (error) {
    alert("Something went wrong!");
  }
};

getData();

const onSubmitForm = () => {
  alert("You have successfully created a playlist");
};
