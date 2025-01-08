// Mock data simulating ideas submitted by founders
const mockIdeas = [
    {
      title: "Eco-Friendly Delivery App",
      description: "An app that connects eco-friendly drivers with businesses.",
      skills: "React, Node.js, UX Design",
      equity: "5%",
    },
    {
      title: "AI-Powered Resume Builder",
      description: "A platform that generates resumes using AI.",
      skills: "Python, Machine Learning, HTML/CSS",
      equity: "10%",
    },
  ];
  
  const ideaList = document.getElementById("developerIdeaList");
  
  // Display mock ideas
  mockIdeas.forEach((idea, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "my-3");
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${idea.title}</h5>
        <p>${idea.description}</p>
        <p><strong>Skills Required:</strong> ${idea.skills}</p>
        <p><strong>Equity/Compensation:</strong> ${idea.equity}</p>
        <button class="btn btn-primary" onclick="applyToIdea(${index})">Apply</button>
      </div>
    `;
    ideaList.appendChild(card);
  });
  
  function applyToIdea(index) {
    alert(`You have applied to: ${mockIdeas[index].title}`);
  }
  