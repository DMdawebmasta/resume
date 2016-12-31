/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Denis");

//var firstName = "Denis";

//var age = 27;

//console.log(firstName);

//var awesomeThoughts = "I am Denis and I am AWESOME!";

//console.log(awesomeThoughts);

//var email = "camel@desert.com";

//var newEmail = email.replace("desert","forest");

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

//console.log(funThoughts);

//$("#main").append(funThoughts);

/*var name = "Denis Morozov";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Engineer-constructor";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var a = ["b", 3, 7];
console.log(a);
console.log(a.length);

/*var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);*/

/*Let's break it down.
s[1]

First, I want the "U" to be uppercase, so I use the index of the "U", which is 1, to grab it with brackets. JavaScript lets us use brackets to select one character of a string (and later, you'll see that you can do the same with an array).
s[1].toUpperCase()

.toUpperCase() is a string method, meaning it acts on the string it's attached to, which in this case is the "U" from s[1].

At this point, s[1].toUpperCase() is equal to "U".
+

The + concatenates, or adds together, strings. For instance "Hello " + "JS students!" will result in "Hello JS students!".
s.slice(2)

.slice() is another string method, which acts on the string s in this case. .slice(start, [end]) will grab the part of the string from the index of start to the index of end. The fact that [end] shows up in brackets means that it's optional. If it isn't there, then .slice() will select all of the string from start to the very end of the string. s.slice(2) gives us "dacity".

Concatenated together, we get "Udacity"!



var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    //var x = sampleArray.pop();
    // Your code goes in here!
    //_array.push(8);
//    _array = sampleArray;
//    newArray = [_array[0], _array[1], _array.pop() + 1];//[_array[0], _array[1], _array.push(x)];
    // Don't delete this line!
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

There are a few ways of solving this problem. Here's the code I wrote. Let's break it down.

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

newArray = _array.slice(0);

Just like string.slice(begin, [end]) separates the characters of a string, array.slice(begin, [end]) separates the elements of an array from the index of the begin up to but not including end. We want to make a copy of the original array, so we won't include an [end]. At this point, newArray is a copy of the original _array.
var lastNumber = newArray.pop();

The array.pop() method conveniently gives us (or returns) the last element of the array, which in this case is the number we want to increase by 1. However! Be careful because array.pop() actually removes the last element of the array. This is why we made a copy in the previous line, so we wouldn't modify the original _array.
newArray.push(lastNumber + 1);

Just how the jQuery .append() method adds an element to the end of an HTML block, the array.push() method adds an element to the end of an array. Here, we're .push()ing the lastNumber + 1, which is exactly what we wanted to do.

And with that, we've got our newly incremented array!




var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you! changes to Albert Einstein
console.log(nameChanger(name));

Like always, there are many ways of solving this problem. Here's what I came up with:

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

var names = oldName.split(" ")

Here, we're creating an array of names by breaking the original name at the space. At this point for our original example, names === ["AlbERt", "EINstEiN"]
names[1] = names[1].toUpperCase();

The string.toUpperCase() method does exactly what its name describes. It's acting on names[1], which is "EINstEiN" in the original example. So here, we're reassigning the second element in the names array to the all caps version of "EINSTEIN".
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

This line builds Albert. names[0].slice(0,1).toUpperCase() starts by acting on the first element in the names array, which is "AlbERt" in the example. Then, we grab just the first letter by using .slice(0,1). Then we simply use the .toUpperCase() method again to make sure the first letter is capitalized. Also, notice how we chained two methods together here.

The next part, names[0].slice(1).toLowerCase() acts similarly, except this time we're using .slice(1) to grab the rest of the first string, which is "lbERt" in the example. Then we simply chain the .toLowerCase() method to make sure that the rest of the letters in the first name are lower case. Once we have the first letter capitalized and the rest of the name lower case, we concatenate them together with the +.
finalName = names.join(" ");

array.join([chars]) lets us put array elements together into a single string. Each element will be separated by the optional chars. In this case, we want a space between the two names, so we made the chars a single space, " ". With that, we've joined "Albert" and "Einstein" to form "Albert EINSTEIN"!
*/


/* We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <

If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."

where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"

Notice in the second example, because the y value was missing, the output said that undefined was not a number.



function getRelationship(x, y) {
    if (typeof(x) == 'number' && typeof(y) == 'number' && x === x && y === y) {
        if (x > y) {return x + ">" + y}
        else if (x < y) {return x + "<" + y}
        else {return x + "=" + y}
    }
    else if (typeof(x) == 'number' && typeof(y) !== 'number' && x === x || typeof(x) == 'number' && typeof(y) !== 'number' && x === x && y !== y) {
        return "Can't compare relationships because " + y + " is not a number"
    }
    else if (typeof(y) == 'number' && typeof(x) !== 'number' && y === y || typeof(y) == 'number' && typeof(x) !== 'number' && y === y && x !== x){
        return "Can't compare relationships because " + x + " is not a number"
    }
    else  {return "Can't compare relationships because " + x + " and " + y + " are not numbers"}


};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));*/


/*Twelve people have walked on the Moon. They are:

    Neil Armstrong
    Buzz Aldrin
    Pete Conrad
    Alan Bean
    Alan Shepard
    Edgar Mitchell
    David Scott
    James Irwin
    John W Young
    Charles Duke
    Eugene Cernan
    Harrison Schmitt

You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var Names = [];
   for (var N = 0; N < names.length; N++) {
       var fn_ln = names[N].split(" ");
       var ln_fn = fn_ln[1] + ", " + fn_ln[0];
       Names.push(ln_fn);

   }

return Names.sort();



}

console.log(alphabetizer(moonWalkers));

*/


/*

Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.

Let's assume you're building the front-end testing framework and you make a call to the PSI API. You receive the JSON below as a response.

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.

var psiResults;


psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}


// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    var Arr = [];
    var RuleR = results.formattedResults.ruleResults;
    for (var rR in RuleR)
    if (RuleR.hasOwnProperty(rR))
       Arr.push(RuleR[rR].localizedRuleName);
           return Arr;

}
// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {

    var bytes = 0;
    var pageSt = results.pageStats;
    for (var pS in pageSt)
    if (pageSt.hasOwnProperty(pS) && pS.indexOf("Bytes") !== -1)
    bytes += Number(pageSt[pS]);// Your code goes here!
    return bytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};



// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
*/
    var bio = {
    "name": "Denis Morozov",
    "role": "Engineer-Constructor 1 cat.",
    "welcomeMessage": "Hi!",
    "bioPic":"images/fry.jpg",
    "contacts": {
        "mobile": "999-999-99-99",
        "email": "cthulhu@gmail.com",
        "github": "DMdawebmasta",
        "twitter": "TtC3",
        "location": "Moscow, Russia"
    },
    "skills": [
    "T-Flex", "SolidWorks", "Office", "CSS3", "HTML5"],
    display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $(".flex-box").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $(".flex-box").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $(".flex-box").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $(".flex-box").append(formattedGithub);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        $(".flex-box").append(formattedBlog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $(".flex-box").append(formattedLocation)

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
        $("#skills").append(formattedSkill);
            }

        }
    }
}


/* display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $(".flex-box").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $(".flex-box").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $(".flex-box").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $(".flex-box").append(formattedGithub);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        $(".flex-box").append(formattedBlog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $(".flex-box").append(formattedLocation)

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
        $("#skills").append(formattedSkill);
    }
}
}*/

bio.display();
//display();














var work = {
    "jobs" : [
    {
        "employer": "AEM",
        "title": "E-C 1cat.",
        "location": "Moscow, Russia",
        "dates": "in progress",
        "description": "Engineering solutions"
    },
    {
        "employer": "AEM",
        "title": "E-C 1cat.",
        "location": "Moscow, Russia",
        "dates": "in progress",
        "description": "Engineering solutions"
    }
    ],
    display: function() {
if (work.jobs.length > 0) {
for (var iC = 0; iC < work.jobs.length; iC++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[iC].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[iC].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[iC].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[iC].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[iC].description);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
//    console.log(iC, work.jobs.length);
        }
}
}
}



work.display();
/*$("#main").append(internationalizeButton);

function inName() {
    var nameArray = [];
    nameArray = bio.name.split(" ");
    var secondName = nameArray[1].toUpperCase();
    var intName = String(nameArray[0] + " " + secondName);
    return intName;
}*/

var projects = {
    "projects" : [
    {
        "title": "1",
        "dates": "From 2012",
        "description": "The first",
        "images": [
        "images/fry.jpg",
        "images/fry.jpg"
        ]
    },
    {
        "title": "2",
        "dates": "From 2012",
        "description": "The second",
        "images": [
        "images/fry.jpg",
        "images/fry.jpg",
        "images/fry.jpg"
        ]
    }
    ],
    display: function() {
if (projects.projects.length > 0) {
    for (var iC = 0; iC < projects.projects.length; iC++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[iC].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[iC].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[iC].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        projects.projects[iC].images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
            });
        }

    }
}
}


projects.display();

var education = {
    "schools": [
    {
        "name": "86",
        "location": "Moscow",
        "degree": "graduate",
        "majors": ["physics", "mathematics"],
        "dates": "1996-2006",
        "url": "#"
    },
    {
        "name": "MAI",
        "location": "Moscow",
        "degree": "specialist",
        "majors": ["hydrodynamics"],
        "dates": "2006-2011",
        "url": "http://en.mai.ru/"
    }
    ],
    "onlineClasses": [
    {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/courses/all"
    },
    {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/courses/all"
    },
    {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/courses/all"
    }
    ],
    display: function() {
        if (education.schools.length > 0) {

            for (var iC = 0; iC < education.schools.length; iC++) {
                $("#education").append(HTMLschoolStart);

                var formattedUrl = HTMLschoolName.replace("#", education.schools[iC].url);
//                $("#education-entry:last").append(formattedUrl);
                var formattedName = formattedUrl.replace("%data%", education.schools[iC].name);
//                var formattedName = HTMLschoolName.replace("%data%", education.schools[iC].name);
//                $(".education-entry:last").append(formattedName);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[iC].degree);
                var formattedNameDegree = formattedName + formattedDegree;
                $(".education-entry:last").append(formattedNameDegree);

                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[iC].location);
                $(".education-entry:last").append(formattedLocation);

                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[iC].dates);
                $(".education-entry:last").append(formattedDates);
//                education.schools[iC].majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[iC].majors);
                $(".education-entry:last").append(formattedMajor);
//                    });
};
//                var formattedName = HTMLschoolName.replace("%data%", education.schools[iC].name);
//                $("#education-entry:last").append(formattedName);
                (function() {
                    if (education.onlineClasses.length > 0) {
                        $(".education-entry:last").append(HTMLonlineClasses);
                        for (var iN = 0; iN < education.onlineClasses.length; iN++) {
                            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[iN].title);
//                            $("#education").append(formattedTitle);
                            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[iN].school);
                            var formattedTitleSchool = formattedTitle + formattedSchool;
//                          $("#education").append(formattedSchool);
                            $(".education-entry:last").append(formattedTitleSchool);
                            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineClasses[iN].date);
                            $(".education-entry:last").append(formattedDate);
                            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[iN].url);
                            $(".education-entry:last").append(formattedUrl);
                        }
                    }
                })();

/*                $("#education").append(HTMLonlineClasses);
                education.onlineClasses.forEach(function(onlclass) {

                            var formattedTitle = HTMLonlineTitle.replace("%data%", onlclass.title);
                            $("#education").append(formattedTitle);
                            var formattedSchool = HTMLonlineSchool.replace("%data%", onlclass.school);
                            $("#education").append(formattedSchool);
                            var formattedDate = HTMLonlineDates.replace("%data%", onlclass.date);
                            $("#education").append(formattedDate);
                            var formattedonlUrl = HTMLonlineURL.replace("%data%", onlclass.url);
                            $("#education").append(formattedonlUrl);
                        });*/
                    }
    }
}





education.display();


$("#mapDiv").append(googleMap);

/*}*/

//displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//console.log(loc());


/*for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
}*/

