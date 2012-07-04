App = Ember.Application.create();

App.selectedMealController = Ember.Object.create({
    meal: null
});

App.Meal = Ember.Object.extend({
    id: null,
    name: null,
    slug: null
});

App.mealsController = Ember.ArrayController.create({
    content: [
        App.Meal.create({id: 1, name: 'Spaghetti Bolognese', slug: 'spag-bol', summer: 'Grate a carrot into your mince'}),
        App.Meal.create({id: 2, name: 'Roast dinner', slug: 'roast', summer: 'Roast some cherry tomatoes on the vine'}),
        App.Meal.create({id: 3, name: 'Casserole', slug: 'casserole', summer: 'Add a big handful of fresh spinach at the end'}),
        App.Meal.create({id: 4, name: 'Curry', slug: 'curry', summer: 'Add some quartered tomatoes for the last 10 minutes'}),
        App.Meal.create({id: 5, name: 'Meat and two veg', slug: 'meat', summer: 'Pod some fresh peas and broad beans and boil for 3 minutes'}),
        App.Meal.create({id: 6, name: 'Bangers and mash', slug: 'bangers', summer: 'Chop some watercress leaves and add them to your mash'})
    ]
});


App.introController = Ember.ArrayController.create({
  content: [
    "slice and dice",
    "chop and drop",
    "shake and bake",
    "smuggle and juggle",
    "peel and play"
  ]
});

App.selectedIntroController = Ember.Object.create({
    intro: null
});

App.selectedIntroController.set("intro", App.introController.get("content")[Math.floor(Math.random()*App.introController.get("content").length)]);