ActiveAdmin.register Pos do
  permit_params :title, :description, :image

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Pos Details" do
      f.input :title
      f.input :description
      f.input :image, as: :file
    end
    f.actions
  end


end
