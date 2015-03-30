import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
      {
        id: "1",
        name: "On Course!",
        description: "It is a Hunter/Jumper course designer for the ambitious equestrian. It will be able to eliminate the pen and paper way of designing courses. It comes with the functionality to customize each jump by choosing the colors and type. Then to position the jump just drag and drop with the mouse. It can even be rotated into different orientations. ",
        url: "https://calm-springs-6334.herokuapp.com/",
        github: "https://github.com/Geekyflamingo/Personal_Project",
        skills: ["Ruby on Rails", "Javascript", "FabricJS", "HTML5 Canvas","JSON", "User Authorization", "Bootstrap" ],
        image: "/Screen Shot_Course1.png",
        image_2: "/Screen Shot_Course2.png",
      },
      {
        id: "2",
        name: "Make My Notes",
        description: "An Ember app that let the user take simple notes and store them.",
        url: "https://make-me-notes.herokuapp.com/",
        github: "https://github.com/Geekyflamingo/notes",
        skills: ["Ember Cli", "Sass", "Ruby on Rails", "API"],
        image: "/Screen Shot_Notes1.png",
        image_2: "/Screen Shot_Notes2.png",
      },

      {
        id: "3",
        name: "Rantly",
        description: "Rantly is an app with Ember on the front end and Rails on the backend. It requires users to make rants that are at least 144 characters long and has client/server user auth.",
        url: "https://arcane-dusk-2928.herokuapp.com/",
        github: "https://github.com/Geekyflamingo/rantly",
        skills: ["Ember.js", "Client/Server User Auth by Hand", "Rails API", "Custom Validation Messages on Ember", "Gravatars", "Inline Editing"],
        image: "/Rantly.png",
        image_2: "/Rantly_new.png",
      },

      {
        id: "4",
        name: "gCamp",
        description: "A Rails app that has some of the same functionality as Basecamp. It was the first full Rails app done at gSchool and helped us learn about development processes.",
        url: "https://pure-castle-9433.herokuapp.com/",
        github: "https://github.com/Geekyflamingo/gCamp",
        skills: ["Ruby on Rails", "Bootstrap","Join Tables", "User Authorization", "Rspec", "Capybara"],
        image: "/Screen Shot_gCamp1.png",
        image_2: "/Screen Shot_gCamp2.png",
      },

      ];
  }

});
