const form = document.getElementById("founderForm");
const ideaList = document.getElementById("ideaList");
const ideas = [];

document.getElementById("submitIdea").addEventListener("click", () => {
  const title = document.getElementById("ideaTitle").value;
  const description = document.getElementById("ideaDescription").value;
  const skills = document.getElementById("skillsRequired").value;
  const equity = document.getElementById("equity").value;

  if (title && description && skills && equity) {
    ideas.push({ title, description, skills, equity });
    displayIdeas();
    form.reset();
  } else {
    alert("Please fill all fields.");
  }
});

function displayIdeas() {
  ideaList.innerHTML = ideas
    .map(
      (idea) => `
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">${idea.title}</h5>
          <p class="card-text">${idea.description}</p>
          <p><strong>Skills Required:</strong> ${idea.skills}</p>
          <p><strong>Equity/Compensation:</strong> ${idea.equity}</p>
        </div>
      </div>
    `
    )
    .join("");
}
