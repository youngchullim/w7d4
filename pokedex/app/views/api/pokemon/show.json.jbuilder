# json.set! 'pokemon' do
json.set! 'pokemon' do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :item_ids
  json.image_url asset_path(@pokemon.image_url)

  # json.items_ids do
  #   json.array! @pokemon.items do |item|
  #     json.id item.id
  #   end
  # end
end

json.set! 'items' do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.price item.price
      json.happiness item.happiness
      json.image_url asset_path(item.image_url)

      
    end
  end
end

