const resume ={
    fullName: "Daniel Ha",
    career:"Front End Developer",
    description:"I enjoy Coding landing pages",
    interests:["Coding", "Gym", "TV Shows"],
    pastPositions:"Customer Services Office",
    skills:["HTML", "CSS", "JS", "Bootstrap"],
    bam:""
}


function displayPosition(companyName, jobTitle, description){
    console.log("Name: " + resume.fullName.toUpperCase())
    console.log("Career: " + jobTitle + " at " + companyName)
    console.log(description)
}
function displaySkill(skillName, bam){
    console.log("My Interest:")
    for(let i = 0; i < bam.length; i++){
        console.log("* " + bam[i])
    }
    console.log("My Skill:")
    for(let i = 0; i < skillName.length; i++){
        console.log("* " + skillName[i])
    }
}

displayPosition("Farmers", resume.career, resume.description)
displaySkill(resume.skills,resume.interests)
