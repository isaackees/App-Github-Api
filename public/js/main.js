
//api to github
const URL = "https://api.github.com/users/isaackees/repos"
async function allrepos() {
    const response = await fetch(URL);
    const data = await response.json()
    data.forEach(repo => {
        const markup = `<div id="repo-item class="repos" style="margin: 2rem 0;corder-raduis: 5px; background-color: #fff"; width: 100%; padding:0 2rem;>
        <h2 id="repo-name style="text-align: center;"><a class="repo-link" href="https://githib.com/isaackees/${repo.name}" style=" color: #28b485; text-decoration: none; ">${repo.name}</a></h2>
        <h3 id="repo-desc" style="text-align: center;">${repo.description}</h3>
        <span>${repo.topics}</span>
    </div>`;

    let item = document.getElementById('repo');
    item.insertAdjacentHTML('beforeend', markup);
    })
}
allrepos()
const result = async() => {
   const result = await fetch(`http://localhost:5000/os`)
   const detail = await result.json()
   document.querySelector('.server').innerHTML = (`This web Applicaton is coming from server ${detail.osName, detail.osHost} server`)
}
result()