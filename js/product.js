// Toggle 'selected' class and scroll to target
document.addEventListener("DOMContentLoaded", () => {
    const allGroups = document.querySelectorAll(".options");
  
    allGroups.forEach(group => {
      const buttons = group.querySelectorAll("button");
  
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          // Remove 'selected' class from others in this group
          buttons.forEach(btn => btn.classList.remove("selected"));
          button.classList.add("selected");
  
          // Scroll to section if data-target attribute is present
          const targetId = button.getAttribute("data-target");
          if (targetId) {
            const target = document.querySelector(targetId);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        });
      });
    });
  });
  