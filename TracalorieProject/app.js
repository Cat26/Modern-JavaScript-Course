const ItemCtrl = (function() {
        const Item = function(id, name, calories){
                this.id = id;
                this.name = name;
                this.calories = calories;
        }

        const data = {
                items: [
                        {id: 0, name: 'Steak Dinner', calories: 1200},
                        {id: 1, name: 'Cake', calories: 500}
                ],
                currentItem: null,
                totalCalories: 0
        }
        //Public Methods
        return {
                getItems: function() {
                        return data.items;
                },
                logData: function(){
                        return data;
                }
        }
})();

const UICtrl = (function() {
        const UISelectors = {
                itemList: '#item-list'
        }

        return {
                populateItemList: function(items){
                        let html = '';

                        items.forEach(function(item){
                                html += `<li class="collection-item" id="item-${item.id}">
                                <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                        </li>`
                        });

                        document.querySelector(UISelectors.itemList).innerHTML = html;
                }
        }
})();

const App = (function(ItemCtrl, UICtrl) {
        return {
                init: function() {
                        const items = ItemCtrl.getItems();

                        UICtrl.populateItemList(items);
                }
        }
})(ItemCtrl, UICtrl);

App.init();
