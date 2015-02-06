ActiveAdmin.register Item do
  permit_params :title, :title2, :description, :image, :category_id, :priority

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Project Details" do
      f.input :category
      f.input :title
      f.input :title2
      f.input :description
      f.input :image, as: :file
      f.input :priority
    end
    f.actions
  end


end
