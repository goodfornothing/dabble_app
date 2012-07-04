App = Ember.Application.create({
  another: function() {
      var meal = App.selectedMealController.get('meal');
      if(meal) {
        App.selectedHintController.set("hint", meal.get("summer")[Math.floor(Math.random()*meal.get("summer").length)]);
      }
    }
});

App.selectedMealController = Ember.Object.create({
    meal: null,
    mealChanged: function() {
      var meal = this.get('meal');
      if(meal) {
        App.selectedHintController.set("hint", meal.get("summer")[0]);
      }
    }.observes('meal')
});

App.selectedHintController = Ember.Object.create({
  hint: null,
  vegetable: function() {
    var hint = this.get('hint');
    if(hint) {
      return '/veg/' + hint.vegetable + ".png";
    }
  }.property('hint')
});

App.Meal = Ember.Object.extend({
    id: null,
    name: null,
    slug: null,
    summer: null
});

App.ImgView = Em.View.extend({
    tagName: 'img',
    didInsertElement: function() {
    }
});

App.mealsController = Ember.ArrayController.create({
    content: [
        App.Meal.create({id: 1, name: 'Spaghetti Bolognese', slug: 'spag-bol', summer: [
          {idea: 'Grate a courgette into your mince', vegetable: 'courgette'},
          {idea: 'Add a carrot to the mix', vegetable: 'carrot'},
          {idea: 'Chop up a pepper and add it to the sauce', vegetable: 'pepper'}]}),
        App.Meal.create({id: 2, name: 'Roast dinner', slug: 'roast', summer: [
          {idea: 'Roast some cherry tomatoes on the vine', vegetable: 'cherry-tomatoes'},
          {idea: 'Put an onion in with the potatoes', vegetable: 'potato'}]}),
        App.Meal.create({id: 3, name: 'Casserole', slug: 'casserole', summer: [
          {idea: 'Add a big handful of fresh spinach at the end', vegetable: 'spinach'}]}),
        App.Meal.create({id: 4, name: 'Curry', slug: 'curry', summer: [
          {idea: 'Add some quartered tomatoes for the last 10 minutes', vegetable: 'quartered-tomatoes'}]}),
        App.Meal.create({id: 5, name: 'Meat and two veg', slug: 'meat', summer: [
          {idea: 'Pod some fresh peas and broad beans and boil for 3 minutes', vegetable: 'peas'},
          {idea: 'Pod some fresh peas and broad beans and boil for 3 minutes', vegetable: 'peas'},
          ]}),
        App.Meal.create({id: 6, name: 'Bangers and mash', slug: 'bangers', summer: [
          {idea: 'Chop some watercress leaves and add them to your mash', vegetable: 'watercress'},
          {idea: 'Chop and fry a leak, then add it to the mash', vegetable: 'leek'}
          ]})
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