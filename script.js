const stories = {
    childhoodStory: {
        title: "The Day I Learned to Ride a Bike",
        text: "It was my 5th birthday when my parents bought me a bike. We went by the sea side and my dad teached me on how to ride one. Then, after a few weeks of trying and failing, I finally learned how to ride a bike. It was satisfying despite all the crashes I made"
    },
    elementaryStory: {
        title: "The Randomness of Elementary",
        text: "Back in elemntary, I participated in lots of different sports that were decided on a whim. I got interested in table tennis so I joined them for a year until I lost interest. Then I joined the volleyball team and also quit in a year due to me losing interest. The only thing I played for two consecutive years was chess as I somewhat enjoyed it."
    },
    highSchoolStory: {
        title: "Highschool Stuff",
        text: "I was never good at maths, I learned division when I was already in grade 7. Which is why I got surprised when my teacher me attend the math competition in our school back in grade 10. What's even more surprising is that I won the 1st place. I also joined a couple science quizzes from grade 7 up until grade 10. I only ever got to 2nd or 3rd places because I refused to study or review before the quizzes."
    },
    collegeStory: {
        title: "The College Experience",
        text: "Collge was hard since I didn't know anyone in my classroom. The feeling was exacerbated when I found out that the subjects are considerably harder than the once I'm used to in highschool. However, after a few months I slowly got the hang of it, but never fully grasping what is happening. To this day, I am no sure on how exactly how to approach college."
    }
};

function expandStory(storyKey) {
    document.getElementById("storyTitle").textContent = stories[storyKey].title;
    document.getElementById("storyText").textContent = stories[storyKey].text;
    document.getElementById("expandedStory").classList.remove("hidden");
    document.getElementById("main-content").classList.add("blur");
}

function closeStory() {
    document.getElementById("expandedStory").classList.add("hidden");
    document.getElementById("main-content").classList.remove("blur");
}