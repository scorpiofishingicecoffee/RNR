class DropModels < ActiveRecord::Migration[7.0]
  def change
    drop_table :table_name
  end
end
