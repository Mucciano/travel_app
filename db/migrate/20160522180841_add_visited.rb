class AddVisited < ActiveRecord::Migration
  def change
    add_column :cities, :visited, :boolean, default: false

  end
end
