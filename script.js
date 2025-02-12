const stories = {
    childhoodStory: {
        title: "Dancing for Grades",
        text: "It was my 5th birthday when my parents bought me a bike. We went by the seaside and my dad taught me how to ride one. After a few weeks of trying and failing, I finally learned how to ride a bike. It was satisfying despite all the crashes I made."
    },
    elementaryStory: {
        title: "Acquaintance Party",
        text: "I just spent most of the day with my friends, going around the campus. Watching the various events and eating at the stalls. Come night time, we ate together and watched the live stage performances. We also browsed around the booths available in-campus and had fun in the party."
    },
    highSchoolStory: {
        title: "Summer Stuff",
        text: "I was never good at math. I learned division when I was already in grade 7, which is why I was surprised when my teacher made me attend the math competition in our school back in grade 10. What's even more surprising is that I won 1st place. I also joined a couple of science quizzes from grade 7 up until grade 10. I only ever got 2nd or 3rd places because I refused to study or review before the quizzes."
    },
    collegeStory: {
        title: "Christmas Vacation",
        text: "College was hard since I didn't know anyone in my classroom. The feeling was exacerbated when I found out that the subjects were considerably harder than the ones I was used to in high school. However, after a few months, I slowly got the hang of it but never fully grasped what was happening. To this day, I am not sure exactly how to approach college."
    }
};

function expandStory(storyKey) {
    const storyTitle = document.getElementById("storyTitle");
    const storyText = document.getElementById("storyText");
    const expandedStory = document.getElementById("expandedStory");
    const mainContent = document.getElementById("main-content");
    
    if (stories[storyKey]) {
        storyTitle.textContent = stories[storyKey].title;
        storyText.textContent = stories[storyKey].text;
        expandedStory.style.display = "flex";
        setTimeout(() => {
            expandedStory.classList.remove("hidden");
        }, 10); 
        mainContent.classList.add("blur");
    }
}

function closeStory() {
    const expandedStory = document.getElementById("expandedStory");
    expandedStory.classList.add("hidden");
    setTimeout(() => {
        expandedStory.style.display = "none";
    }, 300); 
    document.getElementById("main-content").classList.remove("blur");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });
});
