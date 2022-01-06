class Blog < ApplicationRecord

  validates :title, :desc, presence: true 
end
