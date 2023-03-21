// code your solution here

function saturdayFun (activity){
    const insideFunc = function(activity = 'roller-skate'){
        return `This Saturday, I want to ${activity}!`
    }
    return insideFunc(activity)
}

function mondayWork (activity){
    return (function(activity = 'go to the office'){
        return `This Monday, I will ${activity}.`
    })(activity)
}

function wrapAdjective (specialCharacter = "*" ){
    const innerFunc = function(adjective){
        return `You are ${specialCharacter}${adjective}${specialCharacter}!`
    }
    return innerFunc
}
