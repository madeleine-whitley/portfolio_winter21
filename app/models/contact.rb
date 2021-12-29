class Contact < ApplicationRecord
  vlaidates :name, :phone, :email, :company, :comment, presence: true
end
