class Label < ActiveRecord::Base
  def self.retrieve(label)
    l = Label.where(label: label).first
    l && l.content.html_safe
  end
end
