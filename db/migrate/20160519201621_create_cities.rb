class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :country
      t.string :image
      t.string :food
      t.string :nightlife
      t.string :attractions

      t.timestamps null: false
    end
  end
end
