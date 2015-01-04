class CreatePos < ActiveRecord::Migration
  def change
    create_table :pos do |t|
      t.string :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
